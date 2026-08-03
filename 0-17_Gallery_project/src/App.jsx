import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Page from './components/page'

function App() {

  const [userdata, setuserdata] = useState([])
  const [index, setindex] = useState(1)

  const getdata = async ()=>{
    const response =  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    setuserdata(response.data)
    console.log(response.data); 
    
  }
  
  useEffect(()=>{
    getdata()
  },[index])

  let printuserdata = <h3 className='text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Loading...!!!</h3>
  if(userdata.length>0){
    printuserdata = userdata.map(function(elem ,idx){
      return <div key={idx} >
                   

       <Page elem={elem} />
      </div>
    })
  }
  return (
    <div className = 'bg-black h-screen text-white p-5 overflow-auto'>
      
       <div className = ' mt-5 flex flex-wrap gap-5'>
          {
            printuserdata
          }
       </div>
    <div className='flex justify-center items-center gap-5 p-5'>
      <button
      onClick={()=>{
       if(index>1){
        setindex(index-1)
        setuserdata([])
       }
      }}
       className='bg-green-600 active:scale-105 px-5 py-2 text-white rounded'>Previous</button>
      <button
      onClick={()=>{
        setindex(index+1)
        setuserdata([])
      }}
       className='bg-green-600 active:scale-105 px-5 py-2 text-white rounded'>Next</button>
      </div>   
    </div>
  )
}

export default App
