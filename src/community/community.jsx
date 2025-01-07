import React,{useEffect,useState} from 'react'
import './community.css'
import axios from 'axios';
export default function Cource() {
    const [data,setData]=useState([]);
    useEffect(
        ()=>{axios.get('https://jsonplaceholder.typicode.com/users').then
        (responce =>{setData(responce.data)})
    },[])

  return (
    <div className='community'>
      <h1>Community Form</h1>
      <div className='line'></div>
      {data.map( item=>
        <div className='box' key={item.id}>
        <h2>Accenture Job Tip</h2>
        <p>Requested By:{item.name}</p> 
        <a href='https://jsonplaceholder.typicode.com/users'><button className='bt1'>Join Discussion</button></a>
        <p></p>
        </div>)}
        <br/>
    </div>
  )
}
