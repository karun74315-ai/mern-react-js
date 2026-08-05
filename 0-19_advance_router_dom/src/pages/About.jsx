import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <div className='flex justify-center gap-4 py-4 font-bold'>
        <Link to='/about/men'>MEN</Link>
        <Link to='/about/women'>WOMEN</Link>

      </div>
      
      <Outlet />
    </div>
  )
}

export default About
