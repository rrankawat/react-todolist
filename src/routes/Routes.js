import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Todos from '../components/todos/Todos';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import NotFound from '../components/pages/NotFound';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/todos" />
        </Route>

        <PrivateRoute exact path="/todos" component={Todos} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
