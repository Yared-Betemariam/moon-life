import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <main className='flex flex-1'>
      <article className='max-w-4xl w-full mx-auto p-8'>

        <h1 className=' tracking-tight font-semibold text-3xl'>Page not found</h1>
        <p className='my-4 tracking-tight font-medium text-xl'>Sorry the page you are looking for doesn't exist.</p>
        <Link className='bg-sky-700 p-4 py-2 rounded-md' to='/'>Back to home</Link>
      </article>
    </main>
  )
}

export default PageNotFound