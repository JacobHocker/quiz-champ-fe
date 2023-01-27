import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import './NavBarContainer.scss';
import navLogo from '../../assets/images/quiz-champ-sm.png';

export default function NavBarContainer() {

    return (
        <Navbar collapseOnSelect className='nav-container' expand="sm" >
            <Container>
                <Navbar.Brand href='/'>
                    <img src={navLogo} alt='nav-logo' className='nav-logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nav-toggle'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className='nav-list'>
                        <Nav className="me-auto">
                            <Nav.Link href='/quizzes'>
                                <h2 className='nav-link'>Quizzes</h2>
                            </Nav.Link>
                            <Nav.Link href='/admin'>
                                <h2 className='nav-link'>Admin</h2>
                            </Nav.Link>
                            <Nav.Link href='/profile'>
                                <h2 className='nav-link'>Username</h2>
                            </Nav.Link>
                            <button>Logout</button>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
