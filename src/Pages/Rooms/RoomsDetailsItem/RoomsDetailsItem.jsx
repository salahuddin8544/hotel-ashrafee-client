import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Context/AuthProvider';
// import { Link, Route } from 'react-router-dom';
const RoomsDetailsItem = ({_id,subImg,subTitle2,subTitle3,description2,name,price,accommodations}) => {
    const {setRoomInfo} = useContext(authContext)

    const roomInfo = {name,price,accommodations}
    setRoomInfo(roomInfo);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-11 w-5/6 mx-auto my-16 md:mt-32 items-center justify-center'>
            <img src={subImg} className='w-full md:w-5/6 h-11/12' alt="" />
            <div>
                <h3 className='text-5xl text-grey font-serif'>{subTitle2}</h3>
                <h3 className='text-4xl text-grey my-4 font-sans'>{subTitle3}</h3>
                <p className='mb-9 font-description text-lg'>{description2}</p>
                <Link  to={`/rooms/:${_id}/booking-confirm`}className='border-2 border-l-none border-brown text-brown px-6 py-2 hover:bg-brown hover:text-white transition-all book-room'>Book this room</Link>
            </div>
        </div>
    );
};

export default RoomsDetailsItem;