import React from 'react';
import { Link } from 'react-router-dom';

//props -->properties
//props is readonly..
export const Navbar = (props) => {
  console.log("navbar props",props)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo / Brand */}
        <Link className="navbar-brand fw-bold" to="/">{props.appName} Hub</Link>

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
              <Link className="nav-link" to="/schedual">Schedule</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Stats</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo1">Form Demo 1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo4">Form Demo 4</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdemo5">Form Demo 4</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/useMemo">useMemo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/useMemo3">useMemo2</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apidemo1">API DEMO 1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apidemo2">API DEMO 2</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/useeffectdemo1">useeffectdemo1 </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/adduser">Add User</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/adduserform">Add User form</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
