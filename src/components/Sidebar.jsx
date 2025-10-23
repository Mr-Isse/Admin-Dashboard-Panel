import React from 'react';
import image from '../assets/imgae.jpg'
import { ChartPie, LayoutDashboard, Settings, Users } from 'lucide-react';
import Header from './Header';
const Sidebar = () => {
  return (
    <div className=' bg-gray-300 backdrop-blur-2xl shadow-2xl w-69 h-160 flex px-12'>
      <div className='flex flex-col'>
       <div className=' flex items-center justify-between '>
         <img className=' border border-white w-10 h-10 rounded-4xl mt-8 mx-2
         ' src={image} alt="" />
         <span className=' font-normal text-center mt-8'>Admin</span>
       </div>
       <div className='flex mt-4'>
        <LayoutDashboard className='w-12 h-7 '/>
        <span className='text-1xl cursor-pointer'>Dashboard</span>
       </div>
        <div className='flex mt-4'>
        <Users className='w-12 h-7 '/>
        <span className='text-1xl cursor-pointer text-center'>Users</span>
       </div>
        <div className='flex mt-4'>
        <ChartPie className='w-12 h-7 '/>
        <span className='text-1xl cursor-pointer'>Analytics</span>
       </div>
        <div className='flex mt-4'>
        <Settings className='w-12 h-7 '/>
        <span className='text-1xl cursor-pointer'>Setting</span>
       </div>
      </div>

      {/* Header */}
      <Header/>
    </div>
  );
}

export default Sidebar;
