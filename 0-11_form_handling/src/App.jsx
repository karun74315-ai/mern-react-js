import React from 'react'

function App() {

  const submith = (e)=>{
    e.preventDefault()
    console.log();
    
    
  }
  return (
    <div>
      <form action="" onSubmit={(e)=>{
        submith(e)
      }}>
        <input type="text" name="" placeholder ="  enter your name"id="" />
        
        <button> submit </button>
      </form>
    </div>
  )
}

export default App
