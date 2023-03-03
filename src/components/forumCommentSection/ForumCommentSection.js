import React, { useState, useEffect, useContext} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ForumCommentSection.scss';
import axios from 'axios';
import { AuthContext } from '../../Helpers/AuthContext';

export default function ForumCommentSection() {
    const [commentBody, setCommentBody] = useState("");
    const [commentUsername, setCommentUsername] = useState("");
    const [postId, setPostId] = useState(0);
    const [commentModalShow, setCommentModalShow] = useState(false);
    const [commentList, setCommentList] = useState([]);
    
    
    const { id } = useParams();
    const navigate = useNavigate();

    const {  username } = useContext(AuthContext);
    useEffect(() => {
        setPostId(id)
        setCommentUsername(username);
        if (process.env.NODE_ENV === 'production') {
            axios.get(`${process.env.REACT_APP_PROD}/comments/${id}`)
            .then((response) => setCommentList(response.data))
        } else {
            axios.get(`${process.env.REACT_APP_DEV}/comments/${id}`)
            .then((response) => setCommentList(response.data))
        }
    }, [id])

    const addComment = () => {
        if(process.env.NODE_ENV === 'production') {
            axios.post(`${process.env.REACT_APP_PROD}/comments`, {
                commentBody: commentBody,
                username: commentUsername, 
                PostId: postId,
                
            })
            .then((response) => { 
                setCommentList([...commentList, response.data])
                setCommentModalShow(!commentModalShow)
            })
        } else {
            axios.post(`${process.env.REACT_APP_DEV}/comments`, {
                commentBody: commentBody,
                username: commentUsername,
                PostId: postId,
            })
            .then((response) => { 
                setCommentList([...commentList, response.data])
                setCommentModalShow(!commentModalShow)
            })
        }
        
    }
    
    
    
    
    return (
        <section className='forum-comment-section'>
            { commentModalShow === true ?
            <div className='comment-modal'>
                <div className='close-comment-modal'>
                    <button className='red-btn'
                    onClick={() => {setCommentModalShow(!commentModalShow)}}>
                        X
                    </button>
                </div>
                <div className='comment-input'>
                    <textarea 
                        autoComplete='off'
                        rows={6}
                        type='text'
                        className='comment-text-input'
                        onChange={(e) => {setCommentBody(e.target.value)}}
                        placeholder='{Ex: Comment...}'
                    />
                    <button  className='purple-forum-btn' onClick={addComment}>
                        Comment
                    </button>
                </div>
            </div>
            :
            <div className='comment-section-display'>
                <div className='leave-comment'>
                    <button className='purple-forum-btn'
                    onClick={() => { setCommentModalShow(!commentModalShow)}}>
                        Post Comment
                    </button>
                </div>
                <div className='comments-container'>
                    { 
                        !commentList ?
                        <div className='notify'>
                            <h1>Loading...</h1>
                        </div>
                        :
                        commentList.length === 0 ?
                        <div className='notify'>
                            <h1>There are no comments in this thread</h1>
                        </div>
                        :
                        commentList.map((com, index) => (
                            <div className='com-card' key={index}>
                                <div className='com-header'>
                                    <h1
                                    className='post-user-link'
                                    onClick={() => {navigate(`/profile/${com.username}`)}}
                                    >
                                        {com.username}
                                    </h1>
                                </div>
                                <div className='com-content'>
                                    <p>{com.commentBody}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            }
            
        </section>
    )
}
