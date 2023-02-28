import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './RandomQuiz.scss';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import axios from 'axios';


export default function RandomQuiz() {
    const [randomQuiz, setRandomQuiz] = useState({});
    
    const navigate = useNavigate();

    useEffect(() => { 
        
        if (process.env.NODE_ENV === 'production') {
            axios.get(`${process.env.REACT_APP_PROD}/quizzes`)
            .then((response) => setRandomQuiz(response))
        } else {
            axios.get(`${process.env.REACT_APP_DEV}/quizzes`)
            .then((response) => setRandomQuiz(response))
        }

        
    }, [])

    useEffect(() => {
        randomQuiz.data && 
        setRandomQuiz(randomQuiz.data[Math.floor(Math.random() * randomQuiz.data.length)])
        
    }, [randomQuiz])
    
    

    return (
        <section className='random-quiz-container'>
            <div className='random-quiz-header'>
                <h1>Random Quiz Generator</h1>
                <p>Don't know what quiz to take? Maybe you don't feel like searching for one?</p>
                <p>Well take a look at the random quiz we have generated for you and test your knowledge!</p>
            </div>
            <div className='random-quiz-body'>
                <div className='quiz-list-card'
            onClick={() => {navigate(`/quiz/${randomQuiz.id}`)}}>
                <div className='quiz-thumbnail-container'>
                    <img src={randomQuiz.quizImage} alt={randomQuiz.quizName} className='quiz-card-thumb' />
                </div>
                <div className='quiz-card-header'>
                    <h1>{randomQuiz.quizName}</h1>
                </div>
                <div className='quiz-card-body'>
                    <div className='difficulty-display'>
                        <h2>Difficulty:</h2>
                    </div>
                    {
                        randomQuiz.quizDifficulty === "Easy" ?
                        <div className='star-container'>
                            <BsStarFill className='easy-star'/>
                            <BsStar className='easy-star'/>
                            <BsStar className='easy-star'/>
                            <BsStar className='easy-star'/>
                            <BsStar className='easy-star'/>
                        </div>
                        :
                        randomQuiz.quizDifficulty === "Medium" ?
                        <div className='star-container'>
                            <BsStarFill className='medium-star'/>
                            <BsStarFill className='medium-star'/>
                            <BsStarHalf className='medium-star'/>
                            <BsStar className='medium-star'/>
                            <BsStar className='medium-star'/>
                        </div>
                        :
                        randomQuiz.quizDifficulty === "Hard" ?
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
            </div>
        </section>
    )
}
