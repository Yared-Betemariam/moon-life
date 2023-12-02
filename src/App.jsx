import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Rockets from './pages/Rockets'
import RocketDetail from './pages/RocketDetail'
import Layout from './components/Layout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostLayout from './components/HostLayout'
import HostRocket from './pages/host/HostRocket'
import HostRocketDetail from './pages/host/HostRocketDetail'
import HostRocketPricing from './pages/host/HostRocketPricing'
import HostRocktePhotos from './pages/host/HostRocktePhotos'
import HostRocketDetails from './pages/host/HostRocketDetails'

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout /> }>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='rockets' element={<Rockets />}/>
          <Route path='rockets/:id' element={<RocketDetail />}/>

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />}/>    
            <Route path='income' element={<Income />}/>
            <Route path='reviews' element={<Reviews />}/>
            <Route path='rockets' element={<HostRocket />}/>
            <Route path='rockets/:id' element={<HostRocketDetail />}>
              <Route index element={<HostRocketDetails />}/>
              <Route path='pricing' element={<HostRocketPricing />}/>
              <Route path='photos' element={<HostRocktePhotos />}/>
            </Route>
          </Route> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App