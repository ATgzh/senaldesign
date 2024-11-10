import React from 'react';
import logo from '../Images/logo.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../Styles/SidebarAbout.css';

const Sidebar = () => {
    return (
      <div className="sidebar">
        {/* Logo */}
        <div className="sidebar-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Sidebar menu */}
        <ul className="sidebar-menu">
        <li><Link to="/AboutUs">About Us</Link></li>  {/* Use Link to="/" for Home */}
          <li><Link to="/AnalysisModules">Analysis Modules</Link></li>  {/* Link to Library component */}
          <li><Link to="/Plans">Scoring</Link></li> {/* Link to other pages */}
        </ul>
      </div>
    );
};

export default Sidebar;