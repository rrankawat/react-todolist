import React, { useState, useContext, useEffect, Fragment } from 'react';
// import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = () => {
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors } = authContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  useEffect(() => {
    if (error) {
      setAlert(error, 'danger');
    }
    clearErrors();
    // eslint-disable-next-line
  }, [error]);

  const [user, setUser] = useState({
    email: '',
    password: '',
    errors: {},
  });

  const validEmail = (email) => {
    if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      return true;
    }
    return false;
  };

  const { email, password, errors } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    let errors = user.errors;

    // Email
    if (!validEmail(email)) {
      errors.email = {
        param: 'email',
        msg: 'Email is not valid',
      };
    } else {
      delete errors.email;
    }

    // Password
    if (password === '') {
      errors.password = {
        param: 'password',
        msg: 'Password is required',
      };
    } else {
      delete errors.password;
    }

    setUser({ ...user, errors });

    if (Object.keys(errors).length === 0) {
      setAlert('Please wait...', 'warning');
      login({ email, password });
    }
  };

  return (
    <Fragment>
      <h1 className="text-primary text-center">TodoList</h1>

      <form className="mt-4" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="email"
            className={`form-control ${errors.email && 'is-invalid'}`}
            placeholder="Email"
            value={email}
            onChange={onChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.msg}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className={`form-control ${errors.password && 'is-invalid'}`}
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.msg}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary btn-block"
            placeholder="Password"
            value="Login"
          />
        </div>
        {/* <div className="form-group">
          Not a user ? click here to <Link to="/register">Register</Link>
        </div> */}
      </form>
    </Fragment>
  );
};

export default Login;
