import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#">Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="ml-auto">
      <Nav.Link as={Link} to="/aboutme">About Me</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="#">Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default CustomNavbar;
