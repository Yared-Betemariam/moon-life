import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Rockets = () => {
  const [rockets, setRockets] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3500/rockets');
      const resJson = await res.json()
      setRockets(resJson)
    }
    fetchData()
  },[])

  const rocketElements = rockets.map(rock => (
    <section key={rock.id} className='p-2 hover:opacity-80 hover:bg-gray-700 transition-all duration-200 rounded-md flex flex-col max-w-[228px]'>
      <Link to={`/rockets/${rock.id}`}>
      <img src={rock.img} className='w-full rounded-xl' alt="" />
      <div className='my-4 text-xl font-medium'>
        <h3>{rock.name}</h3>
        <p className='opacity-70'>${rock.price}/day</p>
      </div>
      <i className='bg-sky-700 w-32 p-2 rounded-md'>{rock.type}</i>
      </Link>
    </section>
  ))
  return (
    <main className='flex-1 p-4 text-white'>
      <h1 className='text-2xl font-medium text-center my-2 mb-6'>Our Rockets</h1>
      <article className='max-w-3xl gap-1 flex  flex-wrap mx-auto'>
        {rocketElements}
      </article>
    </main>
  )
}

export default Rockets