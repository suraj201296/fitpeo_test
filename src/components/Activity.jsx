import React from "react";
import BarChart from "./Barchart";
import { BiTargetLock } from "react-icons/bi";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";

export default function Activity() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-2">
          <div className="bg-gray-700 p-4 rounded" style={{ width: "100%" }}>
            <div className="flex justify-between">
              <h1 className="font-bold mb-2">Activity</h1>
              <span className="text-sm px-5 bg-gray-600 flex items-center justify-center rounded-full">
                Weekly
              </span>
            </div>
            <BarChart />
          </div>
        </div>
      </div>
      <div className="bg-gray-700 p-4 rounded">
        <div className="grid sm:grid-cols-1 gap-3">
          <div className="card flex justify-between items-center">
            <div className="flex items-center gap-1 ">
              <BiTargetLock className="bg-red-400 rounded-full h-[3rem] w-[3rem] p-2 m-2" />
              <h1 className="text-xl">Goals</h1>
            </div>
            <div className="p-2 m-2 rounded-full bg-gray-500">
              <MdNavigateNext />
            </div>
          </div>
          <div className="card flex justify-between items-center">
            <div className="flex items-center gap-1 ">
              <MdOutlineRestaurantMenu className="bg-violet-400 rounded-full h-[3rem] w-[3rem] p-2 m-2" />
              <h1 className="text-xl">Popular Dishes</h1>
            </div>
            <div className="p-2 m-2 rounded-full bg-gray-500">
              <MdNavigateNext />
            </div>
          </div>
          <div className="card flex justify-between items-center">
            <div className="flex items-center gap-1 ">
              <MdMenuBook className="bg-sky-400 rounded-full h-[3rem] w-[3rem] p-2 m-2" />
              <h1 className="text-xl">Menus</h1>
            </div>
            <div className="p-2 m-2 rounded-full bg-gray-500">
              <MdNavigateNext />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
