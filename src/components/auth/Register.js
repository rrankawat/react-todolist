import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPass: '',
    errors: {},
  });

  const validEmail = (email) => {
    if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      return true;
    }
    return false;
  };

  const { name, email, password, confirmPass, errors } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    let errors = user.errors;

    // Name
    if (name === '') {
      errors.name = {
        param: 'name',
        msg: 'Name is required',
      };
    } else {
      delete errors.name;
    }

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
    if (password.length < 6) {
      errors.password = {
        param: 'password',
        msg: 'Password length must be 6 characters or long',
      };
    } else {
      delete errors.password;
    }

    // Confirm Password
    if (password !== confirmPass) {
      errors.confirmPass = {
        param: 'confirmPass',
        msg: 'Password do not match',
      };
    } else {
      delete errors.confirmPass;
    }

    setUser({ ...user, errors });

    if (Object.keys(errors).length === 0) {
      console.log('success');
    }
  };

  return (
    <div className="d-flex flex-column w-25">
      <h1 className="text-primary text-center">Register</h1>

      <form className="mt-4" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className={`form-control ${errors.name && 'is-invalid'}`}
            placeholder="Name"
            value={name}
            onChange={onChange}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.msg}</div>
          )}
        </div>
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
            type="password"
            name="confirmPass"
            className={`form-control ${errors.confirmPass && 'is-invalid'}`}
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={onChange}
          />
          {errors.confirmPass && (
            <div className="invalid-feedback">{errors.confirmPass.msg}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary btn-block"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          Already a user ? click here to <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
