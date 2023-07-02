import { DatePicker } from 'antd';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { authContext } from '../../../Context/AuthProvider';
const { RangePicker } = DatePicker
const BookingItem = () => {
    const { roomInfo, user } = useContext(authContext)
    const { name: RoomName, price: RoomPrice, accommodations } = roomInfo;
    const { dates, setDates } = useContext(authContext)
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: `${user?.displayName}`,
            email: `${user?.email}`,
        },
    });
    console.log(dates);
    const handleCheck = (data) => {
        const rooms = data.rooms
        const adults = data.adults
        const children = data.children
        const email = data.email
        const address = data.address
        const accommodation = data.accommodation
        const booking = {
            RoomName,
            RoomPrice,
            email,
            rooms,
            adults,
            children,
            bookingDates: dates,
            address,
            accommodation
        }
        console.log(booking);
        fetch('https://hotel-ashrafee-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('booking Confirmed')

                }
                else {
                    toast.error(data.message)
                }
            })
    }
    return (
        <div className='bg-gray mx-auto ' id='testing'>
            <div className=''>
                <h3 className='text-center text-2xl md:text-4xl  font-bold py-6'>{RoomName}</h3>
            </div>
           
            <form onSubmit={handleSubmit(handleCheck)} className='grid grid-cols-1 md:grid-cols-2 gap-11 w-5/6 mx-auto justify-center'>
                <div className=''>
                    <div className='flex place-content-between w-64 text-black'>
                    <div>
                <div>
                    <p className='text-2xl mb-4'>Check In & Check Out</p>
                <h5>Select Dates</h5>
                <RangePicker
                    onChange={(values) => {

                        setDates(values.map((item,i) =>
                            
                            {
                            return (item).format('DD-MM-YYYY');
                        }))
                    }}
                ></RangePicker>
                </div>
                {errors.ranges && <p role="alert">{errors.ranges?.message}</p>}
            </div>
                    </div>
                    <div className='place-content-between w-64 mt-6 text-black'>
                        <div className='items-center content-center'>
                            <div className='grid grid-cols-3'>
                                <div>
                                    <label htmlFor="">Rooms</label> <br />
                                    <input type="number"   {...register("rooms",
                                        { required: 'Please enter a your name' }
                                    )}
                                        name="rooms" id="" defaultValue={1} className='w-16 p-3 rounded' />
                                </div>
                                <div>
                                    <label htmlFor="">Adults</label> <br />
                                    <input  {...register("adults")} type="number" name="adults" id="" defaultValue={1} className='w-16 p-3 rounded' />
                                </div>
                                <div>
                                    <label htmlFor="">Children</label> <br />
                                    <input type="number"  {...register("children")} name="children" id="" defaultValue={0} className='w-16 p-3 rounded' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="">Select Your Accommodation No</label> <br />
                                <select  {...register("accommodation")} name="accommodation" className="select select-bordered w-full mt-2">
                                    {
                                        accommodations.map((accommodation, i) => <option
                                            key={i}
                                            value={accommodation}>{accommodation}</option>)
                                    }
                                </select>
                                <p>{accommodations.length} accommodations found. </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='text-black'>
                    <h2 className='text-2xl'>Your Information</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="text"
                            defaultValue={user?.email}
                            {...register("name",

                                { required: 'Please enter a your name' }
                            )}
                        />
                        {errors.name && <p role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="text"
                            disabled
                            defaultValue={user?.uid}
                            {...register("email",
                                { required: 'Please enter a your Email' }
                            )}
                        />
                        {errors.email && <p role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <textarea rows={5} cols={10} className="input input-bordered w-full max-w-xs" type="text"
                            {...register("address",
                                { required: 'Please enter a your Address' }
                            )}
                        />
                        {errors.address && <p role="alert">{errors.address?.message}</p>}
                        <input disabled={accommodations.length === 0} to={'/rooms'} type="submit" value='Book' className="border-2 border-l-none mb-6 border-brown text-brown px-6 py-2 hover:bg-brown hover:text-white transition-all book-room mt-4 " />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookingItem