import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';
import { AuthContext } from '../../Helpers/AuthContext';
import navLogo from '../../assets/images/quiz-champ-sm.png';
import { Sling as Hamburger } from 'hamburger-react';
import {AiFillCaretRight, AiFillCaretDown} from 'react-icons/ai';




const quizData = [
    {
        id: 0,
        title: 'Find A Quiz',
        path: "/search"
    },
    {
        id: 1,
        title: 'All Quizzes',
        path: "/quizzes"
    },
    {
        id: 2,
        title: "Quiz By Category",
        path: "/categories"
    },
    {
        id: 3,
        title: "Rules & Rewards",
        path: "/rules-rewards-info"
    }
]

const communityData = [
    {
        id: 0,
        title: "Forum",
        path: "/forum/posts",
    },
    {
        id: 1,
        title: "Leaderboard",
        path: "/leaderboard",
    },
    {
        id: 2,
        title: "Contact Us",
        path: "/contact-us",
    }
]


const Navbar = () => {
    const [expanded, setExpanded] = useState(false);
    const [dropdownOne, setDropdownOne] = useState(false);
    const [dropdownTwo, setDropdownTwo] = useState(false);
    const [dropdownThree, setDropdownThree] = useState(false);
    const [dropdownFour, setDropdownFour] = useState(false);
    const { setAuthState, username, userObj} = useContext(AuthContext);

    let navigate = useNavigate();

    useEffect(() => {
        if(expanded === false) {
            setDropdownOne(false);
            setDropdownTwo(false);
        }
    }, [expanded])

    const toHome = () => {
        navigate("/");
        setExpanded(false);
    };
    const toProfile = () => {
        navigate(`/profile/${username}`);
        setExpanded(false);
    };
    const logout = () => {
        localStorage.removeItem("accessToken")
        setAuthState({ username: "", id: 0, status: false})
        navigate("/");
    }


    return (
        <div>
            {/* NAVBAR CONTAINER */}
            <div className='navbar-container'>
                <div className='nav-logo'>
                    <img src={navLogo} alt='QC Nav Logo' className='nav-logo' />
                </div>
                <div className='nav-links'>
                    <h3 className='nav-link-item' onClick={toHome}>Home</h3>
                    <div className='nav-dropdown'>
                        <h3 className='nav-link-item' onClick={() => {setDropdownThree(!dropdownThree); setDropdownFour(false)}}>
                            Quizzes {dropdownThree ? <AiFillCaretDown className='caret' /> : <AiFillCaretRight className='caret' /> }
                        </h3>
                        {
                                dropdownThree ? 
                                <ul className='dropdown-three'>
                                    {quizData.map((d) => (
                                        <li key={d.id} onClick={() => { navigate(d.path); setDropdownThree(false)}}
                                        className='dropdown-item'
                                        >
                                            {d.title}
                                        </li>
                                    ))}
                                </ul>
                                :
                                <></>
                            }
                    </div>
                    <div className='nav-dropdown'>
                        <h3 className='nav-link-item' onClick={() => {setDropdownFour(!dropdownFour); setDropdownThree(false)}}>
                            Community {dropdownFour ? <AiFillCaretDown className='caret' /> : <AiFillCaretRight className='caret' /> }
                        </h3>
                        {
                                dropdownFour ? 
                                <ul className='dropdown-four'>
                                    {communityData.map((d) => (
                                        <li key={d.id} onClick={() => { navigate(d.path); setDropdownFour(false)}}
                                        className='dropdown-item'
                                        >
                                            {d.title}
                                        </li>
                                    ))}
                                </ul>
                                :
                                <></>
                            }
                    </div>
                    
                    {
                        username === 'Jake' ?
                        <h3 className='nav-link-item' onClick={() => {navigate("/admin"); setExpanded(false)}}>Admin</h3>
                        :
                        <></>
                    }
                </div>
                <div className='user-nav'>
                    {userObj.data && 
                        <img src={userObj.data.avatar} className='nav-avatar' alt={userObj.data.username}  onClick={toProfile}/>
                    }
                    <button onClick={logout} className='nav-btn'>Logout</button>
                </div>
            </div>






            {/* MOBILE NAVBAR CONTAINER */}
            <div className='mobile-navbar-container'>
                
                <div>
                    <Hamburger  toggled={expanded} toggle={setExpanded} color='#0294C4'/>
                </div>
                <div className='mobile-user-nav'>
                    {userObj.data && 
                        <img src={userObj.data.avatar} className='mobile-nav-avatar' alt={userObj.data.username}  onClick={toProfile}/>
                    }
                    <button onClick={logout} className='nav-btn'>Logout</button>
                </div>
                
                {
                    expanded ? 
                    <div className='mobile-nav-modal'>
                        <div className='mobile-nav-links'>
                            <img src={navLogo} className='mobile-nav-logo' alt='mobile-QC-Logo' />
                            <h3 className='mobile-nav-link' onClick={toHome}>Home</h3>
                            <h3 className='mobile-nav-link' onClick={() => {setDropdownOne(!dropdownOne); setDropdownTwo(false)}}>
                                Quizzes  {dropdownOne ? <AiFillCaretDown className='caret' /> : <AiFillCaretRight className='caret' /> }
                            </h3> 
                            {
                                dropdownOne ? 
                                <ul className='mobile-dropdown-one'>
                                    {quizData.map((d) => (
                                        <li key={d.id} onClick={() => { navigate(d.path); setExpanded(false)}}
                                        className='mobile-dropdown-item'
                                        >
                                            {d.title}
                                        </li>
                                    ))}
                                </ul>
                                :
                                <></>
                            }
                            <h3 className='mobile-nav-link' onClick={() => {setDropdownTwo(!dropdownTwo); setDropdownOne(false)}}>
                                Community {dropdownTwo ? <AiFillCaretDown className='caret' /> : <AiFillCaretRight className='caret' /> }
                            </h3>
                            {
                                dropdownTwo ? 
                                <ul className='mobile-dropdown-two'>
                                    {communityData.map((d) => (
                                        <li key={d.id} onClick={() => { navigate(d.path); setExpanded(false)}}
                                        className='mobile-dropdown-item'
                                        >
                                            {d.title}
                                        </li>
                                    ))}
                                </ul>
                                :
                                <></>
                            }
                            {username === "Jake" ? 
                            <h3 className='mobile-nav-link' onClick={() => {navigate("/admin"); setExpanded(false)}}>
                                Admin
                            </h3>
                            :
                            <></>
                            }
                        </div>
                            
                        
                        
                    </div>
                    :
                    <></>
                }
            </div>

        </div>
    )
}

export default Navbar