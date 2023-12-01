import React from 'react'

const Footer = () => {
  const time = new Date()
  return (
    <footer className='h-12 bg-neutral-800 flex items-center justify-center text-center p-4  text-neutral-400 font-medium text-sm bottom-0 left-0 right-0'>
        <p>&copy; {time.getFullYear()} (MOONLIFE)</p>
      </footer>
  )
}

export default Footer