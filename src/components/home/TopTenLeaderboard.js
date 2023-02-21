import React, {useState, useEffect} from 'react';
import './TopTenLeaderboard.scss';
import axios from 'axios';
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

export default function TopTenLeaderboard() {

    const [leaderboardList, setLeaderboardList] = useState([]);

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            axios.get(`${process.env.PROD}/auth/crown-leaders`)
            .then((response) => setLeaderboardList(response.data))
        } else {
            axios.get(`${process.env.DEV}/auth/crown-leaders`)
            .then((response) => setLeaderboardList(response.data))
        }
        

    }, [])

    useEffect(() => {
        const leaderboard = leaderboardList.sort(({totalCrown:a}, {totalCrown:b }) => b-a)
        if (leaderboard.length > 10) {
            setLeaderboardList(leaderboard.slice(0, 10));
        } else {
            setLeaderboardList(leaderboard)
        }
    }, [leaderboardList])

    
    return (
        <section className='top-ten-container'>
                <h1>Top 10 Champs</h1>
                <table className='top-ten-table'>
                    <thead>
                        <tr className='top-ten-header'>
                            <th>Rank:</th>
                            <th>Name:</th>
                            <th>Tier:</th>
                            <th>Crowns:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardList === [] ? 
                        <tr className='top-ten-data'>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                        :
                        leaderboardList.map((val, index) => (
                            <tr key={val.id} className='top-ten-data'>
                                <td>{index + 1}</td>
                                <td>{val.username}</td>
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
                                <td>N/A</td>
                                }
                                <td>{val.totalCrown}</td>
                            </tr>
                        ))
                    
                        }
                    </tbody>
                </table>
            </section>
    )
}
