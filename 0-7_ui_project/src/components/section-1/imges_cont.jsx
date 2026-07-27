import React from 'react'
import Cardr from './rightcard'
function Images(props) {
  return (
    <div id='rightc' className='h-full w-2/3    gap-2.5 flex flex-nowrap overflow-x-auto rounded-4xl'>
      {props.user.map(function(elem){
       return <Cardr img = {elem.img} tag = {elem.tag}/>
      })}
      
      
    </div>
  )
}

export default Images
