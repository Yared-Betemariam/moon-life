import React, { useState } from 'react'
import { useLoaderData, Form, useNavigate, redirect, useActionData, useNavigation } from 'react-router-dom'
import {loginUser} from '../api'


export async function loader({request}) {
  const final = new URL(request.url).searchParams.get('message')
  return final
}
localStorage.removeItem('loggedin')

export async function action({ request }) {
  const form = await request.formData()
  const email = await form.get("email")
  const password = await form.get("password")

  const pathname = new URL(request.url).searchParams.get('redirectTo')
  console.log(pathname) || '/host';

  try{
    const data = await loginUser({email, password})
    localStorage.setItem('loggedin', true)
    return redirect(pathname)
  }catch(err){
    return err
  }

}

const Login = () => {
  const message = useLoaderData()
  /* const [status, setStatus] = useState('idle') */
  const navigation = useNavigation()
  /* const [error, setError] = useState(null) */
  const error = useActionData()
  
  
  return (
    <main className='flex flex-1'>
      <article className='max-w-3xl mx-auto w-full flex flex-col p-6'>
        <h1 className='text-2xl my-4 tracking-tight text-center font-bold'>Sign in to your account</h1>
        {message && <h2 className='text-red-500 text-center text-xl font-medium opacity-85'>{message}</h2>}
        {error && <h2 className='text-red-500 text-center text-md tracking-tight opacity-85'>{error.message}</h2>}
        <Form replace method='post' className='flex flex-col p-4'>
          <input className='rounded-md my-2 text-sky-900 px-4 py-2 text-lg' name='email'  placeholder='johnDiggle@gmail.com' type="text" required/>
          <input type="password"  className='rounded-md my-2 text-sky-900 px-4 py-2 text-lg' name='password' placeholder='sldjfawofjj203j' required/>
          <button className='bg-sky-800 py-2 rounded-md my-4 text-lg font-medium' disabled={navigation.state === 'submitting'}>{navigation.state === 'submitting'? 'Logging in...': 'Login'}</button>
        </Form>
      </article>
    </main>
  )
}

export default Login