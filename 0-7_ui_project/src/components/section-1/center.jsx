import React from 'react'
import Lefttext from './lefttext'
import Images from './imges_cont'
function Center(props) {
  return (
    <div className='py-10 px-18 h-[90vh] w-full
     flex items-center gap-10 justify-between'>
      <Lefttext />
      <Images user ={props.user}/>
      
    </div>
  )
}

export default Center
