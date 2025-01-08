import React,{useState} from 'react'
import './tabs.css'
import Tab1 from '../community/community.jsx'
import Tab2 from '../cource/cource.jsx'
export default function Tabs() {
  const [data,setData]=useState('community')
  const open=(e)=>{
      setData(e)
  }
  return (
    <div className='tabs'>
      <div className='left'>
        <h1>Admin Panel</h1>
        <hr/>
        <button className='bt1' onClick={()=>open('community')}>Community</button>
        <br/>
        <button className='bt2' onClick={()=>open('cources')}>Cources</button>
      </div>

    {/*opening tabs*/}
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
