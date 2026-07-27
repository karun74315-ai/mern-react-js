import React from 'react'
import Rcont from './rightcardcontent'

function Cardr() {
  return (
    <div className=' h-full w-80  rounded-4xl overflow-hidden relative '>
      <img  className=' h-full w-full object-cover'
      src="https://images.unsplash.com/photo-1752856408620-2e6fc6ac072f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D"
       alt="" />
       <Rcont />
    </div>
  )
}

export default Cardr
