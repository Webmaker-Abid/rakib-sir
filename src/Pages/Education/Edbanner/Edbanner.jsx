import React from 'react';
import pic from '../../../../public/rakib-sir-ed-pic.jpg'
import { Link } from 'react-router-dom';

const Edbanner = () => {
    return (
        <section>
            
            <div id='home' className='lg:flex justify-center p-8 m-8 gap-16 mx-auto section'>    
            <div className='text-left w-1/2 md:w-full sm:w-full sm:mb-4'>
                <h1 className='font-bold m-2 p-2 text-white lg:text-left md:text-center sm:text-center'>Hello, I am</h1>
                <h1 className='text-3xl m-2 p-2 font-extrabold text-white lg:text-left md:text-center sm:text-center'>Md. Rakibul Islam</h1>
                <h2 className='text-xl text-white m-2 p-2 font-semibold designation animate__heartBeat lg:text-left md:text-center sm:text-center'>Assistant Professor</h2>
                <div className='m-2 p-2  md:flex md:justify-center sm:flex sm:justify-center lg:justify-normal'>
                    <a href="https://www.linkedin.com/in/md-abidur-rahman-abid-955451280/" ><span className='font-bold text-white md:text-center mr-2'>Linkedin</span></a> <span className='text-white'>|</span> 
                    <a href="https://www.facebook.com/profile.php?id=100000639825722"><span className='font-bold text-white md:text-center ml-2'>Facebook</span></a>
                </div>
                <div className='m-2 p-2 md:flex md:justify-center sm:flex sm:justify-center lg:justify-normal'>
                    <Link to='/'><a><button className='button btn rounded font-bold text-white border-0 md:content-center'>Contact</button></a></Link>
                </div>
                
            </div> 
            <div className='text-white items-center w-1/2 md:w-full sm:w-full md:mt-8'>
                <img src={pic} className='w-80 h-auto rounded mx-auto'/>    
            </div>   
        </div>
        </section>
    );
};

export default Edbanner;