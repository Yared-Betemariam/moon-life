import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Data from '../../data/Data'

const RocketDetail = () => {
  const params = useParams()
  const [rocket, setRocket] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      /* const res = await fetch('http://localhost:3500/rockets');
      const resJson = await res.json() */  
    }
    /* fetchData() */
    const Rock = ((Data.rockets).filter(rock => rock.id == params.id))[0]
    setRocket(Rock)
  },[params.id])

  const backLinker = location.state?.search || '..'
  const backLinkerType = location.state?.type || '..'

  return (
    <main className='flex flex-1 text-white'>
      {rocket ? 
        <section className='flex max-w-3xl mx-auto flex-col p-6 '>
          <Link className='my-2 tracking-tight underline font-medium' relative='path' to={'../?'+backLinker}>&lt; Back to {backLinkerType[0].toUpperCase() + backLinkerType.slice(1)} Rockets</Link>
          <img className='w-1/2 rounded-xl mt-2 mb-4' src={rocket.img} alt="" />
          <i className='bg-red-400 rounded-md py-2 p-4'>{rocket.type}</i>
          <h1 className='text-xl font-semibold mt-4'>{rocket.name}</h1>
          <p>{rocket.price}/day</p>
          <p className='font-medium text-sm my-4'>{rocket.desc}</p>
          <button className='bg-sky-500 w-32 rounded-md py-2'>Rent this</button>
        </section>
      : <h2>Loading..</h2>}
    </main>  
  )
}

export default RocketDetail