import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import './QuizListByCategory.scss';

export default function QuizListByCategory() {
    const [quizList, setQuizList] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        if(process.env.NODE_ENV === 'production') {
            axios.get(`${process.env.PROD}/quizzes/categories/${id}`)
            .then((response) => { setQuizList(response)})
        } else {
            axios.get(`${process.env.DEV}/quizzes/categories/${id}`)
            .then((response) => { setQuizList(response)})
        }
        
    }, [])

    

    return (
        <div className='quiz-list-category-page'>
            <div className='quiz-list-container'>
                {quizList.data && quizList.data.map((val) => (
                    <div className='quiz-list-card' key={val.id}
                    onClick={() => {navigate(`/quiz/${val.id}`)}}>
                        <div className='quiz-thumbnail-container'>
                            <img src={val.quizImage} alt={val.quizName} className='quiz-card-thumb' />
                        </div>
                        <div className='quiz-card-header'>
                            <h1>{val.quizName}</h1>
                        </div>
                        <div className='quiz-card-body'>
                            <div className='difficulty-display'>
                                <h2>Difficulty:</h2>
                            </div>
                            {
                                val.quizDifficulty === "Easy" ?
                                <div className='star-container'>
                                    <BsStarFill className='easy-star'/>
                                    <BsStar className='easy-star'/>
                                    <BsStar className='easy-star'/>
                                    <BsStar className='easy-star'/>
                                    <BsStar className='easy-star'/>
                                </div>
                                :
                                val.quizDifficulty === "Medium" ?
                                <div className='star-container'>
                                    <BsStarFill className='medium-star'/>
                                    <BsStarFill className='medium-star'/>
                                    <BsStarHalf className='medium-star'/>
                                    <BsStar className='medium-star'/>
                                    <BsStar className='medium-star'/>
                                </div>
                                :
                                val.quizDifficulty === "Hard" ?
                                <div className='star-container'>
                                    <BsStarFill className='hard-star'/>
                                    <BsStarFill className='hard-star'/>
                                    <BsStarFill className='hard-star'/>
                                    <BsStarFill className='hard-star'/>
                                    <BsStarFill className='hard-star'/>
                                </div>
                                :
                                <div></div>
                            }
                        </div>
                        
                        
                    </div>
                ))}
            </div>
        </div>
    )
}
