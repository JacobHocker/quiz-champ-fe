import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './Helpers/AuthContext';
import UserRegistration from './components/userRegistration/UserRegistration';
import UserLogin from './components/userLogin/UserLogin';
import UserAuthContainer from './components/userAuthContainer/UserAuthContainer';
import AdminContainer from './components/adminContainer/AdminContainer';
import QuizSearchContainer from './components/quizSearchContainer/QuizSearchContainer';
import Home from './components/home/Home';
import NavBarContainer from './components/navBarContainer/NavBarContainer';
import QuizListContainer from './components/quizListContainer/QuizListContainer';
import QuizDisplayContainer from './components/quizDisplayContainer/QuizDisplayContainer';
import QuizRuleContainer from './components/quizRuleContainer/QuizRuleContainer';
import UserProfileContainer from './components/userProfileContainer/UserProfileContainer';
import QuizCategoryList from './components/quizCategoryList/QuizCategoryList';
import QuizListByCategory from './components/quizListByCategory/QuizListByCategory';
import ForumContainer from './components/forumContainer/ForumContainer';

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
    if (process.env.NODE_ENV === 'production') {
        axios.get(`${process.env.REACT_APP_PROD}/auth/user`, { headers: {
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
    } else {
        axios.get(`${process.env.REACT_APP_DEV}/auth/user`, { headers: {
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
    }
    
  }, [])

  const userId = authState.id;
  const username = authState.username;

  useEffect(() => {
    
    if(process.env.NODE_ENV === 'production') {
      axios.get(`${process.env.REACT_APP_PROD}/auth/userInfo/${userId}`)
            .then ( (response) => {
                setUserObj(response)
        })
    } else {
      axios.get(`${process.env.REACT_APP_DEV}/auth/userInfo/${userId}`)
            .then ( (response) => {
                setUserObj(response)
        })
    }
    
  }, [userId])

  

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
            <Route element={<QuizSearchContainer />} path='/search' />
            <Route element={<ForumContainer />} path='forum' />
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

