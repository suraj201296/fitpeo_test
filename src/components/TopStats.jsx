import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { TbShoppingCartOff } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { RiProgress8Fill } from "react-icons/ri";

export default function TopStats() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    <div className="bg-gray-700 p-4 rounded">
                        <div className='w-fit p-3 rounded-lg bg-blue-700'>
                            <FaCartPlus />
                        </div>
                        <h3>Total Orders</h3>
                        <div className="flex justify-between">
                            <p className='font-bold text-2xl'>75</p>
                            <div className='flex items-center'>
                                <BiSolidUpArrow className='text-green-500' />
                                <span className='mx-1 text-green-500'>3 %</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                        <div className='w-fit p-3 rounded-lg bg-green-600'>
                            <IoBagCheckSharp />
                        </div>
                        <h3>Total Delivered</h3>
                        <div className="flex justify-between">
                            <p className='font-bold text-2xl'>75</p>
                            <div className='flex items-center'>
                                <BiSolidDownArrow className='text-red-500' />
                                <span className='mx-1 text-red-500'>3 %</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                        <div className='w-fit p-3 rounded-lg bg-red-400'>
                            <TbShoppingCartOff />
                        </div>
                        <h3>Total Cancelled</h3>
                        <div className="flex justify-between">
                            <p className='font-bold text-2xl'>75</p>
                            <div className='flex items-center'>
                                <BiSolidUpArrow className='text-green-500' />
                                <span className='mx-1 text-green-500'>3 %</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                        <div className='w-fit p-3 rounded-lg bg-pink-500'>
                            <GiReceiveMoney />
                        </div>
                        <h3>Net Profit</h3>
                        <div className="flex justify-between">
                            <p className='font-bold text-2xl'>75</p>
                            <div className='flex items-center'>
                                <BiSolidDownArrow className='text-red-500' />
                                <span className='mx-1 text-red-500'>3 %</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-700 p-4 rounded">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                    <div className="col-span-2 flex flex-col justify-between">
                        <h3>Net Profit</h3>
                        <p className="font-bold text-2xl">$6759.25</p>
                        <div className="flex items-center">
                            <BiSolidUpArrow className="text-green-500" />
                            <span className="mx-1 text-green-500">3 %</span>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <RiProgress8Fill className="w-[100px] h-[95px] text-blue-300" />
                        <span className="absolute font-bold text-center">78%</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
