import React, { useState, useEffect } from 'react';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './ForumPostList.scss';
import axios from 'axios';

export default function ForumPostList() {
    const [postList, setPostList] = useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            axios.get(`${process.env.REACT_APP_PROD}/posts`)
            .then((response) => setPostList(response))
        } else {
            axios.get(`${process.env.REACT_APP_DEV}/posts`)
            .then((response) => setPostList(response))
        }
    }, [])

    return (
        <div className='forum-post-list-container'>
            {postList.data && postList.data.map((post) => (
                <div className='post-card' key={post.id}
                onClick={() => {navigate(`/forum/post/${post.id}`)}}>
                    <div className='post-header'>
                        <h1>{post.title}</h1>
                    </div>
                    <div className='post-content'>
                        <p>{post.postText}</p>
                    </div>
                    <div className='post-footer'>
                        <div className='poster'>
                            <h1>{post.username}</h1>
                        </div>
                        <div className='post-likes'>
                            <AiOutlineLike className='post-empty-like'/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
