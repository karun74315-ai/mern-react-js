import React, { useState } from 'react'

function App() {
   
  const [title, settitle] = useState('')

  const [detail, setdetail] = useState('')

  const [task, settask] = useState([])

    const submithandler = (e)=>{
    e.preventDefault()

    const copytask = [...task];
    copytask.push({title,detail})
    settask(copytask)
    console.log(copytask);
    
  
    settitle('')
    setdetail('')
  }

  return (
    <div className='h-screen lg:flex bg-black text-white ' >
      
      <form onSubmit={()=>{
           submithandler(e)
      }} action="" className=' flex  lg:w-1/2 items-start  gap-4 p-10  font-medium flex-col  '>
              <h1 className='text-3xl font-bold'>Add Notes</h1>

      {/* pehla input */}

        <input type="text" 
      placeholder='enter notes heading' 
      className='px-5 w-full py-2 border-2 outline-none rounded '
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      
      {/* detailed input */}

      <textarea placeholder='write details ' 
      className='px-5  h-32 py-2 border-2 outline-none rounded w-full'
      
      value={detail}
      onChange={(e)=>{
        setdetail(e.target.value)
      }}
      />

      <button className='bg-white  text-black px-5 py-2 border-2 
      outline-none rounded w-full active:bg-amber-500'>Add notes</button>
      
      {/* <img className='  h-52' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtj0b7BdjLx2TC6vb6RsQUBba8gdXLbqJJGV3PNsDvTQ&s=10" alt="" /> */}
      </form>
      <div className=' p-10  lg:w-1/2 border-l-2  '>
      <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 h-full mt-5 overflow-auto'>
         <div className='h-52 w-40 rounded-2xl bg-white'></div>
     
          
        </div>

      </div>
    </div>
  )
}

export default App
