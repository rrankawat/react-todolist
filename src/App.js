import React from 'react';
import Routes from './routes/Routes';

import AuthState from './context/auth/AuthState';
import TodoState from './context/todo/TodoState';
import AlertState from './context/alert/AlertState';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <AuthState>
      <TodoState>
        <AlertState>
          <Routes />
        </AlertState>
      </TodoState>
    </AuthState>
  );
};

export default App;
