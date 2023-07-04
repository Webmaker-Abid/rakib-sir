import React from 'react';
import masters from '../../../../public/download.jpg'
import honours from '../../../../public/univarsity.jpg'
import college from '../../../../public/college.jpg'
import school from '../../../../public/school.jpg'

const Edqualification = () => {
    return (
        <div>
            <div className='mb-8'>
               <p className='text-4xl text-center text-white font-bold'>My Educational Qualification <span className='text-pink-500'>_</span></p> 
            </div>
            <div className='mb-8 grid grid-cols-3 justify-between gap-2'>
                <div className="card w-96 bg-transparent border-2 border-pink-500 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={masters} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white">M.S.S – 2015</h2>
                    <p className='text-white'>M.S.S in Public Administration</p>
                    <p className='text-white'>Univarsity of Dhaka</p>
                    <p className='text-white'>Bangladesh</p>
                    
                </div>
                </div>
                <div className="card w-96 bg-transparent border-2 border-pink-500 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={honours} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white">B.S.S.- 2014
                    </h2>
                    <p className='text-white'>B.S.S. in Public Administration</p>
                    <p className='text-white'>Univarsity of Dhaka</p>
                    <p className='text-white'>Bangladesh</p>
                    
                </div>
                </div>
                <div className="card w-96 bg-transparent border-2 border-pink-500 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={college} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white">HSC – 2010</h2>
                    <p className='text-white'>Science Group</p>
                    <p className='text-white'>Dhaka College</p>
                    <p className='text-white'>Bangladesh</p>
                    
                </div>
                </div>
                <div className="card w-96 bg-transparent border-2 border-pink-500 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={school} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white">SSC – 2008</h2>
                    <p className='text-white'>Science Group</p>
                    <p className='text-white'>Dhanmondi Govt. Boys’ High School</p>
                    <p className='text-white'>Bangladesh</p>
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default Edqualification;