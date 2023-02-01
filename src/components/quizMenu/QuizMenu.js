import React, { useContext, useState, useEffect } from 'react';
import './QuizMenu.scss'
import { QuizContext } from '../../Helpers/Contexts';
import { AuthContext } from '../../Helpers/AuthContext';



export default function QuizMenu({ quizObject, scoreArr }) {
    const [highScore, setHighScore] = useState(0);
    const [highCrown, setHighCrowns] = useState(0);
    const { username } = useContext(AuthContext);
    const {  setQuizState, questionCounter, setQuestionCounter } = useContext(QuizContext);

    const startQuiz = () => {
        setQuizState("play")
        setQuestionCounter(questionCounter + 1)
    }
    
    useEffect(() => {
        if (scoreArr.data) {
            if(scoreArr.data.length === 1) {
                setHighScore(scoreArr.data[0].quizScore)
                setHighCrowns(scoreArr.data[0].crownAmount)
            } else if (scoreArr.data.length === 2) {
                setHighScore(Math.max(...scoreArr.data.map((val) => val.quizScore)))
                setHighCrowns(Math.max(...scoreArr.data.map((val) => val.crownAmount)))
            }
            
        }
        
    }, [ scoreArr.data ])
    

    
    return (
        <div className='quiz-start-menu' style={{
            backgroundImage: `url(${quizObject.quizImage})`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: "100%",
            boxShadow: "inset 0 0 0 1000px rgba(79, 4, 165, 0.87)"
        }}>
            <div className='quiz-display-header'>
                <img src={quizObject.quizImage} alt={quizObject.quizName} className='quiz-display-image'/>
                <h1>{quizObject.quizName}</h1>
            </div>
            { scoreArr.data && 
                scoreArr.data.length === 2 ?
                <div className='max-quiz-attempts'>
                    <h1>Max Amount of quiz attemps have been reached!</h1>
                </div>
                :
                <div className='start-quiz-container'>
                    <h1>Click below to begin the quiz!</h1>
                    <button onClick={startQuiz} className='neon-purple-btn'>
                        Start Quiz
                    </button>
                </div>
            }
            <div className='quiz-display-body'>
                {scoreArr.data && <h1>Attempts Remaining: {scoreArr.data.length} / 2</h1>}
                <h1>Difficulty: {quizObject.quizDifficulty}</h1>
                <p> {quizObject.quizDescription}</p>
            </div>
            <div>
                {scoreArr.data && 
                scoreArr.data.length === 0 ?
                <div></div>
                : 
                <div>
                    <h1>{username}'s High Scores:</h1>
                    <h1>Highest Score: {highScore}</h1>
                    <h1>Total Crowns Earned: {highCrown}</h1>
                </div>
                }
            </div> 
            
            
            
        </div>
    )
}
