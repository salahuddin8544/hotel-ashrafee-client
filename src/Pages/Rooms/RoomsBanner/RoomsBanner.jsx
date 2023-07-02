import React from 'react';
import roomsBanner from '../../../assets/rooms/tb.jpg'
const RoomsBanner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${roomsBanner})` }}>
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-brown">Our rooms</h1>
          </div>
        </div>
      </div>
    );
};

export default RoomsBanner;