import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#">Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#">About Me</Nav.Link>
        <Nav.Link href="#">Portfolio</Nav.Link>
        <Nav.Link href="#">Contact</Nav.Link>
        <Nav.Link href="#">Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default CustomNavbar;