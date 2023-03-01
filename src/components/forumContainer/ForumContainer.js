import React from 'react';
import './ForumContainer.scss';
import {AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import ForumPostList from '../forumPostList/ForumPostList';

export default function ForumContainer() {
    
    const navigate = useNavigate();

    const toCreatePosts = () => {
        navigate('/forum/new-post');
    }
    return (
        <section className='forum-container'>
            <div className='forum-header'>
                <div className='forum-new-post-container'>
                    <button className='forum-btn' onClick={toCreatePosts}>
                        <AiOutlinePlus/> New Post
                    </button>
                </div>
                <div className='forum-header-content'>
                    <h1>Forum Threads</h1>
                    <p>View forum topics and join in on the conversation!</p>
                </div>
            </div>
            <div className='forum-display'>
                <ForumPostList />
            </div>
        </section>
    )
}
