import React from 'react';
import PropTypes from 'prop-types';

import Question from './Question.js';
import QuestionCount from './QuestionCount.js';
import AnswerOption from './AnswerOption.js';
import BVGLogoWithShadow from '../../assets/BVGLogoShadow.svg';
import Bear from '../../assets/triBear.svg';
import Gorilla from '../../assets/triGorilla.svg';


function Quiz(props) {
    function renderAnswerOptions(key) {
        return (
          <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
          />
        );
      }
    
    return (
      <div className="title">
        <img width="400px"src={BVGLogoWithShadow} alt="Main Logo"/>
      <div className="quiz">
      <img className="bear" src={Bear} alt="Bear"/>
        <div className="quizBox">
          <QuestionCount
            counter={props.questionId}
            total={props.questionTotal}
          />
          <Question content={props.question} />
          <ul className="answerOptions">
            {props.answerOptions.map(renderAnswerOptions)}
          </ul>
        </div>
        <img className="gorilla" src={Gorilla} alt="Gorilla"/>
        </div>
        </div>
    );
  }
  
  Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };
  
  export default Quiz;