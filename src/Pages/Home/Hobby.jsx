import React from 'react';

const Hobby = () => {
    return (
        <div className='m-11 p-11'>
            <div className='grid grid-cols-4'>
            <div>
                <img className='w-28 h-28' src="../../../public/teacher.png" alt="" />
                <p className='text-pink-500 font-bold text-lg'>Teaching</p>
            </div>
            <div>
                <img className='w-28 h-28' src="../../../public/online-learning.png" alt=""/>
                <p className='text-pink-500 font-bold text-lg'>Learning</p>
            </div>
            <div>
                <img className='w-28 h-28' src="../../../public/travelling.png" alt=""/>
                <p className='text-pink-500 font-bold text-lg'>Travelling</p>
            </div>
            <div>
                <img className='w-28 h-28' src="../../../public/playing.png" alt=""/>
                <p className='text-pink-500 font-bold text-lg'>Playing</p>
            </div>
            </div>
        </div>
    );
};

export default Hobby;