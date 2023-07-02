import React from 'react';
import { Link } from 'react-router-dom';

const SingleRooms = ({room}) => {
    const {_id,id,img,name,description,price,persons,king,slots} = room
    return (
        <div>
            <h3 className='text-2xl mb-6 font-header'>{name}</h3>
            <img className='w-full' src={img} alt="" />
            <p className='font-description my-4 '>{description}</p>
            <div className='flex items-center justify-between my-4'>
                <Link to={`/rooms/${_id}`} className='border-2 border-l-none border-brown text-brown px-6 py-2 hover:bg-brown hover:text-white transition-all'>View room</Link>
                <p>FROM $ {price}</p>
            </div>
        </div>
    );
};

export default SingleRooms;