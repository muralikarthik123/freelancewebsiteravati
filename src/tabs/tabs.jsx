import React,{useState} from 'react'
import './tabs.css'
import Tab0 from '../manage/manage.jsx'
import Tab1 from '../community/community.jsx'
import Tab2 from '../cource/cource.jsx'
import Tab6 from '../dashboard/dashboard.jsx'
import Tab7 from '../piechart/piechart.jsx'
import {Link} from "react-router-dom"
export default function Tabs() {
  const [data,setData]=useState('graph')
  const open=(e)=>{
      setData(e)
  }
  return (
    <div className='tabs'>
      <div className='left'>
        <h1>Admin Panel</h1>
        <hr/>
        <br/>
        <button className='bt2' onClick={()=>open('graph')}>DashBoard</button>
        <br/>
        <button className='bt2' onClick={()=>open('piechart')}>Student Statics</button>
        <br/>
        <button className='bt2' onClick={()=>open('manage')}>Manage Questions</button>
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
    {/*graphs*/}
    {data==='graph' &&(
        <div className='right'>
          <h1 style={{textAlign:'center',color:'white',textDecoration:'underLine'}}>Admin DashBoard</h1>
          <Tab6/>
        </div>
      )}
    {/*pie chat*/}
    {data==='piechart' &&(
        <div className='right'>
          <Tab7/>
        </div>
      )}
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
