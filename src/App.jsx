import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  const time = new Date()
  return (
    <BrowserRouter>
      <header className='h-14 bg-sky-900 p-4 flex justify-between items-center px-6'>
        <Link className='font-bold text-white' to='/' >{"(MOONLIFE)"}</Link>
        <nav className='text-white flex gap-4 items-center'>
          <Link to='/about'>About</Link>
          <Link>Our Rockets</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <footer className='h-14 bg-neutral-700 p-4  text-neutral-300 bottom-0 left-0 right-0'>
        <p>&copy; {time.getFullYear()} (MOONLIFE)</p>
      </footer>
    </BrowserRouter>
  )
}

export default App