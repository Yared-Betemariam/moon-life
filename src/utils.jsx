import React from 'react'
import {redirect} from 'react-router-dom'

export async function requireAuth(){
  const isLogged = false

  if(!isLogged){
    throw redirect('/login?message=You must login first')
  }
  
}
