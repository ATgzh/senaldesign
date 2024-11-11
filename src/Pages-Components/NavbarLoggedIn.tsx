import React from 'react';
import logo from '../Images/logo.png';
import '../Styles/NavbarLoggedIn.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-fixed-top">
      <Container fluid>
        {/* Logo or any other elements can go here */}
        <Nav className="ms-auto"> {/* ms-auto pushes the Login button to the right */}
          <Link to="/login">
            <Button variant="primary" className="me-2">Log out</Button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;