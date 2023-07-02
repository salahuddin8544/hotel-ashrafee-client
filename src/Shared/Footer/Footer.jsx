import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-black'>
      <footer className="footer p-10  text-neutral-content">
        <div>
          <span className="text-white text-xl">Explore</span>
          <Link to={'/'} className="link link-hover">Home</Link>
          <Link to={'/rooms'} className="link link-hover">Our Rooms</Link>
          <Link to={'/about'} className="link link-hover">ABout</Link>
          <Link to={'/contact'} className="link link-hover">Contact</Link>
        </div>
        <div>
          <span className="text-white text-xl">Social Media</span>
          <Link to={'/https://web.facebook.com/hmsalauddin.ahmed.5/'} className="link link-hover">Facebook</Link>
          <Link to={'/https://web.facebook.com/hmsalauddin.ahmed.5/'} className="link link-hover">Twitter</Link>
          <Link to={'/https://web.facebook.com/hmsalauddin.ahmed.5/'} className="link link-hover">Instagram</Link>
          <Link to={'/https://web.facebook.com/hmsalauddin.ahmed.5/'} className="link link-hover">Tripadvisor</Link>
        </div>
        <div>
          <span className="text-white text-xl">Our Address</span>
          <a className="link link-hover">123 Fifth Floor East 26th Street,</a>
          <a className="link link-hover">Dhaka, Bangladesh</a>
        </div>
      </footer>
      <div>
        <p className='text-center py-4 text-gray'> Copyright 2023 Hotel Ahsrafee.</p>
      </div>
    </div>
  );
};

export default Footer;