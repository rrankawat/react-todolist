import React from 'react';
import { Route } from 'react-router-dom';
import Alert from '../components/layout/Alert';

const Public = ({ children }) => (
  <div className="public bg-light">
    <div className="auth">
      <Alert />
      {children}
    </div>
  </div>
);

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Public>
          <Component {...props} />
        </Public>
      )}
    />
  );
};

export default PublicRoute;
