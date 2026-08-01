import React from 'react'

function App() {
              // localStorage.setItem('age','18')
//  const user = localStorage.getItem("name")
//  const age = localStorage.getItem('age')
//  console.log(user);
//  console.log(age)

//  const userr = {
//   namee : "arun",
//   umar : 9,
//   city : "hp" 
//  }
 localStorage.setItem('user', JSON.stringify(userr))

  const userr = JSON.parse(localStorage.getItem('user'))

  console.log(userr);
  
 
  return (
    <div>
      
    </div>
  )
}

export default App
