import React from 'react';
import Options from '../Options/Options';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEye } from '@fortawesome/free-solid-svg-icons'


const Question = ({question}) => {

    // const {id,options,question}=question;
    const questionName=question.question;
    const id = question.id;
    const correctAns=question.correctAnswer;
    const options=question.options;

    const handleCorrectAns=(options)=>{
        if(options===correctAns){
            toast.success('wow!! right Answer',{autoClose :500})
            
        }
        else{
            toast.error('ops!! Wrong answer', {autoClose:500})
        }
    }
    const showCorrectAns=(correctAns)=>{
        toast.info(`Correct Answer : ${correctAns}`,{autoClose:2500})
    }
    // console.log(questionName,id,correctAns,options)
    return (
        <div className='bg-violet-200 mb-10 p-10 w-11/12 mx-auto rounded-lg'>
            <span className='text-2xl text-black font-semibold mb-6'>{questionName}</span>
            <span onClick={()=>showCorrectAns(correctAns)} className='text-right text-3xl text-purple-600 ml-14'><FontAwesomeIcon icon={faEye} /></span>
            {options.map((option,index)=><Options handleCorrectAns={handleCorrectAns} key={index} option={option}></Options>)}
        </div>
    );
};

export default Question;