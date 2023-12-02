import React, { useEffect, useState } from 'react'
import { Link, NavLink, useSearchParams } from 'react-router-dom'
import Data from '../../data/Data'

const Rockets = () => {
  const [rockets, setRockets] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const typeFilter = searchParams.get('type')
  console.log(typeFilter);

  useEffect(() => {
    const fetchData = async () => {
      /* const res = await fetch('http://localhost:3500/rockets');
      const resJson = await res.json() */
      
    }
    /* fetchData() */
    setRockets(Data.rockets)
  },[])

  const toDisplayRockets = typeFilter? rockets.filter(rock => rock.type.toLowerCase() === typeFilter): rockets
  

  function handleFilter(key, value){
    setSearchParams(prev => {
      if(value === null){
        prev.delete(key)
      }else {
        prev.set(key, value)
      }
      return prev
    })
  }

  const rocketElements = toDisplayRockets.map(rock => (
    <section key={rock.id} className='p-2 hover:opacity-80 hover:bg-gray-700 transition-all duration-200 rounded-md flex flex-col max-w-[228px]'>
      <Link to={`${rock.id}`} state={{search: searchParams.toString() ,type: typeFilter}}>
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
      <article className='max-w-3xl  mx-auto'>
        <section className='flex justify-between items-center py-1 px-8 my-2'>
          <button className={`${typeFilter == 'simple'?'bg-white text-gray-900': 'border border-solid border-white'} rounded-sm px-4 py-1`} onClick={() => handleFilter("type", "simple")}>Simple</button>
          <button className={`${typeFilter == 'rugged'?'bg-white text-gray-900': 'border border-solid border-white'} rounded-sm px-4 py-1`}  onClick={() => handleFilter("type", "rugged")}>Rugged</button>
          <button className={`${typeFilter == 'luxury'?'bg-white text-gray-900': 'border border-solid border-white'} rounded-sm px-4 py-1`}  onClick={() => handleFilter("type", "luxury")}>Luxury</button>
          {typeFilter && <button className={`${typeFilter == ''?'bg-white': 'border border-solid text-gray-900 bg-white  border-white'} rounded-sm px-4 py-1`}  onClick={() => handleFilter("type", null)}>Clear</button>}
        </section>
        <section className='gap-1 flex  flex-wrap'>
          {rocketElements}
        </section>  
      </article>
    </main>
  )
}

export default Rockets