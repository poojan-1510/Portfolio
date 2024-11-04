// src/components/Header.js

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Poojan Shah</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#profile">Profile</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
