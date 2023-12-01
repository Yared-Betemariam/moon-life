import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='h-14 shadow-2xl bg-gray-800 '>
        <section className='max-w-3xl p-4 flex justify-between items-center px-8 mx-auto'>
          <Link className='font-extrabold tracking-tighter text-white' to='/' >{"(MOONLIFE)"}</Link>
          <nav className='text-white flex gap-4 items-center'>
          <NavLink className={({isActive}) => isActive? 'opacity-75 underline font-medium': null} to='/host'>Host</NavLink>
            <NavLink className={({isActive}) => isActive? 'opacity-75 underline font-medium': null} to='/about'>About</NavLink>
            <NavLink className={({isActive}) => isActive? 'opacity-75 underline font-medium': null} to='/rockets'>Our Rockets</NavLink>
          </nav>
        </section>
      </header>
  )
}

export default Header