import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

const Public = ({ children }) => (
  <div className="public bg-primary">{children}</div>
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
