import React from 'react';
import logo from '../Images/logo.png';
import '../Styles/Navbar.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-fixed-top">
      <Container fluid>
        {/* Logo with proper styling */}
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        {/* Toggler for smaller screens */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Navbar links and buttons */}
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#plans">Plans</Nav.Link>
          </Nav>
          <div className="d-flex">
            {/* Login and Sign Up buttons */}
            <Button variant="primary" className="me-2">Login</Button>
            <Button variant="primary">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;