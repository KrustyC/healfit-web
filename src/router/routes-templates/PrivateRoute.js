import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import withAuth from 'helpers/withAuth';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/auth/login', state: { from: props.location } }}
        />
      )
    }
  />
);

export default withAuth(PrivateRoute);
