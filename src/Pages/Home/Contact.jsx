import React from 'react';

const Contact = () => {
    return (
        <div className='m-11 p-11'>
            <div className='text-3xl text-lime-500 font-bold text-left'>Feel Free To Message Me</div>
            <div className='m-6 p-6  grid grid-cols-2'>
                <div className='w-96 h-96'>
                    <img  src="../../../public/undraw_inbox_oppv.svg" alt=""/>
                </div>
                <div>
                        <div className="card-body">
                            <div className="form-control">
                            <input type="text" placeholder="Type Your Name" className="input input-bordered text-lime-500 border-4 border-lime-500 font-bold" />
                            </div>
                            <div className="form-control">
                           
                            <input type="email" placeholder="Enter Your Email Address" className="input input-bordered text-lime-500 border-4 border-lime-500 font-bold" />
                            
                            </div>
                            <div className="form-control">
                           
                            <textarea placeholder="Type Your Message" className="textarea textarea-bordered textarea-lg w-full text-lime-500 border-4 border-lime-500 font-bold" ></textarea>
                            
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn bg-lime-500 text-pink-500 font-bold">Submit</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;