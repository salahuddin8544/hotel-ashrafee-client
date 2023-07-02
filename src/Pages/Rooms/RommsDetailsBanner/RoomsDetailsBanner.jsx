import React from 'react';

const RoomsDetailsBanner = ({bgImg,title,subTitle}) => {

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-brown">. {title} .</h1>
            <p className="text-5xl font-bold text-brown">{subTitle}</p>
          </div>
        </div>
      </div>
    );
};

export default RoomsDetailsBanner;