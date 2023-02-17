import React, { useEffect, useState, useContext }from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './NavBarContainer.scss';
import {AuthContext} from '../../Helpers/AuthContext';
import axios from 'axios';
import navLogo from '../../assets/images/quiz-champ-sm.png';

export default function NavBarContainer() {
    const { userId, setAuthState, username } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({});

    let navigate = useNavigate();

    const toProfile = () => {
        navigate(`/profile/${username}`)
    }
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
        <Navbar collapseOnSelect className='nav-container' expand="md" >
            <Container>
                <Navbar.Brand href='/'>
                    <img src={navLogo} alt='nav-logo' className='nav-logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nav-toggle'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className='nav-list'>
                        <Nav className="me-auto">
                            <NavDropdown title='Quizzes' id="basic-nav-dropdown" className='nav-link'>
                                <NavDropdown.Item href="/quizzes">
                                    Quizzes
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/search">
                                    Search
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/categories">
                                    Categories
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/rules-rewards-info">
                                    Rules & Rewards
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title='Community' id="basic-nav-dropdown" className='nav-link'>
                                <NavDropdown.Item href="#action/3.1">
                                    Forum
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">
                                    Leaderboard
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href='/admin'>
                                <h2 className='nav-link'>Admin</h2>
                            </Nav.Link>
                        
                                {userInfo.data && 
                                    <img src={userInfo.data.avatar} className='nav-avatar' alt={userInfo.data.username}  onClick={toProfile}/>
                                }
                            
                            <button onClick={logout} className='nav-btn'>Logout</button>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
