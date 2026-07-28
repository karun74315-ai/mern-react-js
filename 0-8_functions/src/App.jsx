import React from 'react'

function App() {
  function inputchanging(val){
    console.log(val);
    
  }
  
  const pageScroll = ()=>{
console.log("scrolling .....");

  }
  return (
    // <div>
    //   <h1>Hello Arun</h1>
    //   <button onClick={()=>{
    //     console.log("hey");
        
    //   }}>change user</button>

    //   <input onChange={(elem)=>{
    //     inputchanging(elem.target.value)
        
    //   }} 
    //   type="text" placeholder='name' />

    //   <div onMouseMove={(elem)=>{
    //    console.log(elem.clientY);
       
    //   }} 
    //   id="box">
    //   </div>
    // </div>


    <div onWheel={pageScroll}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App
