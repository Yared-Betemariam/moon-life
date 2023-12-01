import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Rockets from './pages/Rockets'
import RocketDetail from './pages/RocketDetail'
import Layout from './components/Layout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/income'
import Reviews from './pages/host/Reviews'
import HostLayout from './components/HostLayout'

const App = () => {
  const time = new Date()
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout /> }>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/rockets' element={<Rockets />}/>
          <Route path='/rockets/:id' element={<RocketDetail />}/>
          <Route path='/host' element={<HostLayout />}>
            <Route path='/host' element={<Dashboard />}/> 
            <Route path='/host/income' element={<Income />}/>
            <Route path='/host/reviews' element={<Reviews />}/>
          </Route>
          
        </Route>
      </Routes>
      <footer className='h-12 bg-neutral-800 flex items-center justify-center text-center p-4  text-neutral-500  text-sm bottom-0 left-0 right-0'>
        <p>&copy; {time.getFullYear()} (MOONLIFE)</p>
      </footer>
    </BrowserRouter>
  )
}

export default App