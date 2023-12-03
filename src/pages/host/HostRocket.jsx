import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Data from '../../../data/Data'
import { requireAuth } from '../../utils'


export async function loader({request}) {
  await requireAuth(request)
  return Data.rockets
}
const HostRocket = () => {
  //const [rockets, setRockets] = useState([])
  const rockets = useLoaderData()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     /* const res = await fetch('http://localhost:3500/rockets');
  //     const resJson = await res.json() */
      
  //   }
  //   /* fetchData() */
  //   setRockets(Data.rockets)
  // },[])

  const rocketElements = rockets.map(rock => (
    <section key={rock.id} className='p-2 hover:opacity-80 hover:bg-gray-700 transition-all duration-200 rounded-md flex max-h-32'>
      <Link className='flex gap-8' to={`${rock.id}`}>
      <img src={rock.img} className='rounded-xl' alt="" />
      <div className='my-4 text-xl font-medium'>
        <h3>{rock.name}</h3>
        <p className='opacity-70'>${rock.price}/day</p>
      </div>
      </Link>
    </section>
  ))
  return (
    <main className='flex flex-1'>
      <article className='py-2 px-8 max-w-3xl mx-auto flex flex-col'>
        <h1 className='text-3xl my-2 font-medium'>Your listed rockets</h1>
        <section>
          {rockets.length>0? rocketElements: (
            <h2>Loading...</h2>
          )}
        </section>
      </article> 
    </main>
  )
}

export default HostRocket