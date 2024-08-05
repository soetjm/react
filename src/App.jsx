import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
import Whoweare from './Whoweare'
import Contact from './Contactas'
import Service from './Service'
const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<Whoweare/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/service' element={<Service/>} />
       </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App