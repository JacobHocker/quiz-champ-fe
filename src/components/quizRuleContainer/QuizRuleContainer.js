import React from 'react';
import './QuizRuleContainer.scss';

export default function QuizRuleContainer() {
    return (
        <div className='quiz-rule-reward-container'>
            <section className='quiz-rule-container'>
                <div className='quiz-rule-header'>
                    <h1>Rules</h1>
                </div>
                <div className='quiz-rules'>
                    <h2>Quiz Rules</h2>
                    <ul className='quiz-rule-list'>
                        <li>Total of 2 attempts for each quiz.</li>
                        <li>There are 30 seconds to answer each question.</li>
                        <li>Between both attempts the max amount of earnable crowns is 5.</li>
                        <li>If a question is not answered before the timer runs out, the question with automatically move to the next question as a no answer.</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
