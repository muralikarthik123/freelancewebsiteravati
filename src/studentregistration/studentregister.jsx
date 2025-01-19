import React, { useState } from 'react';
import './studentregister.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    newPassword: '',
    mobileNumber: '',
    email:'',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleRegister = async () => {
    const { username, password, newPassword, mobileNumber, email } = formData;

    if (!username || !password || !newPassword || !mobileNumber || !email) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const data = new FormData();
      data.append('username', username);
      data.append('password', password);
      data.append('newPassword', newPassword);
      data.append('mobileNumber', mobileNumber);
      data.append('profilePicture', email);

      const response = await axios.post('http://127.0.0.1:5000/register', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Registration successful!');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const redirecting = () => {
    alert('Redirecting to Login page');
  };

  return (
    <div className='register'>
      {/* Left Side */}
      <div className='leftside'>
        <img className='img1' src='./img1.jpeg' alt='Career Vision' />
        <h1>Career Vision</h1>
        <p>Your Vision Your Career Your Future</p>
      </div>

      {/* Right Side */}

      <form className='rightside'>
        <h1>Register SignUp</h1>
        <p>Username:</p>
        <input
          className='inputs'
          type='text'
          name='username'
          placeholder='Enter username'
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <p>Password:</p>
        <input
          className='inputs'
          type='password'
          name='password'
          placeholder='Enter password'
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <p>New Password:</p>
        <input
          className='inputs'
          type='password'
          name='newPassword'
          placeholder='Enter new password'
          value={formData.newPassword}
          onChange={handleInputChange}
          required
        />
        <p>Mobile Number:</p>
        <input
          className='inputs'
          type='text'
          name='mobileNumber'
          placeholder='Enter Mobile Number'
          value={formData.mobileNumber}
          onChange={handleInputChange}
          required
        />
        <p>Email:</p>
        <input
          className='inputs'
          type='email'
          name='email'
          placeholder='Enter Email'
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <button className='loginbt1' onClick={handleRegister}>
          Register
        </button>
        <br />
        <Link to='/adminlogin'>
          <button onClick={redirecting} className='signupbt2'>
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}
