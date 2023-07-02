import React from 'react';

const SingleTestimonial = ({singleReview}) => {
    const {name,text,img,location} = singleReview
    return (
        <div className="card max:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{text}</p>
          <div className="my-4 flex justify-start items-center">
            <img className='rounded-full border-primary border-2' src={img} alt="" />
           <div className='ml-2'>
            <h2>{name}</h2>
           <p>{location}</p>
           </div>
          </div>
        </div>
      </div>
    );
};

export default SingleTestimonial;