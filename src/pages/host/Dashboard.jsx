import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <main className='flex flex-1'>
        <h1>Dashboard</h1>
      </main>
    <Outlet />
    </>
  )
}

export default Dashboard