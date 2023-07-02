import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading/Loading';
const AllUsers = () => {
    const{data:users = [] ,isLoading,refetch} = useQuery({
        queryKey:['users'],
        queryFn: async ()=>{
            const res = await fetch('https://hotel-ashrafee-server.vercel.app/users')
            const data = await res.json();
            return data
        }
    })
   const handleAdmin = (id)=>{
        fetch(`https://hotel-ashrafee-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accesToken')}`
            }
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                refetch()
            }
        })
   }
   console.log(users);
   if(isLoading){
    <Loading></Loading>
   }
    return (
        <div>
        <h2 className="text-3xl">All Users</h2>
        <table className="table w-full">
            {/* head */}
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Admin</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                        users.map((user,i)=> <tr
                        key={i}
                        >
                    <td>{i}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user?.role !== 'admin' && <button className='bgn btn-primary' onClick={()=>handleAdmin(user._id)}>Make Admin</button>}</td>
                    <td><button className='bgn btn-danger'>Delete</button></td>
                        </tr>)
                    }
            </tbody>
        </table>
    </div>
    );
};

export default AllUsers;