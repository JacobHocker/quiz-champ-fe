import React, { useEffect, useState, useContext }from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import './NavBarContainer.scss';
import {AuthContext} from '../../Helpers/AuthContext';
import axios from 'axios';
import navLogo from '../../assets/images/quiz-champ-sm.png';

export default function NavBarContainer() {
    const { userId, setAuthState } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:2000/auth/userInfo/${userId}`)
        .then((response) => {
            setUserInfo(response)
        })
    }, [userId])

    const logout = () => {
        localStorage.removeItem("accessToken")
        setAuthState({ username: "", id: 0, status: false })
    };
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
                            {/* <Nav.Link href='/categories'>
                                <h2 className='nav-link'>Categories</h2>
                            </Nav.Link>
                            <Nav.Link href='/search'>
                                <h2 className='nav-link'>Search</h2>
                            </Nav.Link>
                            <Nav.Link href='/forum'>
                                <h2 className='nav-link'>Forum</h2>
                            </Nav.Link> */}
                            <Nav.Link href='/admin'>
                                <h2 className='nav-link'>Admin</h2>
                            </Nav.Link>
                            <Nav.Link href='/profile'>
                                {userInfo.data && 
                                    <img src={userInfo.data.avatar} className='nav-avatar' alt={userInfo.data.username} />
                                }
                            </Nav.Link>
                            <button onClick={logout}>Logout</button>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
