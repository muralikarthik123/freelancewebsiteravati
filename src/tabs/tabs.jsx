import React,{useState} from 'react'
import './tabs.css'
import Tab0 from '../manage/manage.jsx'
import Tab1 from '../community/community.jsx'
import Tab2 from '../cource/cource.jsx'
import {Link} from "react-router-dom"
export default function Tabs() {
  const [data,setData]=useState('manage')
  const open=(e)=>{
      setData(e)
  }
  return (
    <div className='tabs'>
      <div className='left'>
        <h1>Admin Panel</h1>
        <hr/>
        <button className='bt2' onClick={()=>open('manage')}>Manage Studies</button>
        <br/>
        <button className='bt2' onClick={()=>open('community')}>Community</button>
        <br/>
        <button className='bt2' onClick={()=>open('cources')}>Cources</button>
        <br/>
        <Link to='/adminlogin'><button  className='logout' >logout</button></Link>
        <br/>
        <p></p>
      </div>

    {/*opening tabs*/}
    {/*cource*/}
    {data==='manage' &&(
        <div className='right'>
          <Tab0/>
        </div>
      )}
      {/*community*/}
      {data==='community' &&(
        <div className='right'>
          <Tab1/>
        </div>
      )}

      {/*cource*/}
      {data==='cources' &&(
        <div className='right'>
          <Tab2/>
        </div>
      )}
      
    </div>
  )
}
