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
import QuizListContainer from './components/quizListContainer/QuizListContainer';
import QuizDisplayContainer from './components/quizDisplayContainer/QuizDisplayContainer';
import QuizRuleContainer from './components/quizRuleContainer/QuizRuleContainer';
import UserProfileContainer from './components/userProfileContainer/UserProfileContainer';
import QuizCategoryList from './components/quizCategoryList/QuizCategoryList';
import QuizListByCategory from './components/quizListByCategory/QuizListByCategory';

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
  }, [authState, authState.id, userObj])

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
            <Route element={<QuizCategoryList />} path='categories' />
            <Route element={<QuizListByCategory />} path='category/:id' />
            <Route element={<QuizListContainer />} path='quizzes' />
            <Route element={<QuizDisplayContainer />} path='quiz/:id' />
            <Route element={<UserProfileContainer />} path='profile/:username' />
            <Route element={<QuizRuleContainer />} path='rules-rewards-info' />
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

