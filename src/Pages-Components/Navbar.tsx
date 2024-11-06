// src/components/Navbar.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="logo.png" alt="Logo" className="logo" />
        SEÑAL
      </a>
      <div className="ml-auto navbar-links">
        <a className="nav-link" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Plans</a>
        <button className="btn btn-outline-primary mx-2">Login</button>
        <button className="btn btn-primary">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;