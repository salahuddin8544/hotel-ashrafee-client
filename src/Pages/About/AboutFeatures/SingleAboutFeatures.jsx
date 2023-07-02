import React from 'react';

const SingleAboutFeatures = ({feature}) => {
    const {photo, year, description} = feature;
    return (
        <div>
        <h3 className='text-2xl mb-6 font-header'>{name}</h3>
        <img className='w-full' src={photo} alt="" />
        <p className='font-description'>{description}</p>
        <h3 className='font-header text-black font-bold text-5xl'>{year}</h3>
    </div>
    );
};

export default SingleAboutFeatures;