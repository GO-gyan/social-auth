import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authService from '../services/authService';

const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authService.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { target: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoutes;
