import React,{useState} from 'react'
import './studenttabs.css'
import Tab3 from '../cources/cources.jsx'
import Tab4 from '../prediction/prediction.jsx'
import Tab5 from '../assignment/assignment.jsx'
import { Link } from 'react-router-dom'
export default function Tabs() {
  const [data,setData]=useState('cource')
  const open=(e)=>{
      setData(e)
  }
  return (
    <div className='studenttabs'>
      <div className='left'>
        <h1>Student Panel</h1>
        <hr/>
        <button className='bt2' onClick={()=>open('cource')}>Select Cource</button>
        <br/>
        <button className='bt2' onClick={()=>open('model')}>Model Predictions</button>
        <br/>
        <button className='bt2' onClick={()=>open('assessment')}>Assessment</button>
        <br/>
        <Link to='/studentlogin'><button  className='logout' >logout</button></Link>
        <br/>
        <p></p>
      </div>

    {/*opening tabs*/}
    {/*cource*/}
    {data==='cource' &&(
        <div className='right'>
          <Tab3/>
        </div>
      )}
      {/*community*/}
      {data==='model' &&(
        <div className='right'>
          <Tab4/>
        </div>
      )}

      {/*cource*/}
      {data==='assessment' &&(
        <div className='right'>
          <Tab5/>
        </div>
      )}
      
    </div>
  )
}
