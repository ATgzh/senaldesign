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
      </div>
    );
};

export default Sidebar;