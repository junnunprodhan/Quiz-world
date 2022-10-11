import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import QuestionDiv from '../QuestionDiv/QuestionDiv';
import { QuizContext } from '../Root/Root';

const Topic = () => {
    const quizTopic=useLoaderData()
    const quizData=quizTopic.data;
    // console.log(quizData)
    return (
        <div>
            <div>
            <h1 className='text-4xl font-bold text-center'>Topic name : {quizData.name}</h1>
            <h1 className='text-3xl font-bold text-center'>Topic name : {quizData.total}</h1>
            <h3 className='text-3xl font-semibold text-center mt-2 text-green-600'>Correct answer :</h3>
            <h3 className='text-3xl font-semibold text-center mt-2 text-red-600'>Wrong answer : </h3>
            </div>
            <div className='text-center mt-10'>
            <QuestionDiv key={quizData.id} quizData={quizData}></QuestionDiv>
            </div>
        </div>

    );
};

export default Topic;