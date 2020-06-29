import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Collapse } from 'reactstrap';

import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { logout, user } = authContext;

  const [isOpen, setIsOpen] = useState(false);

  const onClick = (e) => {
    e.preventDefault();

    logout();
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          TodoList
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#todoNav"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu />
        </button>

        <Collapse isOpen={isOpen} navbar>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/#" className="nav-link">
                Hi, <strong>{user && user.name.split(' ')[0]}</strong>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/#" className="nav-link" onClick={onClick}>
                Logout
              </Link>
            </li>
          </ul>
        </Collapse>
      </div>
    </nav>
  );
};

export default Navbar;
