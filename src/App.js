import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
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

  }, [])
  return (
    <div className='App'>
      
      <div>
        <NavBarContainer />
        <Routes>
          <Route element={<Home />} path='/' />
        </Routes>
      </div>
    
    </div>
  )
}

