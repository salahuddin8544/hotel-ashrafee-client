import React from 'react';

const RoomsDetailsFeatures = ({ roomFeatures, subImg2, subImg3, accommodations }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-11 w-5/6 mx-auto mt-16 md:mt-32 justify-center'>
            <div>
                <div className='mb-16'>
                    <h3 className='text-2xl mb-4'>Room Features</h3>
                    <p className='mb-1 font-description '>{roomFeatures[0]}</p>
                    <p className='mb-1 font-description '>{roomFeatures[1]}</p>
                    <p className='mb-1 font-description '>{roomFeatures[2]}</p>
                    <p className='mb-1 font-description '>{roomFeatures[3]}</p>
                    <p className='mb-1 font-description '>{roomFeatures[4]}</p>
                    <p className='mb-1 font-description '>{roomFeatures[5]}</p>
                    <p className='mb-1 font-description '>{roomFeatures[6]}</p>
                    <p className='mb-1 font-description '>{roomFeatures[7]}</p>
                </div>
                <img src={subImg2} className='w-full md:w-5/6 h-11/12' alt="" />
            </div>
            <img src={subImg3} className='w-full md:w-5/6 h-11/12' alt="" />
        </div>
    );
};

export default RoomsDetailsFeatures;