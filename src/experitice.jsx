import React,{useState} from 'react'
import './expertice.css'
export default function Experitice() {
  const[gap,setGap]=useState('')
  const[skills,setskills]=useState('')
  const [Error,setError]=useState('')
  const open=(e)=>{
    setGap(e.target.value)
  }
  const open1=(e)=>{
    setskills(e.target.value)
  }
  const submiting=(e)=>{
    e.preventDefault()
    if(skills.length===0 || gap.length===0){
      setError('This Input feild is required')
    }
    else{
      console.log(gap)
      console.log(skills)
      setGap('')
      setskills('')
      setError('')
    }
  }

  return (
    <div className='expertice'>
      <form className='forms'>
        <p className='name'>Education Qualification</p>
        <select className='textbox1'>
          <option>Select</option>
          <option>B.tech</option>
          <option>Degree</option>
          <option>Intermediate</option>
        </select>
        <br/>
        <p className='name'>Education Gap:</p>
        <input className='textbox' type='text' placeholder='Education Gap' value={gap} onChange={open}/>
        <br/>
        <p style={{color:'red'}}>{Error}</p>
        <p className='name' >Skills:</p>
        <input className='textbox' type='text' placeholder='Skills' value={skills} onChange={open1}/>
        <p style={{color:'red'}}>{Error}</p>
        <br/>
        <button onClick={submiting} className='submiting'>Submit</button>
      </form>
    </div>
  )
}
