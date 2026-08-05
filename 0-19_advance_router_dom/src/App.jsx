import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Notfound from './pages/Notfound'
import Footer from './components/Footer'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import Cdetail from './pages/Cdetail'

function App() {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
       < Route path='/' element={<Home />} />
       < Route path='/about' element={<About />} >
       <Route path='men' element={<Men />} />
       <Route path='women' element={<Women />} />
        </Route>
       < Route path='/contact' element={<Contact />} />
       <Route path='/courses' element={<Courses />} />
       <Route path='/courses/:id' element={<Cdetail />} />

       <Route path = '*' element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
