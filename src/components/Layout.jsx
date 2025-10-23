import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Layout = () => {

    const [Users,SetUser]=useState([]);

    useEffect(()=>{
        const fetchUsers=async()=>{
            try{
                const {data}=await axios.get(`https://dummyjson.com/users`);
                SetUser(data.users)
            } catch(e){
                console.log(e)
            }
        }
        fetchUsers();
    },[Users])
  return (
    <div className=' grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-4'>
        <div className='w-68 bg-gray-300 h-47'>
            <h1 className='mt-12 text-center font-medium text-2xl'>{Users.length}</h1>
            <p className='text-center text-2xl font-normal'>Users</p>
        </div>
        <div className='w-68 bg-gray-300 h-47'>
            <h1 className='mt-12 text-center font-medium text-2xl'>91</h1>
            <p className='text-center text-2xl font-normal'>Countries</p>
        </div>
        <div className='w-68 bg-gray-300 h-47'>
            <h1 className='mt-12 text-center font-medium text-2xl'></h1>
            <p className='text-center text-2xl font-normal'>Users</p>
        </div>
    </div>
  );
}

export default Layout;
