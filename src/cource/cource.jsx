import React,{useEffect,useState} from 'react'
import './cource.css'
import axios from 'axios';
export default function Cource() {
    const [data,setData]=useState([]);
    useEffect(
        ()=>{axios.get('https://jsonplaceholder.typicode.com/users').then
        (responce =>{setData(responce.data)})
    },[])

  return (
    <div className='cource'>
      <h1>Cource Request</h1>
      <div className='line'></div>
      {data.map( item=>
        <div className='box' key={item.id}>
        <h2>Introduction to AI</h2>
        <p>Requested By:{item.name}</p> 
        <p>Status:{item.username}</p>   
        <button className='bt1'>Approve</button>
        <button className='bt2'>Decline</button>
        <p></p>
        </div>)}
        <br/>
    </div>
  )
}
