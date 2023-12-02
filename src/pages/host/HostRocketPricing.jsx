import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostRocketPricing = () => {
  const {rocket} = useOutletContext()
  return (
    <h2 className='p-4 text-xl'><span className='font-bold'>${rocket.price}</span>/day</h2>
  )
}

export default HostRocketPricing