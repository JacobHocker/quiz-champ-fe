import React from 'react';
import './Home.scss';
import LogoLg from '../../assets/images/quiz-champ-lg.png';

export default function Home() {
    return (
        <div className='home-container'>

            <div className='home-header'>
                <img src={LogoLg} alt='quiz-logo' className='logo-lg-home' />
            </div>
            
            <div className='home-content'>
                <h1>Filler</h1>
            </div>
        </div>
    )
}
