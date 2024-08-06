import React from 'react';
import { FiMail, FiSearch, FiSettings } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800">
      <div className="flex items-center space-x-4">
        <div className="hidden sm:flex items-center space-x-4 relative">
          <FiSearch className='absolute left-[25px]' />
          <input type="text" placeholder="Search" className="p-2 pl-[35px] bg-gray-700 rounded" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FiMail className='hidden sm:block rounded-full w-10 h-10 p-2 bg-gray-700 text-gray-400' />
        <FiSettings className='hidden sm:block rounded-full w-10 h-10 p-2 bg-gray-700 text-gray-400' />
        <div className='relative'>
          <span className='w-3 h-3 bg-blue-500 rounded-full absolute top-[8px] right-[8px]'></span>
          <IoNotificationsOutline className='rounded-full w-10 h-10 p-2 bg-gray-700 text-gray-400' />
        </div>
        <img src="/images/profile_pic.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
}
