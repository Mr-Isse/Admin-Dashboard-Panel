import { BellDot, Moon, Search } from 'lucide-react';
import React from 'react';
import Layout from './Layout';

const Header = () => {
  return (
    <div className=' mx-32 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> 
    <div className=' flex justify-between items-center '  >
      <div className='mt-12'>
        <h1 className=' text-2xl font-medium'>Dashboard</h1>
      </div>
        <div className=' mx-87 relative mt-4 flex'>
          <input type="text" placeholder='Search User...'
          className=' border border-gray-200 overflow-hidden p-2 pl-12 rounded shadow w-58 focus:outline-none'
          />
          <span className=' absolute left-3 top-1/2 transition -translate-y-1/2'>
            <Search className=''/>
          </span>
          <div className='mx-4 items-center mt-3 cursor-pointer'>
            <Moon/>
          </div>
          <div className='relative mt-3'>
              <BellDot/>
              <span className='bg-pink-500 p-1 absolute left-1 -top-5 rounded-full  h-6 cursor-pointer'>0</span>
          </div>
        </div>
    </div>
    <Layout/>
    </div>
  );
}

export default Header;
