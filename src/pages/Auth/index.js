import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect, Route } from 'react-router-dom';

import SignUp from './SignUp';
import SignIn from './SignIn';

const AuthIndex = ({ match: { path } }) => (
  <Switch>
    <Route path={`${path}/signin`} component={SignIn} />
    <Route path={`${path}/signup`} component={SignUp} />
    <Redirect to={`${path}/signin`} />
  </Switch>
);

AuthIndex.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default AuthIndex;
