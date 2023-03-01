import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForumCreatePost.scss';
import axios from 'axios';
import { AuthContext } from '../../Helpers/AuthContext';

export default function ForumCreatePost() {
    const [title, setTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [postUsername, setPostUsername] = useState("");
    const [postUserId, setPostUserId] = useState(0);

    const { userId, username } = useContext(AuthContext);
    let navigate = useNavigate();

    const toPosts = () => {
        navigate("/forum/posts");
    }
    const toRules = () => {
        navigate('/rules-rewards-info')
    }
    useEffect(() => {
        setPostUsername(username);
        setPostUserId(userId);
    }, [])
    const addPost = () => {
        
        if(process.env.NODE_ENV === 'production') {
            axios.post(`${process.env.REACT_APP_PROD}/posts`, {
                title: title,
                postText: postBody,
                username: postUsername, 
                UserId: postUserId
            })
            .then(() => { navigate("/forum/posts")})
        } else {
            axios.post(`${process.env.REACT_APP_DEV}/posts`, {
                title: title,
                postText: postBody,
                username: postUsername,
                UserId: postUserId
            })
            .then(() => { navigate("/forum/posts")})
        }
        
    }
    return (
        <section className='forum-create-post-container'>
            <div className='create-post-header'>
                <button className='forum-btn-alt' onClick={toPosts}>Return To Posts</button>
                <button className='forum-btn-alt' onClick={toRules}>Post Guidlines</button>
            </div>
            <div className='create-post-form'>
                <div className='post-form-title'>
                    <h1>New Post</h1>
                </div>
                <label>Title: </label>
                <input 
                    autoComplete='off'
                    type='text'
                    className='post-title-input'
                    onChange={(e) => {setTitle(e.target.value)}}
                    placeholder='{Ex: Title...}'
                />
                <label>Post: </label>
                <textarea 
                    autoComplete='off'
                    rows={10}
                    type='text'
                    className='post-text-input'
                    onChange={(e) => {setPostBody(e.target.value)}}
                    placeholder='{Ex: Post...}'
                />
                <button onClick={addPost} className='forum-btn'>
                    Post
                </button>
            </div>
        </section>
    )
}
