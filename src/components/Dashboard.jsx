import React from 'react'
import TopStats from './TopStats'
import Activity from './Activity'
import RecentOrders from './RecentOrders'

export default function Dashboard() {
  return (
    <div className='p-3 m-1'>
        <h1 className='font-bold mb-2'>Dashboard</h1>
        <TopStats/>
        <Activity/>
        <RecentOrders/>
    </div>
  )
}
