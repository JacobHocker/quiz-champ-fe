import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './QuizListByCategory.scss';

export default function QuizListByCategory() {
    const [quizList, setQuizList] = useState([]);


    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:2000/quizzes/categories/${id}`)
        .then((response) => { console.log(response)})
    }, [])

    

    return (
        <div className='quiz-list-category-page'>

        </div>
    )
}
