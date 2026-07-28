import React from 'react'

function App() {
  const btnClicked = ()=>{
     console.log("hello");
     
  }
  return (
    <div>
      <h1>Hello Arun</h1>
      <button onClick={btnClicked}>change user</button>
    </div>
  )
}

export default App
