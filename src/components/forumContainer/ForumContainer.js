import React, { useState, useEffect } from 'react';

export default function ForumContainer() {
    const [forumNav, setForumNav] = useState("view");


    return (
        <div className='forum-container'>
            <div className='forum-nav-header'>
                <button className='blue-btn' onClick={() => setForumNav("post")}>
                    New Post
                </button>
                <button className='blue-btn' onClick={() => setForumNav("view")}>
                    View Forum
                </button>
            </div>
        </div>
    )
}
