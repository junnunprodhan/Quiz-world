import React from 'react';
import { useContext } from 'react';
import Quiz from '../Quiz/Quiz';
import { TopicsContext } from '../Root/Root';

const Topics = () => {
    const topics =useContext(TopicsContext)
    const handleTopic=(topic)=>{
        console.log(topic)
    }   
    return (
     <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>  
        <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
           {topics.map(topic=><Quiz key={topic.id} handleTopic={handleTopic} topic={topic}></Quiz>)} 
        </div>
     </div>   
    );
};

export default Topics;