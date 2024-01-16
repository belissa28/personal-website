import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <Navbar bg="black" expand="lg" className={styles.navbar}>
            <Container className={styles.navbarContainer}>
                <Navbar.Brand as={NavLink} to="/" style={{ color: 'white' }}>YourBrand</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" className={styles.navLink} style={{ color: 'white' }}>
                            Home
            </Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className={styles.navLink} style={{ color: 'white' }}>
                            About
            </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className={styles.navLink} style={{ color: 'white' }}>
                            Contact
            </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;