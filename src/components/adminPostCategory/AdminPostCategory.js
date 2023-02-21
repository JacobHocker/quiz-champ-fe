import React from 'react'
import { useNavigate } from 'react-router-dom';
import './AdminPostCategory.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


export default function AdminPostCategory() {
    let navigate = useNavigate();

    const initialValues = {
        catName: "",
        catDescription: "",
        catImage: "",
    }

    const validationSchema = Yup.object().shape({
        catName: Yup.string().required("There must be a category name!"),
        catDescription: Yup.string().required("Category must have description"),
        catImage: Yup.string().required("Category must have image"),
    })

    
    const onSubmit = (data) => {
        if(process.env.NODE_ENV === 'production') {
            axios.post(`${process.env.PROD}categories`, data).then((response) => {
                navigate('/quizzes')
            })
        } else {
            axios.post(`${process.env.DEV}categories`, data).then((response) => {
                navigate('/quizzes')
            })
        }
        
    }
    return (
        <div className='admin-post-container'>
            <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            >
                <Form className='admin-create-form'>
                    <label>Category Name</label>
                    <ErrorMessage name='catName' component='span' />
                    <Field 
                        autoComplete='off'
                        id='input-create-cat' 
                        name='catName' 
                        placeholder='Category Name'
                    />
                    <label>Category Description</label>
                    <ErrorMessage name='catDescription' component='span' />
                    <Field 
                        autoComplete='off'
                        id='input-create-cat' 
                        control='textarea'
                        name='catDescription' 
                        placeholder='Category Description'
                        
                    />
                    <label>Category Image</label>
                    <ErrorMessage name='catImage' component='span' />
                    <Field 
                        autoComplete='off'
                        id='input-create-cat' 
                        name='catImage' 
                        placeholder='Category Image'
                    />
                    
                    <button type='submit' className='admin-btn'>Create Category</button>
                </Form>
            </Formik>
        </div>
    )
}
