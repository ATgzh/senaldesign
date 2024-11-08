import React from 'react';
import logo from '../Images/logo.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../Styles/Sidebar.css';

const Sidebar = () => {
    return (
      <div className="sidebar">
        {/* Logo */}
        <div className="sidebar-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Sidebar menu */}
        <ul className="sidebar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#plans">Plans</a></li>
        </ul>
      </div>
    );
};

export default Sidebar;