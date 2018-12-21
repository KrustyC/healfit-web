import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import moment from 'moment';
import isNull from 'lodash/isNull';
import { history } from 'app/router';

// import api from '../services/ApiSingleton';
const api = {};
function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

const AuthContext = React.createContext();

class AuthProvider extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  state = {
    isMounted: false,
    amILoggedIn: false,
    authUser: null,
  };

  componentDidMount() {
    const userEmail = localStorage.getItem('keepitfit-user-email');
    const jwt = localStorage.getItem('keepitfit-token');
    const subdomain = localStorage.getItem('keepitfit-subdomain');

    if (userEmail && jwt && subdomain) {
      return api.auth
        .fetchUserInfo(userEmail)
        .then(this.setAuthUser)
        .catch(this.onLogout)
        .finally(this.setMounted);
    }
    return this.setMounted();
  }

  setMounted = () => this.setState({ isMounted: true });

  isTokenExpired = () => {
    const jwt = localStorage.getItem('keepitfit-token');
    if (isNull(jwt)) {
      return true;
    }
    const { exp } = parseJwt(jwt);
    console.log(exp);
    return false;
    // return moment().unix() >= exp;
  };

  setAuthUser = user => {
    this.setState({ amILoggedIn: true, authUser: user });
  };

  setAuthUserAndToken = (user, token, subdomain) => {
    localStorage.setItem('keepitfit-user-email', user.email);
    localStorage.setItem('keepitfit-token', token);
    localStorage.setItem('keepitfit-subdomain', subdomain);
    this.setAuthUser(user);
  };

  updateUserOnLocalStorage = user => {
    this.setState({ authUser: user });
    localStorage.setItem('keepitfit-user', JSON.stringify(user));
  };

  // onFetchAccountInfo = (email, tokenValue) =>
  //   api.auth.fetchAccountInfo(email, tokenValue);

  // onConfirmAccount = data => api.auth.confirmAccount(data);

  // onRecoverAccount = email => api.auth.recoverAccount(email);

  // onResetPassword = (email, token, password) =>
  //   api.auth.resetPassword(email, token, password);

  onLogin = ({ email, password }) =>
    api.auth.login(email, password).then(({ user, token, subdomain }) => {
      this.setAuthUserAndToken(user, token, subdomain);
      return user;
    });

  onLogout = () => {
    this.setState({ amILoggedIn: false, authUser: null });
    localStorage.removeItem('keepitfit-user');
    localStorage.removeItem('keepitfit-token');
    localStorage.removeItem('keepitfit-subdomain');
    history.push('/');
  };

  render() {
    const context = {
      amILoggedIn: this.state.amILoggedIn,
      authUser: this.state.authUser,
      onFetchAccountInfo: this.onFetchAccountInfo,
      onConfirmAccount: this.onConfirmAccount,
      onLogin: this.onLogin,
      onLogout: this.onLogout,
      onRecoverAccount: this.onRecoverAccount,
      onResetPassword: this.onResetPassword,
      onUpdateUser: this.updateUserOnLocalStorage,
      isTokenExpired: this.isTokenExpired,
    };

    return (
      <AuthContext.Provider value={context}>
        {this.state.isMounted && this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
export { AuthProvider, AuthConsumer };
