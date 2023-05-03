import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Contact() {

  const {state} = useLocation();

  return (
    <div>{state}. The Contact Page</div>
  )
}
