import React from 'react'
import Lefttext from './lefttext'
import Images from './imges_cont'
function Center() {
  return (
    <div className='py-10 px-18 bg-amber-500 h-[90vh] w-full
     flex items-center gap-10 justify-between'>
      <Lefttext />
      <Images />
      
    </div>
  )
}

export default Center
