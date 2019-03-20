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

  useEffect(
    () => {
      window.cloudinary.setCloudName('healfituk');

      const performInitialFetch = async () => {
        const {
          data: { globalData },
        } = await client.query({
          query: FETCH_INITIAL_DATA,
        });

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
    },
    [isMounted]
  );

  const onLogin = async ({ email, password }) => {
    // try {
    const result = await login({ variables: { email, password } });
    const { account, token } = result.data.login;

    localStorage.setItem('healfit:token', token);
    setAuthUserAndToken({ token, account });
    setMounted(true);
    // } catch (error) {
    //   const errors = error.graphQLErrors.map(x => x.message);
    //   throw new Error(errors[0]);
    // }
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

// class RootProvider extends Component {
//   state = {
//     isMounted: false,
//     amILoggedIn: false,
//     authUser: null,
//   };

//   componentDidMount() {
//     const userEmail = localStorage.getItem('llah-user-email');
//     const jwt = localStorage.getItem('llah-token');
//     const subdomain = localStorage.getItem('llah-subdomain');

//     if (userEmail && jwt && subdomain) {
//       return api.auth
//         .fetchUserInfo(userEmail)
//         .then(this.setRootUser)
//         .catch(this.onLogout)
//         .finally(this.setMounted);
//     }
//     this.setMounted();
//   }

//   setMounted = () => this.setState({ isMounted: true });

//   isTokenExpired = () => {
//     const jwt = localStorage.getItem('llah-token');
//     if (isNull(jwt)) {
//       return true;
//     }
//     const { exp } = parseJwt(jwt);
//     return moment().unix() >= exp;
//   };

//   setRootUser = user => {
//     this.setState({ amILoggedIn: true, authUser: user });
//   };

//   setAuthUserAndToken = (user, token) => {
//     localStorage.setItem('llah-token', token);
//     this.setRootUser(user);
//   };

//   onFetchAccountInfo = (email, tokenValue) =>
//     api.auth.fetchAccountInfo(email, tokenValue);

//   onConfirmAccount = data => api.auth.confirmAccount(data);

//   onRecoverAccount = email => api.auth.recoverAccount(email);

//   onResetPassword = (email, token, password) =>
//     api.auth.resetPassword(email, token, password);

//   const onLogin = async({ email, password }) => {
//     try {
//       const result = await this.props.login({ variables: { email, password } });
//       const { account, token } = result.data.login;

//       localStorage.setItem('healfit:token', token);
//       setUserAndToken(account)
//       return result
//     } catch(e) {
//       const errors = error.graphQLErrors.map(x => x.message);
//       console.log(error)
//       throw new Error(error)
//       // this.setState(({ ui }) => ({ ui: ui.toError(errors[0]) }));
//       // setSubmitting(false);
//       // return setTimeout(
//       //   () => this.setState(({ ui }) => ({ ui: ui.toIdle() })),
//       //   3000
//       // );
//     }

//   }
//     api.auth.login(email, password).then(({ user, token, subdomain }) => {
//       this.setAuthUserAndToken(user, token, subdomain);
//       return user;
//     });

//   onLogout = () => {
//     this.setState({ amILoggedIn: false, authUser: null });
//     localStorage.removeItem('llah-user');
//     localStorage.removeItem('llah-token');
//     localStorage.removeItem('llah-subdomain');
//     history.push('/');
//   };

//   render() {
//     const context = {
//       amILoggedIn: this.state.amILoggedIn,
//       authUser: this.state.authUser,
//       onFetchAccountInfo: this.onFetchAccountInfo,
//       onConfirmAccount: this.onConfirmAccount,
//       onLogin: this.onLogin,
//       onLogout: this.onLogout,
//       onRecoverAccount: this.onRecoverAccount,
//       onResetPassword: this.onResetPassword,
//       onUpdateUser: this.updateUserOnLocalStorage,
//       isTokenExpired: this.isTokenExpired,
//     };

//     return (
//       <RootContext.Provider value={context}>
//         {this.state.isMounted && this.props.children}
//       </RootContext.Provider>
//     );
//   }
// }

const RootConsumer = RootContext.Consumer;

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

export { RootProvider, RootConsumer, RootContext };
