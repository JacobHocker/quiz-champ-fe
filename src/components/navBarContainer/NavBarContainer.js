import React, { useContext, useState }from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import './NavBarContainer.scss';
import {AuthContext} from '../../Helpers/AuthContext';
import axios from 'axios';
import navLogo from '../../assets/images/quiz-champ-sm.png';

export default function NavBarContainer() {
    const [expanded, setExpanded] = useState(false);
    const { userId, setAuthState, username, userObj } = useContext(AuthContext);
    

    let navigate = useNavigate();

    const toHome = () => {
        navigate('/');
    }
    const toCategories = () => {
        navigate('/categories');
        setExpanded(!expanded);
    }
    const toSearch = () => {
        navigate('/search');
        setExpanded(!expanded);
    }
    const toRules = () => {
        navigate('/rules-rewards-info');
        setExpanded(!expanded);
    }
    const toAdmin = () => {
        navigate('/admin');
        setExpanded(!expanded);
    }
    const toProfile = () => {
        navigate(`/profile/${username}`);
        setExpanded(!expanded);
    }
    const toQuizzes = () => {
        navigate('/quizzes');
        setExpanded(!expanded);
    }
    

    const logout = () => {
        localStorage.removeItem("accessToken")
        setAuthState({ username: "", id: 0, status: false })
    };

    return (
        <Navbar expanded={expanded} collapseOnSelect className='nav-container' expand="md" >
            <Container>
                <Navbar.Brand onClick={toHome}>
                    <img src={navLogo} alt='nav-logo' className='nav-logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nav-toggle'  
                onClick={() => {setExpanded(!expanded)}}> <GiHamburgerMenu className='nav-ham'/></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className='nav-list'>
                        <Nav className="me-auto">
                            <NavDropdown title='Quizzes' id="basic-nav-dropdown" className='nav-link'>
                            <NavDropdown.Item onClick={toSearch}>
                                    Search
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={toQuizzes}>
                                    All Quizzes
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={toCategories}>
                                    Quiz By Category
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={toRules}>
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
                            <Nav.Link onClick={toAdmin}>
                                <h2 className='nav-link'>Admin</h2>
                            </Nav.Link>
                        
                                {userObj.data && 
                                    <img src={userObj.data.avatar} className='nav-avatar' alt={userObj.data.username}  onClick={toProfile}/>
                                }
                            
                            <button onClick={logout} className='nav-btn'>Logout</button>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
