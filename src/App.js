import React from 'react'
import Home from './Home/home.jsx'
import Login from './login/login.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './registration/register.jsx'
import Tabs from './tabs/tabs.jsx'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/tabs' element={<Tabs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
