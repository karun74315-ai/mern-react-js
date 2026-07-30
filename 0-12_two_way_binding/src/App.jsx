import React, { useState } from 'react'

function App() {

  const [tile , settitle] = useState("")

  const submith = (e)=>{
    e.preventDefault()
    // console.log(onchange());
    settitle('')
    
    
  }
  return (
    <div>
      <form action="" onSubmit={(e)=>{
        submith(e)
      }}>
        <input type="text" 
        value={tile}
         placeholder ="  enter your name"
        onChange={(e)=>{
          settitle(e.target.value);
          
        }}  />
        
        <button> submit </button>
      </form>
    </div>
  )
}

export default App
