import React from 'react'
import './App.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Rockets, {loader as rocketsLoader} from './pages/Rockets'
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
import PageNotFound from './pages/PageNotFound'
import Error from './Error'
import Login from './pages/Login'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout /> }>
    <Route index element={<Home />}/>
    <Route path='about' element={<About />}/>
    <Route path='login' element={<Login />}/>
    <Route path='rockets' element={<Rockets />} errorElement={<Error />} loader={rocketsLoader}/>
    <Route path='rockets/:id' element={<RocketDetail />}/>

    <Route path='host' element={<HostLayout />}>
      <Route index element={<Dashboard />}/>    
      <Route path='income' element={<Income />}/>
      <Route path='reviews' element={<Reviews />}/>
      <Route path='rockets' element={<HostRocket />} />
      <Route path='rockets/:id' element={<HostRocketDetail />}>
        <Route index element={<HostRocketDetails />}/>
        <Route path='pricing' element={<HostRocketPricing />}/>
        <Route path='photos' element={<HostRocktePhotos />}/>
      </Route>
    </Route> 
    <Route path='*' element={<PageNotFound />} />
  </Route>
))

const App = () => {
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App