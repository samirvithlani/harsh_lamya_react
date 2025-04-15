import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo / Brand */}
        <Link className="navbar-brand fw-bold" to="/">IPL Hub</Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              {/* <a className="nav-link" href="/teams">Teams</a> */}
              <Link className="nav-link" to="/teams">Teams</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Schedule</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Stats</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
