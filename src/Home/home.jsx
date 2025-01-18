import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'
export default function home() {
  return (
    <div className='home'>
        {/*header*/}
      <div className='header'>
        <h1>Carrer<span style={{color:'hsl(38,92%,50%)'}}>Vison</span></h1>
        <ul>
            <li><Link to='/adminlogin' style={{color:'hsl(38,92%,50%)',textDecoration:'none'}}>AdminLogin</Link></li>
            <li><Link to='/studentlogin' style={{color:'hsl(38,92%,50%)',textDecoration:'none'}}>StundentLogin</Link></li>
        </ul>
      </div>

      {/*content*/}
      <div className='content'>
        <div className='left'>
            <h1>Welcome to <span style={{color:'hsl(38,92%,50%)'}}>Carrer Vision</span></h1>
            <p>Career Vision is an AI-powered career guidance system designed to help students identify personalized career paths, improve their skills, and achieve their professional goals.</p>
            <br/>
            <button className='bt1'>Get Started</button>
        </div>
        <div className='right'>
            <img className='img2' src='./img2.jpeg' alt=''/>
            <h1>Carrer Vision</h1>
        </div>
      </div>
    </div>
  )
}
