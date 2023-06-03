import React from 'react';


const Banner = () => {
    return (
        <div className='grid grid-cols-2 gap-8 justify-between items-start m-11 p-11'>
            <div className='my-auto'>
                <h1 className='text-pink-500 text-3xl font-bold text-left'>-Md. Rakibul Islam</h1>
                <h2 className='text-lime-500 text-2xl text-left font-bold'>-Assistance Professor & Head Of The Department</h2>
                <h3 className='text-lime-500 text-xl text-left font-bold'>-Local Government & Uraban Development</h3>
                <h4 className='text-lime-500 text-lg text-left font-bold'>-Jatiya Kabi Kazi Nazrul Islam University</h4>
                
            </div>
            <div >
                <img className='w-96 h-96 rounded-full border-8 border-lime-500' src="../../../public/rakib sir.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;