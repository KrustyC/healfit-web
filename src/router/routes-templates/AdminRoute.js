import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import withAuth from 'hoc/withAuth';

const AdminRoute = ({
  isAuthenticated,
  account,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated && account.roles.includes('ADMIN') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/dashboard', state: { from: props.location } }}
        />
      )
    }
  />
);

AdminRoute.propTypes = {
  account: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.any.isRequired,
};

AdminRoute.defaultProps = {
  account: null,
};

export default withAuth(AdminRoute);
