import React from 'react';
import drink from '../../../assets/images/drinks.png'
import fitness from '../../../assets/images/fitness.png'
import spa from '../../../assets/images/spa.png'
import restaurant from '../../../assets/images/restaurant.png'
import pool from '../../../assets/images/pool.png'
import loundry from '../../../assets/images/loundry.png'
import internet from '../../../assets/images/internet.png'
import concierge from '../../../assets/images/concierge.png'
const Choose = () => {
    return (
        <div className='w-5/6 mx-auto my-11'>
            <h2 className='text-grey  text-2xl md:text-5xl my-6 text-center'>WHY CHOOSE US
            </h2>
            <p className='text-center text-description text-lg'>Of is appear in face creeping and whose don’t blessed. <br />
                Female our herb you’ll female earth second moveth.</p>
            <div>
               <div className='grid grid-cols-2 md:grid-cols-4 mt-6'>
                <div>
                <div className="rounded-full h-32 w-32 bg-white shadow mx-auto">
                    <img className='w-28 h-28 p-3 rounded-full' src={drink} alt="" />
                    </div>
                    <h3 className='text-center mt-4 text-xl'>DRINKS</h3>
                </div>
                <div>
                <div className="rounded-full h-32 w-32 bg-white shadow mx-auto">
                    <img className='w-28 h-28 p-3 rounded-full' src={internet} alt="" />
                    </div>
                    <h3 className='text-center mt-4 text-xl'>INTERNET</h3>
                </div>
                <div>
                <div className="rounded-full h-32 w-32 bg-white shadow mx-auto">
                    <img className='w-28 h-28 p-3 rounded-full' src={concierge} alt="" />
                    </div>
                    <h3 className='text-center mt-4 text-xl'>CONCIERGE</h3>
                </div>
                <div>
                <div className="rounded-full h-32 w-32 bg-white shadow mx-auto">
                    <img className='w-28 h-28 p-3 rounded-full' src={pool} alt="" />
                    </div>
                    <h3 className='text-center mt-4 text-xl'>POOL</h3>
                </div>
               </div>
               <div className='grid grid-cols-2 md:grid-cols-4 sm:mt-4 md:mt-none'>
                <div>
                <div className="rounded-full h-32 w-32 bg-white shadow mx-auto">
                    <img className='w-28 h-28 p-3 rounded-full' src={fitness} alt="" />
                    </div>
                    <h3 className='text-center mt-4 text-xl'>FITNESS</h3>
                </div>
                <div>
                <div className="rounded-full h-32 w-32 bg-white shadow mx-auto">
                    <img className='w-28 h-28 p-3 rounded-full' src={loundry} alt="" />
                    </div>
                    <h3 className='text-center mt-4 text-xl'>LOUNDRY</h3>
                </div>
                <div>
                <div className="rounded-full h-32 w-32 bg-white shadow mx-auto">
                    <img className='w-28 h-28 p-3 rounded-full' src={restaurant} alt="" />
                    </div>
                    <h3 className='text-center mt-4 text-xl'>RESTAURANT</h3>
                </div>
                <div>
                <div className="rounded-full h-32 w-32 bg-white shadow mx-auto">
                    <img className='w-28 h-28 p-3 rounded-full' src={spa} alt="" />
                    </div>
                    <h3 className='text-center mt-4 text-xl'>SPA</h3>
                </div>
               </div>
            </div>    
        </div>
    );
};

export default Choose;