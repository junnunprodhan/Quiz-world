import React from 'react';


const Options = ({option}) => {
    console.log(option)

    return (
        <div className='bg-purple-500 hover:bg-purple-700 cursor-pointer my-3 w-full lg:w-9/12 mx-auto py-2 px-4 rounded-lg text-white font-semibold z-0'>
            <label htmlFor="option" className='py-2 px-3 rounded-md mb-3 flex items-center cursor-pointer'>
                <input type="radio" name="option" id="" />
                <p className='pl-3'>{option}</p>
            </label>
        </div>
    );
};

export default Options;