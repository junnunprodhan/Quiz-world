import React from 'react';
import Options from '../Options/Options';

const Question = ({question}) => {
    console.log(question)
    // const {id,options,question}=question;
    const questionName=question.question;
    const id = question.id;
    const correctAns=question.correctAnswer;
    const options=question.options;
    // console.log(questionName,id,correctAns,options)
    return (
        <div className='bg-violet-200 mb-10 p-10 w-11/12 mx-auto rounded-lg'>
            <h2 className='text-2xl text-black font-semibold mb-6'>{questionName}</h2>
            {options.map(option=><Options option={option}></Options>)}
        </div>
    );
};

export default Question;