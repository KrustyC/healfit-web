import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { RootContext } from 'app/contexts/RootContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const rootContext = useContext(RootContext);

  return (
    <Route
      {...rest}
      render={props =>
        rootContext.amILoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/auth/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
};

export default PrivateRoute;
