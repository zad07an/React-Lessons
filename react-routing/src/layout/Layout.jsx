import React from 'react'
import Navbar from '../components/ui/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}
