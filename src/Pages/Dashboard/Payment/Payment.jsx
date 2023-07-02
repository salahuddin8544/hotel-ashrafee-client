import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Payment = () => {
    const bookings = useLoaderData();
    const {_id,RoomName,bookingDates,RoomPrice,email} = bookings
    const publish_kay = import.meta.env.VITE_STRIPE_PUBLISH_KEY
    const stripePromise = loadStripe(publish_kay);
    

    return (
        <div className='mx-4'>
            <h2 className='text-xl md:text-3xl'>Payment for <strong>{RoomName}</strong></h2>
            <p>Please pay <strong>$ {RoomPrice} </strong> for your booking on {bookingDates}</p>
            <div>
            <Elements stripe={stripePromise}>
          <CheckoutForm 
          bookings={bookings}
          />
        </Elements>
            </div>
        </div>
    );
};

export default Payment;