import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    newPassword: '',
    mobileNumber: '',
    profilePicture: null, // File upload
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleRegister = async () => {
    const { username, password, newPassword, mobileNumber, profilePicture } = formData;

    if (!username || !password || !newPassword || !mobileNumber || !profilePicture) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const data = new FormData();
      data.append('username', username);
      data.append('password', password);
      data.append('newPassword', newPassword);
      data.append('mobileNumber', mobileNumber);
      data.append('profilePicture', profilePicture);

      const response = await axios.post('http://your-backend-api-url/register', data, {
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
        <h1>SignUp</h1>
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
        <p>Profile Picture:</p>
        <input
          className='inputfile'
          type='file'
          name='profilePicture'
          onChange={handleFileChange}
          required
        />
        <br />
        <br />
        <button className='loginbt1' onClick={handleRegister}>
          Register
        </button>
        <br />
        <Link to='/'>
          <button onClick={redirecting} className='signupbt2'>
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}
