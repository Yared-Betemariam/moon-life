import React from 'react'
import './App.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Rockets, {loader as rocketsLoader} from './pages/Rockets'
import RocketDetail, {loader as RocketDetailLoader} from './pages/RocketDetail'
import Layout from './components/Layout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostLayout from './components/HostLayout'
import HostRocket, {loader as HostRocketLoader} from './pages/host/HostRocket'
import HostRocketDetail, {loader as HostRocketDetailLoader} from './pages/host/HostRocketDetail'
import HostRocketPricing from './pages/host/HostRocketPricing'
import HostRocktePhotos from './pages/host/HostRocktePhotos'
import HostRocketDetails from './pages/host/HostRocketDetails'
import PageNotFound from './pages/PageNotFound'
import Error from './Error'
import Login, {loader as loginLoader} from './pages/Login'
import { requireAuth } from './utils'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout /> }>
    <Route index element={<Home />}/>
    <Route path='about' element={<About />}/>
    <Route path='login' element={<Login />} loader={loginLoader}/>
    <Route path='rockets' element={<Rockets />} errorElement={<Error />} loader={rocketsLoader}/>
    <Route path='rockets/:id' element={<RocketDetail />} loader={RocketDetailLoader}/>

    <Route path='host' element={<HostLayout />}>
      <Route index element={<Dashboard />} loader={async () => await requireAuth()}/>    
      <Route path='income' element={<Income />} loader={async () => await requireAuth()}/>
      <Route path='reviews' element={<Reviews />} loader={async () => await requireAuth()}/>
      <Route path='rockets' element={<HostRocket />} loader={HostRocketLoader}/>
      <Route path='rockets/:id' element={<HostRocketDetail />} loader={HostRocketDetailLoader}>
        <Route index element={<HostRocketDetails />} loader={async () => await requireAuth()}/>
        <Route path='pricing' element={<HostRocketPricing />} loader={async () => await requireAuth()}/>
        <Route path='photos' element={<HostRocktePhotos />} loader={async () => await requireAuth()}/>
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