import React from 'react'
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();

  return (
    <div>
      <button
      onClick={()=>{
        navigate('/');
      
      }}
       className='bg-red-400 px-5 py-2 
      rounded m-2 cursor-pointer'>
        Return to home page
        </button>

         <button
      onClick={()=>{
        navigate(-1);
      
      }}
       className='bg-red-400 px-5 py-2 
      rounded m-2 cursor-pointer'>
        back
        </button>
      <h2>Contact Us</h2>
    </div>
  )
}

export default Contact
