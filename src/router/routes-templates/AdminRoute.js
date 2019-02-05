import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import withAuth from 'helpers/withAuth';

const AdminRoute = ({
  isAuthenticated,
  user,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated && user.roles.include('ADMIN') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/auth/login', state: { from: props.location } }}
        />
      )
    }
  />
);

AdminRoute.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.any.isRequired,
};

AdminRoute.defaultProps = {
  user: null,
};

export default withAuth(AdminRoute);
