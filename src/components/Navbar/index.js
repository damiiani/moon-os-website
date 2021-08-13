import React from 'react';
import { Link } from 'react-router-dom';

import navbarItems from '../../utils/navbarItems';

import logo from '../../assets/logo192.png';

import './styles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 className="navbar-title">MoonOS</h1>
        <img className="navbar-logo" src={logo} alt="" />
      </div>

      <ul className="navbar-items">
        {navbarItems.map((item) => (
          <li>
            <Link className="navbar-link" to={item.url}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

    </nav>
  );
}

export default Navbar;
