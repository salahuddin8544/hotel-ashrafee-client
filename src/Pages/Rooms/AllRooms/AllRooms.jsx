import { DatePicker } from 'antd';
import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SingleRooms from '../SingleRooms/SingleRooms';
import { authContext } from '../../../Context/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
const AllRooms = () => {
    const {setRefetch,dates} = useContext(authContext)
    const {data:allrooms= [],  refetch,isLoading } = useQuery({
        queryKey: ['allrooms'],
        queryFn: () =>
          fetch(`https://hotel-ashrafee-server.vercel.app/rooms?dates=${dates}`).then(
            (res) => res.json(),
            
          ),
      })
      if(isLoading){
        return <Loading></Loading>
      }
     
    return (
        <div className='mx-auto'>
            <div className=' bg-base mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-4  py-4 md:py-11 text-center mx-auto  text-black'>
                            <p className='text-lg'>Superior Room</p>
                            <p className='text-lg'>Deluxe Room</p>
                            <p className='text-lg'>Signature Room</p>
                            <p className='text-lg'>Luxury Room</p>          
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 w-11/12 mx-auto  my-11 md:my-32'>
                {
                    allrooms.map((room,i)=> <SingleRooms
                    key={i}
                    room={room}
                    ></SingleRooms>)
                }
            </div>
        </div>
    );
};

export default AllRooms;