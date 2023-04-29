import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/ui/Navbar'
import Shop from './pages/Shop'
import About from './pages/About'
import Blogs from './pages/Blogs'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/blogs' element={<Blogs/>} />
      </Routes>
    </div>
  )
}
