import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Helpers/AuthContext';
import axios from 'axios';
import './QuizEnd.scss';
import { QuizContext } from '../../Helpers/Contexts';
import QuizResults from '../quizResults/QuizResults';

export default function QuizEnd({ questionList, quizId }) {
    const [showResults, setShowResults] = useState(false);
    const [crownAmount, setCrownAmount] = useState(0);

    const { userId } = useContext(AuthContext);
    const {  quizScore, setQuizScore, correctAnswers } = useContext(QuizContext);

    useEffect(() => {
        setQuizScore(Math.round((correctAnswers / questionList.length) * 100))

        if(quizScore >= 60 && quizScore <= 69) {
            setCrownAmount(1)
        } else if (quizScore >= 70 && quizScore <= 79) {
            setCrownAmount(2)
        } else if (quizScore >= 80 && quizScore <= 89) {
            setCrownAmount(3)
        } else if (quizScore >= 90 && quizScore <= 99) {
            setCrownAmount(4)
        } else if (quizScore === 100) {
            setCrownAmount(5)
        } else {
            setCrownAmount(0)
        }
        
    }, [quizScore])

    const addScore = () => {
        if(process.env.NODE_ENV === 'production'){
            axios.post(`${process.env.REACT_APP_PROD}/scores`, {
                quizScore: quizScore,
                crownAmount: crownAmount,
                QuizId: quizId,
                UserId: userId
            })
            .then(() => { 
                setShowResults(true) 
                
            })
        } else {
            axios.post(`${process.env.REACT_APP_DEV}/scores`, {
                quizScore: quizScore,
                crownAmount: crownAmount,
                QuizId: quizId,
                UserId: userId
            })
            .then(() => { 
                setShowResults(true) 
                
            })
        }
        
    }
    return (
        <div className='quiz-end-container'>
            { showResults === false ?
            <div className='quiz-end'>
                <h1>Quiz Completed</h1>
                <button className='neon-purple-btn' onClick={addScore}>
                    See Results
                </button>
            </div>
            :
            <QuizResults quizId={quizId} crownAmount={crownAmount} setCrownAmount={setCrownAmount}/>
            }
        </div>
    )
}
