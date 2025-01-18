import React from 'react';
import './cources.css'; // Ensure the CSS file name matches
import Data from '../data1.json';

export default function Course() {
  return (
    <div className='cources'>
      <h1>Select Course</h1>
      <div className='line'></div>
      {Data.map((item) => (
        <div className='box' key={item.id}>
          <a href={item.link} className='box1' style={{color:'black'}}><div >
            <h2>{item.cource}</h2>
          </div></a>
        </div>
      ))}
      <br/>
    </div>
  );
}
