import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='h-14 shadow-2xl bg-gray-800 '>
        <section className='max-w-3xl p-4 flex justify-between items-center px-8 mx-auto'>
          <Link className='font-extrabold tracking-tighter text-white' to='/' >{"(MOONLIFE)"}</Link>
          <nav className='text-white flex gap-4 items-center'>
            <Link to='/about'>About</Link>
            <Link to='/rockets'>Our Rockets</Link>
          </nav>
        </section>
      </header>
  )
}

export default Header