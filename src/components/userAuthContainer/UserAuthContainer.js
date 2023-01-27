import React,{ useState } from 'react';
import UserLogin from '../userLogin/UserLogin';
import UserRegistration from '../userRegistration/UserRegistration';
import './UserAuthContainer.scss';
import LogoLg from '../../assets/images/quiz-champ-lg.png';

export default function UserAuthContainer() {
    const [showLogin, setShowLogin] = useState(true);


    return (
        <div className='user-auth-container'>
            <div className='user-auth-header'>
                <img src={LogoLg} alt='quiz-champ' className='login-logo' />
            </div>
            <div>
                {showLogin ? 
                <UserLogin setShowLogin={setShowLogin}/> 
                :
                <UserRegistration setShowLogin={setShowLogin}/>
                }
            </div>
        </div>
    )
}