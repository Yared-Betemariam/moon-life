import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Rockets from './pages/Rockets'

const App = () => {
  const time = new Date()
  return (
    <BrowserRouter>
      <header className='h-14 shadow-2xl bg-gray-800 '>
        <section className='max-w-3xl p-4 flex justify-between items-center px-8 mx-auto'>
          <Link className='font-extrabold tracking-tighter text-white' to='/' >{"(MOONLIFE)"}</Link>
          <nav className='text-white flex gap-4 items-center'>
            <Link to='/about'>About</Link>
            <Link to='/rockets'>Our Rockets</Link>
          </nav>
        </section>
      </header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/rockets' element={<Rockets />}/>
      </Routes>
      <footer className='h-12 bg-neutral-800 flex items-center justify-center text-center p-4  text-neutral-500  text-sm bottom-0 left-0 right-0'>
        <p>&copy; {time.getFullYear()} (MOONLIFE)</p>
      </footer>
    </BrowserRouter>
  )
}

export default App