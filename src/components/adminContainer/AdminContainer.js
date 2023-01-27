import React, { useState } from 'react';
import AdminPostCategory from '../adminPostCategory/AdminPostCategory';
import AdminPostQuizzes from '../adminPostQuizzes/AdminPostQuizzes';
import AdminPostQuestion from '../adminPostQuestion/AdminPostQuestion'
import './AdminContainer.scss';

export default function AdminContainer() {
    const [adminStatus, setAdminStatus] = useState("categories");
    return (
        <div className='admin-container'>
            <div className='admin-header'>
                <h1>Choose What To Post</h1>
                <div className='admin-options'>
                    <button className='admin-btn' onClick={() => setAdminStatus("categories")}>
                        Post Category
                    </button>
                    <button className='admin-btn' onClick={() => setAdminStatus("quizzes")}>
                        Post Quiz
                    </button>
                    <button className='admin-btn' onClick={() => setAdminStatus("questions")}>
                        Post Question
                    </button>
                </div>
            </div>
            {adminStatus === 'categories' && <AdminPostCategory />}
            {adminStatus === 'quizzes' && <AdminPostQuizzes />}
            {adminStatus === 'questions' && <AdminPostQuestion />}
        </div>
    )
}