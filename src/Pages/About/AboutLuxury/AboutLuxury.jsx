import React from 'react';
import { Link } from 'react-router-dom';

const AboutLuxury = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-11 w-5/6 mx-auto mt-16 md:mt-32 items-center justify-center'>
            <img src='https://hotellerv5.b-cdn.net/boutique/wp-content/uploads/sites/2/2019/06/room1_portrait.jpg' className='w-full md:w-5/6 h-11/12' alt="" />
            <div>
                <h3 className='text-2xl md:text-5xl text-grey font-serif'>Luxury & Comfort</h3>
                <h3 className='text-4xl text-grey my-4 font-sans'>Our services and wonders of Prague</h3>
                <p className='mb-9 font-description text-lg'>See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket.</p>
                <Link  to={`/rooms`}className='border-2 border-l-none border-brown text-brown px-6 py-2 hover:bg-brown hover:text-white transition-all book-room'>Our Rooms</Link>
            </div>
        </div>
    );
};

export default AboutLuxury;