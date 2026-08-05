import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center py-4 px-8 bg-gray-800'>
      <h3 className='text-xl font-bold'>Sunny</h3>
      <div className='flex gap-4'>
       <Link className='text-lg font-bold' to='/'>Home</Link>
       <Link className='text-lg font-bold' to='/about'>About</Link>
       <Link className='text-lg font-bold' to='/contact'>Contact</Link>
       <Link className='text-lg font-bold' to='/courses'>Courses</Link>
      </div>
    </div>
  )
}

export default Navbar
