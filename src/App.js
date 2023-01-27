import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './Helpers/AuthContext';
import UserRegistration from './components/userRegistration/UserRegistration';
import UserLogin from './components/userLogin/UserLogin';
import UserAuthContainer from './components/userAuthContainer/UserAuthContainer';
import AdminContainer from './components/adminContainer/AdminContainer';
import Home from './components/home/Home';
import NavBarContainer from './components/navBarContainer/NavBarContainer';

export default function App() {

  // User Auth State
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });
  // User info from axios request
  const [userObj, setUserObj] = useState({});

  useEffect(() => {
    axios.get("http://localhost:2000/auth/user", { headers: {
      accessToken: localStorage.getItem("accessToken")
    },
  })
  .then((response) => {
      if (response.data.error) {
        setAuthState({ ...authState, status: false })
      } else {
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        })
        
      }
    })
    axios.get(`http://localhost:2000/auth/userInfo/${authState.id}`)
            .then ( (response) => {
                setUserObj(response)
        })
  }, [authState.id, userObj])

  const userId = authState.id;
  const username = authState.username;

  return (
    <div className='App'>
      <AuthContext.Provider value={{ authState, setAuthState, userId, username, userObj }}>
      {authState.status === false ?
        <UserAuthContainer />
      :
        <div>
          <NavBarContainer />
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<AdminContainer />} path='admin' />
            <Route element={<UserRegistration />} path='registration' />
            <Route element={<UserLogin />} path='login' />
          </Routes>
        </div>
      }
      </AuthContext.Provider>
    </div>
  )
}

