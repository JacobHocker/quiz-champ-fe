import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {  AiOutlineArrowLeft } from 'react-icons/ai';
import './ForumPostDisplay.scss';
import ForumCommentSection from '../forumCommentSection/ForumCommentSection';


export default function ForumPostDisplay() {
    const [post, setPost] = useState({});

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            axios.get(`${process.env.REACT_APP_PROD}/posts/post/${id}`)
            .then((response) => setPost(response))
        } else {
            axios.get(`${process.env.REACT_APP_DEV}/posts/post/${id}`)
            .then((response) => setPost(response))
        }
        
    }, [id])
    

    const backToPosts = () => {
        navigate('/forum/posts');
    }
    return (
        <div className='forum-post-display-container'>
            <div className='forum-post-display-header'>
                <button className='purple-forum-btn' onClick={backToPosts}>
                    <AiOutlineArrowLeft /> Back To Posts
                </button>
            </div>
            <div className='post-comment-display-container'>
                <div className='post-side'>
                    { post.data &&
                    <div className='post-card-alt'>
                        <div className='post-header-alt'>
                            <h1>{post.data.title}</h1>
                        </div>
                        <div className='post-content-alt'>
                            <p>{post.data.postText}</p>
                        </div>
                        <div className='post-footer-alt'>
                            <div className='poster'>
                                <h1
                                    className='post-user-link'
                                    onClick={() => {navigate(`/profile/${post.data.username}`)}}
                                >
                                    {post.data.username}
                                </h1>
                            </div>
                        </div>
                    </div>
                    }
                    
                </div>
                <div className='comment-side'>
                    <ForumCommentSection />
                </div>
            </div>
        </div>
    )
}
