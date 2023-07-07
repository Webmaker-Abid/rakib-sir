import React from 'react';
import ar1 from '../../../public/ar1.jpg'
import ar2 from '../../../public/ar2.jpg'
import ar3 from '../../../public/ar3.jpg'

const Articles = () => {
    return (
        <div className='p-8 m-8'>
            <div>
                <h1 className='text-4xl text-pink-500 font-bold'>See My Latest Contribution <span className='text-lime-500'>_</span></h1>
            </div>
            <div>
            <div className='p-8 m-8 '>
            <div className="overflow-x-auto rounded">
                <table className="table w-full mx-auto bg-transparent border-2 border-lime-500">
                    {/* head */}
                    <thead className='bg-transparent'>
                    <tr className='bg-lime-500'>
                        <th className='bg-transparent text-white'>#</th>
                        <th className='bg-transparent text-white'>Article Picture</th>
                        <th className='bg-transparent text-white'>Article Name</th>
                        <th className='bg-transparent text-white'>Action</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr className='bg-transparent'>
                        <td className='bg-transparent'>
                            <span className='text-white'>1</span>
                        </td>
                        <td className='bg-transparent'> 
                            <div className="mask mask-squircle w-12 h-12 bg-tranparent">
                                <img src={ar1} alt="image" className='bg-transparent' />
                            </div>
                        </td>
                        <td className='bg-transparent text-white'>
                        Political socialization: A window of gender balanced leadership
                        </td>
                        
                        
                        <th className='bg-transparent'>
                        
                        <a href="https://www.jagonews24.com/en/opinion/news/21175" className='text-white'>Details</a>
                        </th>
                       
                    </tr>
                    <tr className='bg-transparent'>
                        <td className='bg-transparent'>
                            <span className='text-white'>2</span>
                        </td>
                        <td className='bg-transparent'> 
                            <div className="mask mask-squircle w-12 h-12 bg-tranparent">
                                <img src={ar2} alt="image" className='bg-transparent' />
                            </div>
                        </td>
                        <td className='bg-transparent text-white'>
                        নগর কথন : পরিকল্পিত ঢাকা কবে?
                        </td>
                        
                        
                        <th className='bg-transparent'>
                        
                        <a href="https://www.jagonews24.com/opinion/news/314299" className='text-white'>Details</a>
                        </th>
                       
                    </tr>
                    <tr className='bg-transparent'>
                        <td className='bg-transparent'>
                            <span className='text-white'>3</span>
                        </td>
                        <td className='bg-transparent'> 
                            <div className="mask mask-squircle w-12 h-12 bg-tranparent">
                                <img src={ar3} alt="image" className='bg-transparent' />
                            </div>
                        </td>
                        <td className='bg-transparent text-white'>
                        ভাষার রাজনীতি, রাজনীতির ভাষা 
                        </td>
                        
                        
                        <th className='bg-transparent'>
                        
                        <a href="https://www.odhikar.news/opinion/47724" className='text-white'>Details</a>
                        </th>
                       
                    </tr>
                    
                    </tbody>
                    
                </table>
            </div>
            
        </div>
            </div>
        </div>
    );
};

export default Articles;