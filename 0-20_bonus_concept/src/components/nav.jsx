import React from 'react'

function Nav(props) {

    
    
    
  return (
    <div>
      
      <button 
      onClick={
        ()=>{
          props.setTheme('dark')
        }
      }>change theme</button>
    </div>
  )
}

export default Nav
