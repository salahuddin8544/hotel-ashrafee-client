import React from 'react';

import background from'../../../assets/background/backround.jpeg'
import BookingModal from '../BookingModal/BookingModal';
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5  text-2xl md:text-5xl font-bold">HOTEL ASHRAFEE</h1>
            <p className="mb-5 text-xl">We are enticed to welcome you to our hotel.</p>
          </div>
        </div>
      </div>
    );
};

export default Banner;