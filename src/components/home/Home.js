import React, { useEffect, useState } from 'react';
import './Home.scss';
import LogoLg from '../../assets/images/quiz-champ-lg.png';
import axios from 'axios';

export default function Home() {
    const [leaderboardList, setLeaderboardList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:2000/auth/crown-leaders')
        .then((response) => console.log(response.data))
    }, [])
    return (
        <div className='home-container'>

            <div className='home-header'>
                <img src={LogoLg} alt='quiz-logo' className='logo-lg-home' />
            </div>
            
            <section className='home-content'>
                <h1>Learn to Play</h1>
            </section>
        </div>
    )
}
