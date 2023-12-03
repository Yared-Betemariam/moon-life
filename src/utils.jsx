import React from 'react'
import {redirect} from 'react-router-dom'

export async function requireAuth(request){
  const isLogged = localStorage.getItem('loggedin')


  const pathname = new URL(request.url).pathname

  if(!isLogged){
    throw redirect('/login?message=You must log in first&redirectTo=' + pathname)
  }
  return null
}
