import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostRocktePhotos = () => {
  const {rocket} = useOutletContext()
  return (
    <img className='mx-4 mt-4 rounded-xl w-1/4' src={rocket.img} alt="" />
  )
}

export default HostRocktePhotos 