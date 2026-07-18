import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    
   <div className="parent">
   
   <Card user = 'Arun' age = {25} />
      <Card user = 'Priya' age = {30} />



   </div>
    
  )
}

export default App;