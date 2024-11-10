import React from 'react';
import logo from '../Images/logo.png';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-fixed-top">
      <Container fluid>
        {/* Logo with proper styling */}
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </Navbar.Brand>

        {/* Toggler for smaller screens */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Navbar links and buttons */}
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 custom-nav" style={{ maxHeight: '100px' }} navbarScroll>
            {/* Using Link components instead of Nav.Link for routing */}
            <Nav.Item>
              <Link to="/" className="nav-link">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/AboutUs" className="nav-link">About</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/plans" className="nav-link">Plans</Link>
            </Nav.Item>
          </Nav>
          <div className="d-flex">
            {/* Login and Sign Up buttons */}
            <Link to="/login">
              <Button variant="primary" className="me-2">Login</Button>
            </Link>
            <Link to="/signup">
              <Button variant="primary">Sign Up</Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;