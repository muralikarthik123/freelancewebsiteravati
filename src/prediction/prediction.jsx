import React from 'react'
import './predicition.css'
export default function prediction() {
  return (
    <div className='predicition'>
      {/*heading*/}
      <h1>Model Predicition</h1>
      {/*buttons*/}
      <br/>
      <p>The Model Prediction avaliable are :</p>
      <a href='https://www.geeksforgeeks.org/web-development/'><button className='bts'>Web Development</button></a>
      <a href='https://www.w3schools.com/datascience/' ><button className='bts'>Data Science</button></a>
      <a href='https://www.geeksforgeeks.org/machine-learning/' ><button className='bts'>Machine Learning</button></a>
      <a href='https://www.w3schools.com/ai/ai_whatis.asp' ><button className='bts'>Artificial Intelligence</button></a>
    </div>
  )
}
