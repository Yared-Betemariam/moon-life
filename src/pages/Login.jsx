import React, { useState } from 'react'

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({email: '', passwork: ''})

  function handleSubmit(e){
    e.preventDefault()
  }
  function handleChange(e){
    const {value, name} = e.target
    setLoginFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  return (
    <main className='flex flex-1'>
      <article className='max-w-3xl mx-auto w-full flex flex-col p-6'>
        <h1 className='text-2xl my-4 tracking-tight text-center'>Sign in to your account</h1>
        <form className='flex flex-col p-4' onSubmit={handleSubmit}>
          <input className='rounded-md my-2 text-sky-900 px-4 py-2 text-lg' name='email' onChange={handleChange} placeholder='johnDiggle@gmail.com' value={loginFormData.email} type="text" required/>
          <input type="password"  className='rounded-md my-2 text-sky-900 px-4 py-2 text-lg' name='password' onChange={handleChange} placeholder='sldjfawofjj203j' value={loginFormData.password} required/>
          <button className='bg-sky-800 py-2 rounded-md my-4 text-lg font-medium'>Login</button>
        </form>
      </article>
    </main>
  )
}

export default Login