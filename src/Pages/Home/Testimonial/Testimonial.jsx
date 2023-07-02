import React from 'react';
import SingleTestimonial from './SingleTestimonial';
import salahuddin from '../../../assets/clients/Salah uddin.jpeg'
import fakhrul from '../../../assets/clients/fakhrul.jpg'
import ashraful from '../../../assets/clients/Ahsraful.jpg'
import quote from '../../../assets/clients/quote.png'
const Testimonial = () => {
    const testitmonialData = [
        {
            id: 1,
            name: 'Md Salah uddin',
            location: 'Sylhet',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:salahuddin
        },
        {
            id: 2,
            name: 'Fakhrul Islam',
            location: 'Dhaka',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:fakhrul
        },
        {
            id: 1,
            name:'Ashraful Islam',
            location: 'Khulna',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:ashraful
        },
    ]
    return (
        <section className='w-5/6 mx-auto my-11'>
        <div  className='flex justify-between items-center' >
            <div className='my-6'>
                <h2 className='text-xl font-bold text-brown mb-2'>Testimonial</h2>
                <p className='text-2xl md:text-5xl'>What Our Clitents Says</p>
            </div>
            <div>
            <img className='w-32' src={quote} alt="" />
            </div>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            testitmonialData.map((singleReview,i)=> <SingleTestimonial
            
            key={i}
            singleReview={singleReview}
            ></SingleTestimonial>)
        }
        </div>
    </section>
    );
};

export default Testimonial;