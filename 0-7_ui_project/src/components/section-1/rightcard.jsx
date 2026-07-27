import React from 'react'
import Rcont from './rightcardcontent'

function Cardr(props) {
  return (
    <div  className=' h-full w-80  shrink-0 rounded-4xl overflow-hidden relative '>
      <img  className=' h-full w-full object-cover' src={props.img} alt='jii' />
      <Rcont tag = {props.tag}/>
    </div>
  )
}

export default Cardr
