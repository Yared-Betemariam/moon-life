import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='text-white flex-1 py-16 px-8 bg-hero bg-center bg-cover relative'>
      <div className='absolute top-0 bottom-0 left-0 right-0 bg-black z-[-1]'></div>
      <h1 className='text-4xl font-bold z-10'>You decide where to go. we take care of shipping.</h1>
      <p className='my-4 z-10 mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id a provident eaque, molestiae, reprehe</p>
      <Link className='w-full z-10 block text-center py-2 bg-lime-600 rounded-md shadow-md font-semibold text-md' to='/rockets'>Find your Rocket</Link>
    </main>
  )
}

export default Home