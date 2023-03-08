import React from 'react';
import './CommunityContact.scss';
import { FaPortrait } from 'react-icons/fa';
import { AiFillLinkedin, AiFillMail, AiFillGithub } from 'react-icons/ai';
import { BsMedium } from 'react-icons/bs';
import { GoRepo, GoRepoPush } from 'react-icons/go';


export default function CommunityContact() {
    return (
        <section className='community-contact-container'>
            <div className='contact-header'>
                <h1>Contact Us</h1>
            </div>
            <div className='credits-container'>
                <h1>Credits:</h1>
                <ul className='credit-list'>
                    <li className='credit-item'>Coded By: Jacob Hocker</li>
                    <li className='credit-item'>Designed By: Jacob Hocker</li>
                </ul>
            </div>
            <div className='links-container'>
                <h1>Links:</h1>
                <ul className='link-list'>
                    <li className='link-item'>
                        <a className='contact-link' title='Portfolio' href='https://jacobhocker.netlify.app/' target='_blank'>
                            <FaPortrait className='link-icon'/> 
                        </a>
                    </li>
                    <li className='link-item'>
                        <a className='contact-link' title='LinkedIn' href='https://www.linkedin.com/in/jacobhocker/' target='_blank'>
                            <AiFillLinkedin className='link-icon'/>
                        </a>
                    </li>
                    <li className='link-item'>
                        <a className='contact-link' title='GitHub' href='https://github.com/JacobHocker' target='_blank'>
                            <AiFillGithub className='link-icon'/>
                        </a>
                    </li>
                    <li className='link-item'>
                        <a className='contact-link' title='Medium' href='https://medium.com/@jacobhocker' target='_blank'>
                            <BsMedium className='link-icon'/>
                        </a>
                    </li>
                    <li className='link-item'>
                        <a className='contact-link' title='Email' href='mailto:jacobdouglas06@gmail.com' target='_blank'>
                            <AiFillMail className='link-icon'/>
                        </a>
                    </li>
                    <li className='link-item'>
                        <a className='contact-link' title='Front End Repo' href='https://github.com/JacobHocker/quiz-champ-fe' target='_blank'>
                            <GoRepo className='link-icon'/>
                        </a>
                    </li>
                    <li className='link-item'>
                        <a className='contact-link' title='Front End Repo' href='https://github.com/JacobHocker/quiz-champ-be' target='_blank'>
                            <GoRepoPush className='link-icon'/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='tech-container'>
                <h1>Built With:</h1>
                <ul className='tech-list'>
                    <li className='tech-item'>Reactjs</li>
                    <li className='tech-item'>Nodejs</li>
                    <li className='tech-item'>Expressjs</li>
                    <li className='tech-item'>Sass</li>
                    <li className='tech-item'>Bootstrap</li>
                    <li className='tech-item'>MySQL2</li>
                    <li className='tech-item'>Sequelize</li>
                </ul>
            </div>
        </section>
    )
}
