import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="d-flex flex-column w-25">
      <h1 className="text-white text-center">Register Here</h1>

      <form className="mt-4">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-dark btn-block"
            placeholder="Password"
          />
        </div>
        <div className="form-group text-white">
          Already a user ? click here to{' '}
          <strong>
            <Link to="/login" className="text-white">
              Login
            </Link>
          </strong>
        </div>
      </form>
    </div>
  );
};

export default Register;
