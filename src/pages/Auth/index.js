import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect, Route } from 'react-router-dom';

import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import VerifyAccount from './VerifyAccount';
import Logout from './Logout';

const AuthIndex = ({ match: { path } }) => (
  <Switch>
    <Route path={`${path}/signin`} component={SignIn} />
    <Route path={`${path}/signup`} component={SignUp} />
    <Route path={`${path}/forgot-password`} component={ForgotPassword} />
    <Route path={`${path}/reset-password`} component={ResetPassword} />
    <Route path={`${path}/verify-account`} component={VerifyAccount} />
    <Route path={`${path}/logout`} component={Logout} />
    <Redirect to={`${path}/signin`} />
  </Switch>
);

AuthIndex.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default AuthIndex;
