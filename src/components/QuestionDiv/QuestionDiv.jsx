import React from 'react';
import Question from '../Question/Question';

const QuestionDiv = ({quizData}) => {
    // console.log(quizData)
    const {questions}=quizData;

    return (
        <div>
            {
                questions.map(question=><Question key={question.id} question={question}></Question>)
            }
        </div>
    );
};

export default QuestionDiv;