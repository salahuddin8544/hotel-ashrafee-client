import React from 'react';
import familyImg from '../../../assets/images/family_room.jpeg'
import img1 from '../../../assets/images/05.jpg'
import img2 from '../../../assets/images/08.jpg'
import img3 from '../../../assets/images/09.jpg'
import img4 from '../../../assets/images/DSC_0036.jpg'
const BestRoom = () => {
    return (
        <div className='w-5/6 mx-auto my-11'>
            <h2 className='text-grey text-2xl md:text-5xl my-6 text-center'>Our Best Rooms</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
           <div className="bg-base">
                <figure><img src={familyImg}alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='text-red text-sm'>Rooms Type</p>
                    <h2 className="card-title">
                    Family Room
                    </h2>
                    <div className="card-actions mt-1">
                       <p className='text-lg text-black font-description'>Each of our guest rooms and suites has been immaculately decorated with attention to the comfort of our guests.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='relative'>
                    <img className='h-64 w-full' src={img1} alt="" />
                    <h3 className='absolute w-full bg-yellow text-white bottom-0 opacity-75 px-1'>Superior Room from $ 199</h3>
                    </div>
                    <div className='relative'>
                    <img className='h-64 w-full' src={img2} alt="" />
                    <h3 className='absolute w-full bg-yellow text-white bottom-0 opacity-75 px-1'>Deluxe Room from $ 249</h3>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
                    <div className='relative'>
                    <img className='h-64 w-full' src={img3} alt="" />
                    <h3 className='absolute w-full bg-yellow text-white bottom-0 opacity-75 px-1'>Signature Room from $ 299</h3>
                    </div>
                    <div className='relative'>
                    <img className='h-64 w-full' src={img4} alt="" />
                    <h3 className='absolute w-full bg-yellow text-white bottom-0 opacity-75 px-1'>Luxury Room from $ 399</h3>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default BestRoom;