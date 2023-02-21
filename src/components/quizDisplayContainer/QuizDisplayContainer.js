import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Helpers/AuthContext';
import './QuizDisplayContainer.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProgressBar from './ProgressBar';
import QuizMenu from '../quizMenu/QuizMenu';
import QuizPlay from '../quizPlay/QuizPlay';
import QuizEnd from '../quizEnd/QuizEnd';
import { QuizContext } from '../../Helpers/Contexts';




export default function QuizDisplayContainer() {
    let { userId } = useContext(AuthContext);
    let { id } = useParams();
    let [quizObject, setQuizObject] = useState({});
    let [questionList, setQuestionList] = useState([]);
    let [quizState, setQuizState] = useState("menu");
    let [correctAnswers, setCorrectAnswers] = useState(0);
    let [questionCounter, setQuestionCounter] = useState(0);
    let [quizScore, setQuizScore] = useState(0);
    let [scoreArr, setScoreArr] = useState([]);
    

    useEffect(() => {
        if(process.env.NODE_ENV === 'production') {
            axios.get(`${process.env.PROD}/quizzes/${id}`).then((response) => {
                setQuizObject(response.data)
            })
        } else {
            axios.get(`${process.env.DEV}/quizzes/${id}`).then((response) => {
                setQuizObject(response.data)
            })
        }
        
        if(process.env.NODE_ENV === 'production') {
            axios.get(`${process.env.PROD}/questions/${id}`).then((response) => {
                setQuestionList(response)
            })
        } else {
            axios.get(`${process.env.DEV}/questions/${id}`).then((response) => {
                setQuestionList(response)
            })
        }
        
        
    },[id])

    useEffect(() => {
        if(process.env.NODE_ENV === 'production') {
            axios.get(`${process.env.PROD}/scores/${id}/${userId}`).then((response) => {
                setScoreArr(response)
            })
        } else {
            axios.get(`${process.env.DEV}/scores/${id}/${userId}`).then((response) => {
                setScoreArr(response)
            })
        }
        
        
    }, [id, userId])
    
    return (
        <div className='quiz-display-container'>
            {questionList.data && 
            quizState === "play" ?
            <div className='progress-bar-container'>
                <ProgressBar progress={questionCounter} max={questionList.data.length} />
            </div>
            :
            <div></div>
            }
            <div className='quiz-play-container'>
                <QuizContext.Provider value={{ 
                    quizState, 
                    setQuizState, 
                    quizScore, 
                    questionList,
                    setQuizScore, 
                    questionCounter, 
                    setQuestionCounter,
                    correctAnswers,
                    setCorrectAnswers,
                    scoreArr,
                    setScoreArr, 
                }}>
                    {quizState === "menu" && <QuizMenu quizObject={quizObject} scoreArr={scoreArr} />}
                    {quizState === "play" && <QuizPlay questionList={questionList.data} />}
                    {quizState === "end" && <QuizEnd quizId={id} questionList={questionList.data} />}
                </QuizContext.Provider>
            </div>
        </div>
    )
}