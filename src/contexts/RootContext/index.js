import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import history from 'app/router/history';
import withApolloClient from 'hoc/withApolloClient';
import withGlobalData from 'hoc/withGlobalData';

import {
  LOGIN,
  FETCH_INITIAL_DATA,
  FETCH_CURRENT_ACCOUNT_QUERY,
  SET_GLOBAL_DATA,
} from './queries';

const RootContext = React.createContext();

const Provider = ({ client, children, login, setGlobalData }) => {
  const [user, setUser] = useState(null);
  const [isMounted, setMounted] = useState(false);

  const setAuthUserAndToken = ({ token, account }) => {
    localStorage.setItem('healfit:token', token);
    setUser(account);
  };

  useEffect(() => {
    window.cloudinary.setCloudName('healfituk');

    const performInitialFetch = async () => {
      const {
        data: { globalData },
      } = await client.query({
        query: FETCH_INITIAL_DATA,
      });

      console.log(globalData);
      await setGlobalData({ variables: { globalData } });

      const currentAccount = await client.query({
        query: FETCH_CURRENT_ACCOUNT_QUERY,
      });

      const { currentAccountInfo: account } = currentAccount.data;
      setUser(account);
    };

    performInitialFetch()
      .then(() => setMounted(true))
      .catch(() => setMounted(true));
  }, [client, setGlobalData]);

  const onLogin = async ({ email, password }) => {
    const result = await login({ variables: { email, password } });
    const { account, token } = result.data.login;

    localStorage.setItem('healfit:token', token);
    setAuthUserAndToken({ token, account });
  };

  const onLogout = () => {
    localStorage.removeItem('healfit:token');
    history.push('/auth/signin');
  };

  const context = {
    amILoggedIn: user !== null,
    authUser: user,
    onLogin,
    onLogout,
    // onRecoverAccount: this.onRecoverAccount,
    // onResetPassword: this.onResetPassword,
    // onUpdateUser: this.updateUserOnLocalStorage,
    // isTokenExpired: this.isTokenExpired,
  };

  return (
    <RootContext.Provider value={context}>
      {isMounted && children}
    </RootContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.any.isRequired,
  login: PropTypes.func.isRequired,
  setGlobalData: PropTypes.func.isRequired,
  client: PropTypes.shape({
    query: PropTypes.func.isRequired,
  }).isRequired,
};

const RootProvider = compose(
  graphql(SET_GLOBAL_DATA, { name: 'setGlobalData' }),
  graphql(LOGIN, { name: 'login' }),
  withGlobalData,
  withApolloClient
)(Provider);

const RootConsumer = RootContext.Consumer;

export { RootProvider, RootConsumer, RootContext };
