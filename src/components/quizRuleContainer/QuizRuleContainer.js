import React from 'react';
import './QuizRuleContainer.scss';

export default function QuizRuleContainer() {

    return (
        <div className='quiz-rule-reward-container'>
            <section className='quiz-rule-container'>
                <div className='quiz-rule-header'>
                    <h1>Rules</h1>
                </div>
                <div className='rules-section'>
                    <h2>Quiz Rules</h2>
                    <ul className='rule-list'>
                        <li>Total of 2 attempts for each quiz.</li>
                        <li>There are 30 seconds to answer each question.</li>
                        <li>Between both attempts the max amount of earnable crowns is 5.</li>
                        <li>If timer hits 0 it will automatically move to next question.</li>
                    </ul>
                </div>
                <div className='rules-section'>
                    <h2>Community Rules</h2>
                    <ul className='rule-list'>
                        <li>Be kind and courteous to others when posting and commenting.</li>
                        <li>No self promotions of any kind.</li>
                        <li>Hate speech of any kind will result in immediate account termination and ban.</li>
                    </ul>
                </div>
            </section>
            <section className='quiz-reward-container'>
                <div className='quiz-reward-header'>
                    <h1>Rewards</h1>
                </div>
                <table className='quiz-reward-table'>
                    <tr>
                        <th>Score</th>
                        <th>Crowns</th>
                    </tr>
                    <tr>
                        <td>100%</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>90% - 99%</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>80% - 89%</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>70% - 79%</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>60% - 69%</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>0% - 59%</td>
                        <td>0</td>
                    </tr>
                </table>
            </section>
        </div>
    )
}
