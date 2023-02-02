import React, {useState, useContext} from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';
import './QuizPlay.scss';
import { QuizContext } from '../../Helpers/Contexts';
import Timer from './Timer';


export default function QuizPlay({ questionList }) {
    const { correctAnswers, setCorrectAnswers, setQuizState, questionCounter, setQuestionCounter } = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const [counter, setCounter] = useState(30);
    
    const finishQuiz = () => {
        if(questionList[currentQuestion].answer === optionChosen) {
            setCorrectAnswers(correctAnswers + 1);
        }
        setQuizState("end");
    }
    const nextQuestion = () => {
        if(questionList[currentQuestion].answer === optionChosen) {
            setCorrectAnswers(correctAnswers + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
        setQuestionCounter(questionCounter + 1);
        setOptionChosen("");
        setCounter(30)
    }
    
    return (
        <div className='quiz-play-container'>
            <div className='quiz-play-question'>
                <h1>{questionList[currentQuestion].questionContent}</h1>
                {questionList[currentQuestion].questionImage === "N/A" ?
                <div></div> :
                <img src={questionList[currentQuestion].questionImage} alt='question-prompt'
                className='quiz-play-image'/>}
            </div>
            <div className='quiz-play-choices'>
                <button onClick={() => setOptionChosen("A")} 
                className={optionChosen === 'A' ? 'quiz-option-chosen' : 'quiz-option-button'}>
                    {questionList[currentQuestion].optionA}
                </button>
                <button onClick={() => setOptionChosen("B")} 
                className={optionChosen === 'B' ? 'quiz-option-chosen' : 'quiz-option-button'}>
                    {questionList[currentQuestion].optionB}
                </button>
                <button onClick={() => setOptionChosen("C")} 
                className={optionChosen === 'C' ? 'quiz-option-chosen' : 'quiz-option-button'}>
                    {questionList[currentQuestion].optionC}
                </button>
                <button onClick={() => setOptionChosen("D")} 
                className={optionChosen === 'D' ? 'quiz-option-chosen' : 'quiz-option-button'}>
                    {questionList[currentQuestion].optionD}
                </button>
            </div>
            <div className='timer-play-container'>
                <Timer 
                    counter={counter} 
                    setCounter={setCounter} 
                    currentQuestion={currentQuestion}
                    setOptionChosen={setOptionChosen}
                    finishQuiz={finishQuiz}
                    nextQuestion={nextQuestion}
                />
            </div>
            <div className='quiz-play-next-container'>
                {currentQuestion === questionList.length - 1 ?
                <button onClick={finishQuiz} className='quiz-finish'>
                    Finish Quiz
                </button>
                :
                <button onClick={nextQuestion} className='quiz-next'>
                    Next Question <AiOutlineArrowRight />
                </button>}
            </div>
        </div>
    )
}