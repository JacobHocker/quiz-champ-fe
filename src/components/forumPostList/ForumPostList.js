import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForumPostList.scss';
import axios from 'axios';

export default function ForumPostList() {
    const [postList, setPostList] = useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            axios.get(`${process.env.REACT_APP_PROD}/posts`)
            .then((response) => setPostList(response.data))
        } else {
            axios.get(`${process.env.REACT_APP_DEV}/posts`)
            .then((response) => setPostList(response.data))
        }
    }, []);

    return (
        <div className='forum-post-list-container'>
            {postList && postList.map((post) => (
                <div className='post-card' key={post.id}
                >
                    <div className='post-header'
                    onClick={() => {navigate(`/forum/post/${post.id}`)}}>
                        <h1>{post.title}</h1>
                    </div>
                    <div className='post-content'
                    onClick={() => {navigate(`/forum/post/${post.id}`)}}>
                        <p>{post.postText}</p>
                    </div>
                    <div className='post-footer'>
                        <div className='poster'>
                            <h1
                            className='post-user-link-alt'
                            onClick={() => {navigate(`/profile/${post.username}`)}}>
                                {post.username}
                            </h1>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
