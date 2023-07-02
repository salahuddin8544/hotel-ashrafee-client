import React from 'react';
import aboutBackground from '../../../assets//background/about-background.jpg'
const AboutBanner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${aboutBackground})` }}>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1  className="mb-5 text-2xl font-bold font-description  md:text-4xl text-white md:w-3/5 mx-auto" >All of our accommodation options comprise luxury amenities such as tea & coffee makers, minibars</h1>
          </div>
        </div>
      </div>
    );
};

export default AboutBanner;