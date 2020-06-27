import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../components/layout/Navbar';

const Private = ({ children }) => (
  <Fragment>
    <Navbar />
    <div className="container">{children}</div>
  </Fragment>
);

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Private>
          <Component {...props} />
        </Private>
      )}
    />
  );
};

export default PrivateRoute;
