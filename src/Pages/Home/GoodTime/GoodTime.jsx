import React from 'react';
import back from '../../../assets/show/1.jpg'
const GoodTime = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:mt-1' style={{ backgroundImage: `url(${back})` }}>
            <div>

            </div>
            <div className='bg-black-rgba text-white py-16 px-9'>
                <h2 className='text-2xl md:text-5xl'>Good Time, Great <br /> Test</h2>
                <p>It is a long established fact that a reader
                    will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum</p>
            </div>
        </div>
    );
};

export default GoodTime;