import React, { useState } from 'react';
import reactLogo from '../assets/react.svg';
import { TiHome } from "react-icons/ti";
import { MdOutlineBarChart } from "react-icons/md";
import { PiNotepadBold } from "react-icons/pi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BsBagCheck } from "react-icons/bs";

const Sidebar = () => {
  const [active, setActive] = useState('home');

  const menuItems = [
    { id: 'home', icon: <TiHome />, label: 'Home' },
    { id: 'chart', icon: <MdOutlineBarChart />, label: 'Chart' },
    { id: 'notes', icon: <PiNotepadBold />, label: 'Notes' },
    { id: 'wallet', icon: <MdOutlineAccountBalanceWallet />, label: 'Wallet' },
    { id: 'bag', icon: <BsBagCheck />, label: 'Bag' },
  ];

  return (
    <div className="flex flex-col bg-gray-800 p-4 space-y-4">
      <img src={reactLogo} className="logo react mb-3" alt="React logo" />
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`w-full flex items-center justify-center p-2 rounded relative cursor-pointer ${
            active === item.id ? 'bg-gray-700 text-blue-500' : 'bg-gray-700 text-white'
          }`}
          onClick={() => setActive(item.id)}
        >
          {active === item.id && (
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded"></div>
          )}
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
