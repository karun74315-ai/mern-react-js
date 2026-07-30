import React from 'react'

function App() {
  const [num , setNum] = num({user:"Arun", age:20})
  const ab = ()=>{
    setNum(num+10)
  }
  return (
    <div>
      <button onClick={ab}>0</button>
    </div>
  )
}

export default App
