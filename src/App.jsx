import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to='/' >{"(MOONLIGE)"}</Link>
        <nav>
          <Link to='/about'>About</Link>
          <Link>Our Rockets</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App