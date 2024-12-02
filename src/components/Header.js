import React from 'react';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import '../styles/header.css';
import logoImage from '../images/logo.png';

const Header = () => (
  <Navbar bg="light" expand="lg" className="py-3">
    <Container fluid>
      {/* Logo */}
      <Navbar.Brand href="#" className="d-flex align-items-center">
        <img 
          src={logoImage}
          alt="HABOT Logo" 
          className="img-fluid logo" 
        />
      </Navbar.Brand>

      {/* Navbar Toggle for Mobile */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="align-items-center">
          {/* Find Suppliers */}
          <Nav.Link href="#find-suppliers" className="px-3 nav-link-custom">
            Find Suppliers
          </Nav.Link>
          
          {/* Find Service Tags (Dropdown) */}
          <NavDropdown 
            title="Find Service Tags" 
            id="nav-dropdown" 
            className="px-3 nav-link-custom"
          >
            <NavDropdown.Item href="#service1">Service Tag 1</NavDropdown.Item>
            <NavDropdown.Item href="#service2">Service Tag 2</NavDropdown.Item>
            <NavDropdown.Item href="#service3">Service Tag 3</NavDropdown.Item>
          </NavDropdown>

          {/* Login / Signup Button */}
          <Button href="#login" className="login-btn ms-3 bg-light text-success border-success">
            Login / Signup
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
