import React from 'react'
import Home from './Home/home.jsx'
import AdminLogin from './adminlogin/adminlogin.jsx'
import StudentLogin from './studentlogin/studentlogin.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './studentregistration/studentregister.jsx'
import Tabs from './tabs/tabs.jsx'
import StudentTabs from './studenttabs/studenttabs.jsx'
import Cource from './cource/cource.jsx'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/studentlogin' element={<StudentLogin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/tabs' element={<Tabs/>}/>
          <Route path='/studenttabs' element={<StudentTabs/>}/>
          <Route path='/cource' element={<Cource/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
