import React from 'react';
import logo from '../Images/logo.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
        <li><Link to="/">Home</Link></li>  {/* Use Link to="/" for Home */}
          <li><Link to="/Library">Documents</Link></li>  {/* Link to Library component */}
          <li><Link to="/plans">Upgrade Plan</Link></li> {/* Link to other pages */}
        </ul>
      </div>
    );
};

export default Sidebar;