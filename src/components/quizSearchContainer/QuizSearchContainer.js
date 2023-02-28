import React, { useState, useEffect } from 'react';
import './QuizSearchContainer.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';


export default function QuizSearchContainer() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchBy, setSearchBy] = useState("quizzes");
    const [searchQuizList, setSearchQuizList] = useState([]);
    const [searchCatList, setSearchCatList] = useState([]);

    const navigate = useNavigate();

    const searchOptions = [
        {
            id: 0,
            title: "Quiz",
            value: "quizzes"
        },
        {
            id: 1,
            title: "Category",
            value: "categories"
        }
    ];

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }
    useEffect(() => {
        // GET All Quizzes
        if(searchBy === 'quizzes') {
            if(process.env.NODE_ENV === 'production') {
                axios.get(`${process.env.REACT_APP_PROD}/quizzes`).then((response) => {
                    setSearchQuizList(response.data)
                })
            } else {
                axios.get(`${process.env.REACT_APP_DEV}/quizzes`).then((response) => {
                    setSearchQuizList(response.data)
                })
            }
        }
        // GET All Categories
        if(searchBy === 'categories') {
            if(process.env.NODE_ENV === 'production') {
                axios.get(`${process.env.REACT_APP_PROD}/categories`)
                .then((response) => { setSearchCatList(response.data)})
            } else {
                axios.get(`${process.env.REACT_APP_DEV}/categories`)
                .then((response) => { setSearchCatList(response.data)})
            }
        }
        
    }, [searchBy])
    
    // Filters if searched by quizzes
    const quizResultsToDisplay =  searchQuizList.filter((quiz) => 
        quiz.quizName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    

    // Filters if searched by category
    const catResultsToDisplay =  searchCatList.filter((cat) => 
        cat.catName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <div className='quiz-search-container'>
            <div className='quiz-search-header'>
                <h1>Find A Quiz</h1>
            </div>
            <div className='search-container'>
                <div className='select-search-area'>
                    <label>Search By:</label>
                    <select 
                        name='searchBy'
                        className='search-select'
                        value={searchBy}
                        onChange={(e) => setSearchBy(e.target.value)}
                        >
                            {searchOptions.map((val) => (
                                <option
                                key={val.id}
                                className='search-select-option'
                                value={val.value}>
                                    {val.title}
                                </option>
                            ))}
                    </select>
                </div>
                <div className='search-bar-area'>
                    <input 
                        className='search-bar'
                        type='text'
                        placeholder='Search...'
                        value={searchTerm}
                        onChange={handleChange}
                    /> 
                </div>
            </div>
            { searchTerm === "" ?
                <div className='empty-search'>
                    <h1>Enter the category or quiz you are searching for!</h1>
                </div>
                :
                <div className='search-results-container'>
                    { 
                    searchBy === 'quizzes' ? 
                    quizResultsToDisplay.length === 0 ?
                        <div className='not-found-search'>
                            <h1>There are no matching quizzes!</h1>
                        </div>
                        :
                        quizResultsToDisplay.map((val) => (
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
                    ))
                    :
                    searchBy === 'categories' ? 
                    catResultsToDisplay.length === 0 ?
                        <div className='not-found-search'>
                            <h1>There are no match categories!</h1>
                        </div>
                        :
                        catResultsToDisplay.map((val) => (
                            <div className='quiz-list-card' key={val.id}
                            onClick={() => {navigate(`/category/${val.id}`)}}>
                                <div className='quiz-thumbnail-container'>
                                    <img src={val.catImage} alt={val.catName} className='quiz-card-thumb' />
                                </div>
                                <div className='quiz-card-header'>
                                    <h1>{val.catName}</h1>
                                </div>
                                <div className='quiz-cat-body'>
                                    <p>{val.catDescription}</p>
                                </div>
                            </div>
                        ))
                    :
                    <div></div>}
                </div>
            }
        </div>
    )
}
