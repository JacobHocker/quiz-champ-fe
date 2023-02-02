import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../../Helpers/Contexts';
import { AuthContext } from '../../Helpers/AuthContext';
import './QuizResults.scss';
import axios from 'axios';

export default function QuizResults({  crownAmount, setCrownAmount }) {
    const [secondAttemptCrowns, setSecondAttemptCrowns] = useState(0);
    let navigate = useNavigate();
    const { quizScore, scoreArr} = useContext(QuizContext);
    const { userId, userObj } = useContext(AuthContext);

    useEffect(() => {
        if(scoreArr.data.length === 1) {
            if(scoreArr.data[0].crownAmount >= crownAmount) {
                setCrownAmount(0)
            } else if (scoreArr.data[0].crownAmount < crownAmount) {
                setSecondAttemptCrowns(crownAmount - scoreArr.data[0].crownAmount)
            }
        }
        
    }, [scoreArr.data])
    
    const saveAndReturn = () => {
        let totalCrown = userObj.data.totalCrown + crownAmount
        let totalCrownTwo = userObj.data.totalCrown + secondAttemptCrowns

        if (scoreArr.data.length === 0) {
            axios.put("http://localhost:2000/auth/crowns", 
            {totalCrown: totalCrown, id: userId})
            .then(() => {
                navigate('/quizzes')
            })
        } else if (scoreArr.data.length === 1) {
            axios.put("http://localhost:2000/auth/crowns", 
            {totalCrown: totalCrownTwo, id: userId})
            .then(() => {
                navigate('/quizzes')
            })
        }
    }
    
    return (
        <div className='quiz-results-container'>
            <div className='quiz-end'>
                <h1>Quiz Completed</h1>
            </div>
            <div className='quiz-results'>
                <h1>Score</h1>
                <h2> {quizScore}%</h2>
            </div>
            <div className='quiz-results'>
                <h1>Crowns Earned</h1>
                <h2> {crownAmount}</h2>
            </div>
            <div className='return-to-quiz-container'>
                <button className='neon-purple-btn' onClick={saveAndReturn}>
                    Return to Quizzes
                </button>
            </div>
        </div>
    )
}
