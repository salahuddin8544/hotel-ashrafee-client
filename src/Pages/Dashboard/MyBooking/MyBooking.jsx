import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../../../Context/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import { Link } from 'react-router-dom';

const MyBooking = () => {
    const {user} = useContext(authContext)
    const url = `https://hotel-ashrafee-server.vercel.app/bookings?email=${user?.email}`
    const{data:bookings=[],isLoading,refetch } = useQuery({
        queryKey:['bookings',user?.email],
        queryFn: async ()=>{
            const res = await fetch(url,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accesToken')}`
                }
            })
            const data = await res.json();
            return data
        }
       
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto">
        <h3 className="text-3xl mb-6">My Appoinment</h3>
        {
            bookings.length === 0 ?
           
            <>
           <div className='flex justify-center items-center'>
           <h2 className='text-center'>Not yet Bookings</h2>
            <img className='w-16 ms-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBy1H9M_sdgoIqqVyeJETXqa9geIy1eZnySw&usqp=CAU" alt="" />
           
           </div>
          <div className='text-center'>
          <Link to={'/rooms'}>Book here</Link>
          </div>
            </>
                :
            <table className="table w-full">
            {/* head */}
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Room Name</th>
                    <th>Price</th>
                    <th>Rooms</th>
                    <th>Room No</th>
                    <th>Adults</th>
                    <th>Children</th>
                    <th>Dates</th>
                    <th>Address</th>
                    <th>Payment</th>
                </tr>
            </thead>
            <tbody>
                {
                        bookings?.map((booking,i)=> <tr
                        key={i}
                        >
                    <td>{booking.email}</td>
                    <td>{booking.RoomName}</td>
                    <td>{booking.RoomPrice}</td>
                    <td>{booking.rooms}</td>
                    <td>{booking.accommodation}</td>
                    <td>{booking.adults}</td>
                    <td>{booking.children}</td>
                    <td>{booking.bookingDates[0]} - {booking.bookingDates[1]}  </td>
                    <td>{booking.address}</td>
                    <td>
                        { booking.RoomName && !booking.paid &&
                            <Link to={`/dashboard/payments/${booking._id}`}><button className='btn bg-brown text--white'>Pay</button></Link>
                        }
                        {
                           booking.RoomPrice && booking.paid && <span>Paid</span>
                        }
                        
                        </td>
                        </tr>)
                    }
            </tbody>
        </table>
        }
       
    </div>
    );
};

export default MyBooking;