import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import './CommunityLeaderboard.scss';
import axios from 'axios';
import { AuthContext } from '../../Helpers/AuthContext';
import bronzeCrown from '../../assets/images/bronzeCrown.png';
import silverCrown from '../../assets/images/silverCrown.png';
import goldCrown from '../../assets/images/goldCrown.png';
import platCrown from '../../assets/images/platCrown.png';
import rubyCrown from '../../assets/images/rubyCrown.png';
import emeraldCrown from '../../assets/images/emeraldCrown.webp';
import sapphireCrown from '../../assets/images/sapphireCrown.png';
import amethystCrown from '../../assets/images/amethystCrown.png';
import blackCrown from '../../assets/images/blackCrown.png';
import rainbowCrown from '../../assets/images/rainbowCrown.png';

export default function CommunityLeaderboard() {
    const [leaderboardList, setLeaderboardList] = useState([]);

    const { username } = useContext(AuthContext);

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            axios.get(`${process.env.REACT_APP_PROD}/auth/crown-leaders`)
            .then((response) => setLeaderboardList(response.data))
        } else {
            axios.get(`${process.env.REACT_APP_DEV}/auth/crown-leaders`)
            .then((response) => setLeaderboardList(response.data))
        }
        

    }, [])

    const navigate = useNavigate();

    useEffect(() => {
        const leaderboard = leaderboardList.sort(({totalCrown:a}, {totalCrown:b }) => b-a)
        if (leaderboard.length > 30) {
            setLeaderboardList(leaderboard.slice(0, 30));
        } else {
            setLeaderboardList(leaderboard)
        }
    }, [leaderboardList])

    return (
        <section className='community-leaderboard-container'>
            <div className='com-leaderboard-header'>
                <div className='leaderboard-title'>
                    <img src={blackCrown} 
                    alt='black-crown-title' 
                    className='crown-left'
                    />
                    <h1>All Champ Ranks</h1>
                    <img src={blackCrown} 
                    alt='black-crown-title' 
                    className='crown-right'
                    />
                </div>
                <div className='leaderboard-description'>
                    <p>Find your rank and where you stack up in the competition!</p>
                </div>
            </div>
                <table className='leader-table'>
                    <thead>
                        <tr className='leader-header'>
                            <th>Rank:</th>
                            <th>Name:</th>
                            <th>Tier:</th>
                            <th>Crowns:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardList === [] ? 
                        <tr className='leader-data'>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                        :
                        leaderboardList.map((val, index) => (
                            <tr key={val.id} className='leader-data'>
                                <td className={username === val.username ? 'highlight-rank' : 'reg'}>{index + 1}</td>
                                <td className={username === val.username ? 'highlight-user' : 'leader-user-link'} onClick={() => {navigate(`/profile/${val.username}`)}}>
                                    {val.username}
                                </td>
                                {val.totalCrown >= 25 && val.totalCrown < 50 ?
                                <td><img src={bronzeCrown} className='top-ten-crown' alt='bronzeCrown' /></td>
                                :
                                val.totalCrown >= 50  && val.totalCrown < 75 ?
                                <td><img src={silverCrown} className='top-ten-crown' alt='silverCrown' /></td>
                                :
                                val.totalCrown >= 75  && val.totalCrown < 100 ?
                                <td><img src={goldCrown} className='top-ten-crown' alt='goldCrown' /></td>
                                :
                                val.totalCrown >= 100  && val.totalCrown < 150 ?
                                <td><img src={platCrown} className='top-ten-crown' alt='platCrown' /></td>
                                :
                                val.totalCrown >= 150  && val.totalCrown < 200 ?
                                <td><img src={rubyCrown} className='top-ten-crown' alt='rubyCrown' /></td>
                                :
                                val.totalCrown >= 200  && val.totalCrown < 300 ?
                                <td><img src={emeraldCrown} className='top-ten-crown' alt='emeraldCrown' /></td>
                                :
                                val.totalCrown >= 300  && val.totalCrown < 400 ?
                                <td><img src={sapphireCrown} className='top-ten-crown' alt='sapphireCrown' /></td>
                                :
                                val.totalCrown >= 400  && val.totalCrown < 500 ?
                                <td><img src={amethystCrown} className='top-ten-crown' alt='amethystCrown' /></td>
                                :
                                val.totalCrown >= 500  && val.totalCrown < 1000 ?
                                <td><img src={rainbowCrown} className='top-ten-crown' alt='rainbowCrown' /></td>
                                :
                                val.totalCrown >= 1000 ?
                                <td><img src={blackCrown} className='top-ten-crown' alt='blackCrown' /></td>
                                :
                                <td className={username === val.username ? 'highlight-tier' : 'leader-tier'}>N/A</td>
                                }
                                <td className={username === val.username ? 'highlight-crown' : 'leader-crown'}>{val.totalCrown}</td>
                            </tr>
                        ))
                    
                        }
                    </tbody>
                </table>
            </section>
    )
}
