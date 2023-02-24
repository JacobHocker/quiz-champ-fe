import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';
import LogoLg from '../../assets/images/quiz-champ-lg.png';

import TopTenLeaderboard from './TopTenLeaderboard';
import RandomQuiz from './RandomQuiz';

export default function Home() {
    
    const navigate = useNavigate();
    const toQuizRules = () => {
        navigate('/rules-rewards-info')
    }

    return (
        <div className='home-container'>

            <div className='home-header'>
                <img src={LogoLg} alt='quiz-logo' className='logo-lg-home' />
            </div>
            
            <section className='ltp-home-container'>
                <h1>Learn to Play</h1>
                <button onClick={toQuizRules} className='blue-btn'>
                    See Rules & Rewards For More Info
                </button>
            </section>
            <RandomQuiz />
            <TopTenLeaderboard />
        </div>
    )
}
