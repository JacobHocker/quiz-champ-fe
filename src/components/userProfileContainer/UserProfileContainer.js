import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserProfileContainer.scss';
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

export default function UserProfileContainer() {
    const [userPageInfo, setPageUserInfo] = useState({});

    const { username } = useParams();

    
    useEffect(() => {
        axios.get(`http://localhost:2000/auth/usernameInfo/${username}`)
        .then((response) => { setPageUserInfo(response)})
    }, [username])


    return (
        <div className='user-profile-container'>
            {   userPageInfo.data && 
            <section className='user-profile-header'>
                <img src={userPageInfo.data.avatar} alt={`${userPageInfo.data.username}-profile`} className='profile-avatar' />
                <div className='profile-header-title'>
                    <h1>{userPageInfo.data.username}</h1>
                    <img src={userPageInfo.data.country} alt='country-flag' className='profile-flag' />
                </div>
            </section>
            }
            {   userPageInfo.data && 
            <section className='user-profile-bio'>
                    <h1>About:</h1>
                    <p>{userPageInfo.data.bio}</p>
            </section>
            }
            {   userPageInfo.data && 
            <section className='user-profile-stats'>
                <div className='profile-stats'>
                    <h1>{userPageInfo.data.username}'s Crowns:</h1>
                    <h2>{userPageInfo.data.totalCrown}</h2>
                </div>
                <div className='profile-stats'>
                    <h1>{userPageInfo.data.username}'s Tier:</h1>
                    {userPageInfo.data.totalCrown >= 25 && userPageInfo.data.totalCrown < 50 ?
                                <><img src={bronzeCrown} className='profile-crown' alt='bronzeCrown' /></>
                                :
                                userPageInfo.data.totalCrown >= 50  && userPageInfo.data.totalCrown < 75 ?
                                <><img src={silverCrown} className='profile-crown' alt='silverCrown' /></>
                                :
                                userPageInfo.data.totalCrown >= 75  && userPageInfo.data.totalCrown < 100 ?
                                <><img src={goldCrown} className='profile-crown' alt='goldCrown' /></>
                                :
                                userPageInfo.data.totalCrown >= 100  && userPageInfo.data.totalCrown < 150 ?
                                <><img src={platCrown} className='profile-crown' alt='platCrown' /></>
                                :
                                userPageInfo.data.totalCrown >= 150  && userPageInfo.data.totalCrown < 200 ?
                                <><img src={rubyCrown} className='profile-crown' alt='rubyCrown' /></>
                                :
                                userPageInfo.data.totalCrown >= 200  && userPageInfo.data.totalCrown < 300 ?
                                <><img src={emeraldCrown} className='profile-crown' alt='emeraldCrown' /></>
                                :
                                userPageInfo.data.totalCrown >= 300  && userPageInfo.data.totalCrown < 400 ?
                                <><img src={sapphireCrown} className='profile-crown' alt='sapphireCrown' /></>
                                :
                                userPageInfo.data.totalCrown >= 400  && userPageInfo.datatotalCrown < 500 ?
                                <><img src={amethystCrown} className='profile-crown' alt='amethystCrown' /></>
                                :
                                userPageInfo.data.totalCrown >= 500  && userPageInfo.data.totalCrown < 1000 ?
                                <><img src={rainbowCrown} className='profile-crown' alt='rainbowCrown' /></>
                                :
                                userPageInfo.data.totalCrown >= 1000 ?
                                <><img src={blackCrown} className='profile-crown' alt='blackCrown' /></>
                                :
                                <h2>N/A</h2>
                                }
                </div>
            </section>
            }
            
        </div>
    )
}
