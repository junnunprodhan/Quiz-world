import React, { useContext } from 'react';
import { TopicsContext } from '../Root/Root';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const totalQuiz =useContext(TopicsContext);

    return (
        <ResponsiveContainer width="90%" height={500}>
            <LineChart width={600} height={300} data={totalQuiz}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r:8 }} />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Statistics;