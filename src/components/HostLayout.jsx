import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {
  return (
    <>
      <section className='bg-neutral-200 text-gray-950 font-semibold shadow-xl'>
        <nav className='flex justify-between py-2 px-10 max-w-3xl mx-auto'>
          <NavLink end className={({isActive}) => isActive? 'opacity-80 underline font-bold': 'opacity-75'} to='/host'>Dashboard</NavLink>
          <NavLink className={({isActive}) => isActive? 'opacity-80 underline font-bold': 'opacity-75'} to='/host/income'>Income</NavLink>
          <NavLink className={({isActive}) => isActive? 'opacity-80 underline font-bold': 'opacity-75'} to='/host/rockets'>Rockets</NavLink>
          <NavLink className={({isActive}) => isActive? 'opacity-80 underline font-bold': 'opacity-75'} to='/host/reviews'>Reviews</NavLink>
        </nav>
      </section>
     <Outlet />
    </>
  )
}

export default HostLayout