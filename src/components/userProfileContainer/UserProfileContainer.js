import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserProfileContainer.scss';

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
                <h1>{userPageInfo.data.username}</h1>}

        </div>
    )
}
