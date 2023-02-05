import React from 'react';
import './QuizRuleContainer.scss';
import bronzeCrown from '../../assets/images/bronzeCrown.png';
import silverCrown from '../../assets/images/silverCrown.png';
import goldCrown from '../../assets/images/goldCrown.png';
import platCrown from '../../assets/images/platCrown.png';
import rubyCrown from '../../assets/images/rubyCrown.png';
import emeraldCrown from '../../assets/images/emeraldCrown.webp';
import sapphireCrown from '../../assets/images/sapphireCrown.png';
import amethystCrown from '../../assets/images/amethystCrown.png';
import blackCrown from '../../assets/images/blackCrown.png';
import rainbowCrown from '../../assets/images/rainbowCrown.png';


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
                <div className='quiz-reward-table-container'>
                    <label>Quiz Rewards</label>
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
                </div>
                
                <div className='quiz-reward-table-container'>
                    <label>Crown Tier</label>
                    <table className='quiz-reward-table'>
                        <tr>
                            <th>Tier</th>
                            <th>Emblem</th>
                            <th>Crowns</th>
                        </tr>
                        <tr>
                            <td>X</td>
                            <td><img src={blackCrown} alt='bronze-crown' className='table-crown' /></td>
                            <td>1,000+</td>
                        </tr>
                        <tr>
                            <td>IX</td>
                            <td><img src={rainbowCrown} alt='bronze-crown' className='table-crown' /></td>
                            <td>500-999</td>
                        </tr>
                        <tr>
                            <td>VIII</td>
                            <td><img src={amethystCrown} alt='bronze-crown' className='table-crown' /></td>
                            <td>400-499</td>
                        </tr>
                        <tr>
                            <td>VII</td>
                            <td><img src={sapphireCrown} alt='bronze-crown' className='table-crown' /></td>
                            <td>300-399</td>
                        </tr>
                        <tr>
                            <td>VI</td>
                            <td><img src={emeraldCrown} alt='bronze-crown' className='table-crown' /></td>
                            <td>200-299</td>
                        </tr>
                        <tr>
                            <td>V</td>
                            <td><img src={rubyCrown} alt='bronze-crown' className='table-crown' /></td>
                            <td>150-199</td>
                        </tr>
                        <tr>
                            <td>IV</td>
                            <td><img src={platCrown} alt='bronze-crown' className='table-crown' /></td>
                            <td>100-149</td>
                        </tr>
                        <tr>
                            <td>III</td>
                            <td><img src={goldCrown} alt='bronze-crown' className='table-crown' /></td>
                            <td>75-99</td>
                        </tr>
                        <tr>
                            <td>II</td>
                            <td><img src={silverCrown} alt='bronze-crown' className='table-crown' /></td>
                            <td>50-74</td>
                        </tr>
                        <tr>
                            <td>I</td>
                            <td><img src={bronzeCrown} alt='bronze-crown' className='table-crown' /></td>
                            <td>25-49</td>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>N/A</td>
                            <td>0-24</td>
                        </tr>
                    </table>
                </div>
            </section>
        </div>
    )
}
