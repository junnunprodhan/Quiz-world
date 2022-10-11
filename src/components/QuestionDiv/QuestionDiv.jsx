import React from 'react';
import Question from '../Question/Question';

const QuestionDiv = ({quizData}) => {
    // console.log(quizData)
    const {questions}=quizData;
    console.log(questions)
    return (
        <div>
            {
                questions.map(question=><Question question={question}></Question>)
            }
        </div>
    );
};

export default QuestionDiv;