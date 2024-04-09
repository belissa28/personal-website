import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <Navbar bg="black" expand="lg">
            <Container fluid className={styles.navbarContainer}>
                <Navbar.Brand as={NavLink} to="/" className={styles.navbar} style={{ color: 'white', fontWeight: 'bold', marginLeft: 'auto' }}>Belissa's Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" >
                        <Nav.Link as={NavLink} to="/" className={styles.navLink} style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className={styles.navLink} style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>About</Nav.Link>
                        <Nav.Link as={NavLink} to="/work" className={styles.navLink} style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>Work</Nav.Link>
                        <Nav.Link as={NavLink} to="/funfacts" className={styles.navLink} style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>Fun Facts</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className={styles.navLink} style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>Contact</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavBar;