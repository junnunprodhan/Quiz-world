import React, { useContext } from 'react';
import { TopicsContext } from '../Root/Root';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const totalQuiz =useContext(TopicsContext);
    console.log(totalQuiz)
    return (
        <div className='w-9/12 mx-auto'>
            <LineChart width={600} height={300} data={totalQuiz}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r:8 }} />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;