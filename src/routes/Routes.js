import React, { useContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import AuthContext from '../context/auth/authContext';

import Todos from '../components/todos/Todos';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import NotFound from '../components/pages/NotFound';
import { Spinner } from 'reactstrap';

const Routes = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser } = authContext;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (loading) {
    return (
      <div className="home-spinner">
        <Spinner color="primary" style={{ width: '3rem', height: '3rem' }} />
      </div>
    );
  }

  return (
    <Router>
      {isAuthenticated ? (
        <Switch>
          <PrivateRoute exact path="/todos" component={Todos} />
          <Route exact path="/login" render={() => <Redirect to="/todos" />} />
          <Route
            exact
            path="/register"
            render={() => <Redirect to="/todos" />}
          />
          <Route exact path="/" render={() => <Redirect to="/todos" />} />
          <Route component={NotFound} />
        </Switch>
      ) : (
        <Switch>
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/register" component={Register} />
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/todos" render={() => <Redirect to="/login" />} />
          <Route component={NotFound} />
        </Switch>
      )}
    </Router>
  );
};

export default Routes;
