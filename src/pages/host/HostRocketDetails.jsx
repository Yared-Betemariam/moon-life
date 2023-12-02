import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostRocketDetails = () => {
  const {rocket} = useOutletContext()
  return (
    <div className='p-4'>
      <h3 className='mb-2 text-sm font-medium'>Name: <span className=' font-light opacity-70'>{rocket.name}</span></h3>
      <h3 className='mb-2 text-sm font-medium'>Catogory: <span className=' font-light opacity-70'>{rocket.type}</span></h3>
      <h3 className='mb-2 text-sm font-medium'>Description: <span className=' font-light opacity-70'>{rocket.desc}</span></h3>
      <h3 className='mb-2 text-sm font-medium'>Visibility: <span className=' font-light opacity-70'>public</span></h3>
      
    </div>
  )
}

export default HostRocketDetails