import React from 'react'
import { useState } from 'react';
import Nav from './components/nav';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div>
      <h1>theme is {theme}</h1>
      <Nav theme = {theme} setTheme = {setTheme} />
    </div>
  )
}

export default App
