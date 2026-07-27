import React from 'react'
import Navbar from './navbar'
import Center from './center'
const Section_1 = (props) => {
  console.log(props)
  return (
    <div className='h-screen w-full '>
      <Navbar />
      <Center user= {props.user} />
    </div>
  )
}

export default Section_1
