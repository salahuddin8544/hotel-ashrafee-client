import React from 'react';
import Banner from '../Banner/Banner';
import BestRoom from '../BestRoom/BestRoom';
import Choose from '../Choose/Choose';
import Food from '../Food/Food';
import GoodTime from '../GoodTime/GoodTime';
import Testimonial from '../Testimonial/Testimonial';
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <BestRoom></BestRoom>
           <Choose></Choose>
           <Food></Food>
           <GoodTime></GoodTime>
           <Testimonial></Testimonial>
           </div>
    );
};

export default Home;