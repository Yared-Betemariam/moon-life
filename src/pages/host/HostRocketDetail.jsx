import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLoaderData, useParams } from 'react-router-dom'
import Data from '../../../data/Data'

export function loader({params}) {
  const Rock = ((Data.rockets).filter(rock => rock.id == params.id))[0]
  return Rock
}
const HostRocketDetail = () => {
  const params = useParams()
  // const [rocket, setRocket] = useState(null)
  const rocket = useLoaderData()
  // useEffect(() => {
  //   const fetchData = async () => {
  //     /* const res = await fetch('http://localhost:3500/rockets');
  //     const resJson = await res.json() */  
  //   }
  //   /* fetchData() */
  //   const Rock = ((Data.rockets).filter(rock => rock.id == params.id))[0]
  //   setRocket(Rock)
  // },[params.id])


  return (
    <main className='flex flex-col flex-1 text-white'>
      {rocket ? 
      <>
        <article className='w-full max-w-3xl mx-auto p-4 '>
          <Link relative='path' className='p-4 text-md font-medium underline tracking-tight' to='..'>&lt; Back to rocktets</Link>
          <section className='flex my-4 gap-4'>
            <img className='w-[24vw] h-[24vw] max-w-[12rem] max-h-[12rem] rounded-xl mb-4' src={rocket.img} alt="" />
            <div className='flex flex-col'>
              <i className='bg-red-400 rounded-md py-2 p-4'>{rocket.type}</i>
              <h1 className='text-xl font-semibold mt-4'>{rocket.name}</h1>
              <p>{rocket.price}/day</p>
            </div>
          </section>
          <nav className='flex justify-between px-8 bg-white text-gray-900 text-md py-1 font-medium w-full'>
          <NavLink className={({isActive}) => isActive? 'opacity-80 underline font-bold': 'opacity-75'} to='.' end>Details</NavLink>
          <NavLink className={({isActive}) => isActive? 'opacity-80 underline font-bold': 'opacity-75'} to='pricing'>Pricing</NavLink>
          <NavLink className={({isActive}) => isActive? 'opacity-80 underline font-bold': 'opacity-75'} to='photos'>Photos</NavLink>
          </nav>
          <Outlet context={{rocket}}/>
        </article>
        </>
      : <h2>Loading..</h2>}
    </main>  
  )
}

export default HostRocketDetail