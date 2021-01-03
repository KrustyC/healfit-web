import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { RootContext } from 'app/contexts/RootContext';

const AdminRoute = ({ component: Component, ...rest }) => {
  const { amILoggedIn, authUser } = useContext(RootContext);

  return (
    <Route
      {...rest}
      render={props =>
        amILoggedIn && authUser.roles.includes('ADMIN') ? (
          <Component {...props} />
        ) : (
          <Redirect
            // eslint-disable-next-line react/prop-types
            to={{ pathname: '/meal-plan', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

AdminRoute.propTypes = {
  component: PropTypes.any.isRequired,
};

export default AdminRoute;
