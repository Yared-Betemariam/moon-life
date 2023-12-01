import React from 'react'
import hero from '../../images/moonlife-about.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <main className='flex flex-1 flex-col text-white'>
      <img src={hero} className='w-full h-[35vh] object-cover object-top' alt="" />
      <article className='p-6 px-8 max-w-3xl mx-auto'>
        <h1 className='text-3xl mb-6 font-medium'>Don't rest until you achieve your dreams.</h1>
        <p className='mb-4 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus possimus aut eos delectus magni mollitia officia dolo.</p>
        <p className=' text-sm'>rum est suscipit, optio eius iste. Voluptatibus ipsa accusantium nostrum, eaque deleniti consequatur tempora</p>
        <section className='bg-sky-700 my-4 shadow-xl rounded-sm p-4'>
          <h3 className='text-lg tracking-tighter leading-5 mb-4 line-1 font-medium'>Your destination is awaiting. <br /> Your rockets are ready</h3>
          <Link to='/rockets' className='text-white bg-sky-900 shadow-md px-8 py-2 rounded-md'>Explore our rockets</Link>
        </section>
      </article>
    </main>
  )
}

export default About