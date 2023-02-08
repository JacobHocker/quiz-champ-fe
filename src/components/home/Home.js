import React from 'react';
import './Home.scss';
import LogoLg from '../../assets/images/quiz-champ-lg.png';

import TopTenLeaderboard from './TopTenLeaderboard';

export default function Home() {
    
    

    return (
        <div className='home-container'>

            <div className='home-header'>
                <img src={LogoLg} alt='quiz-logo' className='logo-lg-home' />
            </div>
            
            <section className='home-content'>
                <h1>Learn to Play</h1>
            </section>
            <TopTenLeaderboard />
        </div>
    )
}
