import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Collapse } from 'reactstrap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <a href="/#" className="navbar-brand">
          TodoList
        </a>
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
              <a href="/#" className="nav-link">
                Logout
              </a>
            </li>
          </ul>
        </Collapse>
      </div>
    </nav>
  );
};

export default Navbar;
