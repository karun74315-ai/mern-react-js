import React, { useState } from 'react'

function App() {
  const [num , setNum] = useState(0)
  function increasenum(){
  //  console.log("inc");
  setNum(num+1)
   

  }

   function decreasenum(){
    // console.log("dec");
    setNum(num-1)
    
  }

   function jump5(){
    setNum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increasenum}>increase</button>
      <button onClick={decreasenum}>decrease</button>
      <button onClick={jump5}>jump5</button>
    </div>
  )
}

export default App
