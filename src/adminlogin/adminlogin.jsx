import React, { useState } from 'react';
import './adminlogin.css';
import { MdCancel } from "react-icons/md";
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function Login() {
   
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {
        username,
        password,
      });

      if (response.status === 200) {
        alert('Login successful!');
        console.log(response.data); // Log the response for debugging
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className='login'>
      {/* Left side */}
      <div className='leftside'>
        <img className='img1' src='./img1.jpeg' alt='no' />
        <h1>Career Vision</h1>
        <p>Your Vision Your Career Your Future</p>
      </div>

      {/* Right side admin login */}
      <div className='rightside'>
        <MdCancel className='icon' />
        <h1>Admin Login</h1>

        <form onSubmit={handleSubmit}>
          <p>Username:</p>
          <input
            className='inputs'
            type='text'
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>Password:</p>
          <input
            className='inputs'
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className='forgotpass'>Forgot Password?</p>
          <Link to='/tabs'><button className='loginbt1' type='submit'>
            Login
          </button></Link>
        </form>
        <br />
      </div>
    </div>
  );
}
