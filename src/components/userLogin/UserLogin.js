import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserLogin.scss';
import { AuthContext } from '../../Helpers/AuthContext';


export default function UserLogin({ setShowLogin }) {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthState } = useContext(AuthContext);

    

    const loginUser = () => {
        const data = { username: username, password: password }
        if(process.env.NODE_ENV === 'production') {
            axios.post(`${process.env.REACT_APP_PROD}/auth/login`, data).then((response) => {
                if (response.data.error) {
                    alert(response.data.error)
                } else {
                    localStorage.setItem("accessToken", response.data.token);
                    setAuthState({ 
                        username: response.data.username, 
                        id: response.data.id, 
                        status: true
                    });
                    navigate("/");
                }
            })
        } else {
            axios.post(`${process.env.REACT_APP_DEV}/auth/login`, data).then((response) => {
                if (response.data.error) {
                    alert(response.data.error)
                } else {
                    localStorage.setItem("accessToken", response.data.token);
                    setAuthState({ 
                        username: response.data.username, 
                        id: response.data.id, 
                        status: true
                    });
                    navigate("/");
                }
            })
        }
        
        
    }
    return (
        <div className='auth-container'>
            <div className='auth-form'>
                <input 
                className='auth-input'
                type='text' 
                placeholder='Username' 
                onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                className='auth-input'
                type='password' 
                placeholder='Password' 
                onChange={(e) => setPassword(e.target.value)}
                />
                <button className='auth-btn' onClick={loginUser}>Login Account</button>
            </div>
            
            <div className='to-btn-container'>
                <h1>Don't have an account?</h1>
                <button onClick={() => setShowLogin(false)} className='auth-btn'>Register An Account</button>
            </div>
        </div>
    )
}
