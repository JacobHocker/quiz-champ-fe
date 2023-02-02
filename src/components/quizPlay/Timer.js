import React, { useEffect, useContext } from 'react';
import './Timer.scss';
import { QuizContext } from '../../Helpers/Contexts';

export default function Timer({ counter, setCounter, currentQuestion, setOptionChosen, finishQuiz, nextQuestion }) {
    const { questionList } = useContext(QuizContext);

    useEffect(() => {
        counter > 0 && setTimeout(() => 
            setCounter(counter - 1), 1000
        )
        if(counter === 0 && currentQuestion === questionList.length - 1 ) {
            setOptionChosen("")
            finishQuiz()
        } else if (counter === 0) {
            setOptionChosen("")
            nextQuestion()
            setCounter(30)
        }
    }, [counter])
    
    return (
        <div className={counter < 10 ? 'low-timer-container' : 'timer-container'}>
            <div className={counter < 10 ? 'low-timer-display' : 'timer-display'}>
                <h1>{counter}</h1>
            </div>
        </div>
    )
}