import React from 'react'

function App() {
  const getdata = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data);
    
  }
  return (
    <div>
      <button onClick={()=>{
        getdata()
      }}> Get Data </button>
      
    </div>
  )
}

export default App
