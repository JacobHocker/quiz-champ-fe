import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './QuizCategoryList.scss';



export default function QuizCategoryList() {
    const [categoryList, setCategoryList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(process.env.NODE_ENV === 'production') {
            axios.get(`${process.env.PROD}/categories`)
            .then((response) => setCategoryList(response))
        } else {
            axios.get(`${process.env.DEV}/categories`)
            .then((response) => setCategoryList(response))
        }
        
    }, [])

    
    return (
        <div className='quiz-category-list-container'>
            <div className='quiz-list-header'>
                <h1>Find a quiz by category!</h1>
            </div>
            <div className='quiz-list-container'>
                {categoryList.data && categoryList.data.map((val) => (
                    <div className='quiz-list-card' key={val.id}
                    onClick={() => {navigate(`/category/${val.id}`)}}>
                        <div className='quiz-thumbnail-container'>
                            <img src={val.catImage} alt={val.catName} className='quiz-card-thumb' />
                        </div>
                        <div className='quiz-card-header'>
                            <h1>{val.catName}</h1>
                        </div>
                        <div className='quiz-card-body'>
                            <h2>{val.catDescription}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
