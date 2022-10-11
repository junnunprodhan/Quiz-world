import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({topic,handleTopic}) => {
    const {name,logo,total,id}=topic
  return (
    <div className="max-w-xs rounded-md shadow-md bg-purple-700 dark:text-gray-100">
      <img
        src={logo}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-gray-100 tracking-wide">
            {name}
          </h2>
          <p className="text-gray-100">
            Total Quiz : {total}
          </p>
        </div>
        <Link
        to={`/topic${id}`}
        >
        <button
        onClick={()=>handleTopic}
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-purple-600 text-white"
        >
          Start Quiz
        </button>
        </Link>
        {/* <button
        onClick={()=>handleTopic}
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-purple-600 text-white"
        >
          Start Quiz
        </button> */}
      </div>
    </div>
  );
};

export default Quiz;
