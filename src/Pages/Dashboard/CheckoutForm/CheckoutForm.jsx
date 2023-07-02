import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({bookings}) => {
    const {_id,RoomName,bookingDates,RoomPrice,email} = bookings
    const stripe = useStripe();
  const elements = useElements();
  
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://hotel-ashrafee-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json",
      authorization:`bearer ${localStorage.getItem('accesToken')}`
    },
      body: JSON.stringify({ price:RoomPrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [RoomPrice]);
    const handleSubmit = async (event) => {
        
        event.preventDefault();
        const card = elements.getElement(CardElement);
        if (elements == null) {
            return;
          }
          
          const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          console.log(error);
          
          if (error) {
            console.log('[error]', error);
            setCardError(error.message)
          } else {
            setCardError('')
            setProcessing(true)
            console.log('[PaymentMethod]');
          }
          console.log(cardError);
          setSuccess('')
          const {paymentIntent, error:confrimError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                    name:RoomName,
                    email: email
                },
              },
            },
          );
          if(confrimError){
            setCardError(confrimError.message);
            return 
          }
         if(paymentIntent.status ==="succeeded"){
            const payment = {
                price:RoomPrice,
                transactionId:paymentIntent.id,
                email,
                bookingId:_id
            }
            fetch('https://hotel-ashrafee-server.vercel.app/payments',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('AccesToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(response => response.json())
            .then(data=>{
                console.log(data)
                if(data.insertedId){
                    setSuccess(`Your payment ${paymentIntent.status}`)
                    setTransactionId(paymentIntent.id)
                }
            })
         }
          
        setProcessing(false)

    }
    return (
       <div className='my-6 w-96'>
         <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className='btn btn-sm my-4' disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      <div>
        {
            success &&
            <div>
                <p className='text-green'> {success}</p>
            <p className='text-red-text'>TransactionId: <strong>{transactionId}</strong></p>
            </div>
        }
      </div>
       </div>
    );
};

export default CheckoutForm;