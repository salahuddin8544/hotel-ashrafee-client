import React from 'react';
import BookingItem from '../BookingItem/BookingItem';

const BookingConfirm = () => {
    return (
        <div className='w-5/6 mx-auto my-11'>
            <h2 className='text-center text-2xl md:text-5xl my-6 md:my-16  text-grey'>Booking Confirmation</h2>
            <BookingItem></BookingItem>
        </div>
    );
};

export default BookingConfirm;