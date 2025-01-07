import React from 'react'
import Home from './Home/home.jsx'
import Login from './login/login.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './registration/register.jsx'
import Cource from './cource/cource.jsx'
import Community from './community/community.jsx'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/cource' element={<Cource/>}/>
          <Route path='/community' element={<Community/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
