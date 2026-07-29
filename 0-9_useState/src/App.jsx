import React from 'react'
import { useState } from 'react'

function App() {
  const [a, setA] = useState(70)
  function changenum(){
    setA(30)
    
  }
  return (
    <div>
      <h1>the value of a is {a}</h1>
      <button onClick={changenum}>click me !!</button>
    </div>
  )
}

export default App
