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

      {/*container 2*/}
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

    {/*container 2*/}
    <div className='c2'>
      <h1>Why to choose CarrerVision?</h1>
      <br/>
      <div className='boxes'>
      <div className='bx1'>
          <h2>Inovative Technology</h2>
          <p>Our cutting-edge technology provides you with the most advanced tools in the industry.</p>
      </div>
      {/*box2*/}
      <div className='bx2'>
          <h2>Expert Support</h2>
          <p>Our team of experts is always ready to assist you, ensuring your success every step of the way.</p>
      </div>

      {/*box3*/}
      <div className='bx3'>
          <h2>Proven Results</h2>
          <p>Join thousands of satisfied customers who have achieved their goals with CareerVision.</p>
      </div>
      </div>
      <br/>
    </div>

    {/*conatiner 3*/}
    <div className='c3'>  
      <h1>Ready to Begin Your Journey?</h1>
      <p>Join our community today and take the first step towards your bright future!</p>
      <button className='signup'>Sign Up Now</button>
    </div>

    {/*container 4*/}
    <div className='c2'>
      <h1>Our Team Members</h1>
      <br/>
      <div className='boxes'>
      <div className='bx1'>
          <h2>Team Lead</h2>
          <p style={{textAlign:'center'}}>Rahul.</p>
      </div>
      {/*box2*/}
      <div className='bx2'>
          <h2>Team Memeber-1</h2>
          <p style={{textAlign:'center'}}>Raju.</p>
      </div>

      {/*box3*/}
      <div className='bx3'>
          <h2>Team Memeber-2</h2>
          <p style={{textAlign:'center'}}>Ramesh.</p>
      </div>

      {/*box4*/}
      <div className='bx3'>
          <h2>Team Memeber-3</h2>
          <p style={{textAlign:'center'}}>Rajesh.</p>
      </div>

      </div>
      <br/>
    </div>
    <hr/>
    {/*footer*/}
    <div className='footer'>
      <ul>
        <li>
          <h1>About Us</h1>
          <p>We are dedicated to providing the best service to our customers, with innovative solutions and unparalleled support.</p>
        </li>

        <li>
          <h1>Quick Link</h1>
          <p>Terms of services.</p>
          <p>Privacy and Policy.</p>
          <p>FAQ.</p>
        </li>

        <li>
          <h1>Contact us</h1>
          <p>Email:careervision@gmail.com.</p>
          <p>Phone:914423344218</p>
        </li>
      </ul>
    </div>
    </div>
  )
}
