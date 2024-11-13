// src/components/Header.js

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header({ onLinkClick, activeSection }) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Poojan Shah</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {['profile', 'education', 'skills', 'projects', 'contact'].map((section) => (
                        <Nav.Link
                            key={section}
                            onClick={() => onLinkClick(section)}
                            className={activeSection === section ? 'active' : ''}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
