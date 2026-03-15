'use client'
import { useState } from 'react'
export default function Admin(){
  const [form,setForm]=useState({title:'',location:'',price:'',image:''})
  const submit=async(e)=>{
    e.preventDefault()
    await fetch('/api/admin/add-property',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)})
    alert('Property added (server persisted to src/data/properties.json)')
  }
  return (
    <div className='container'>
      <h1>Admin</h1>
      <form onSubmit={submit} style={{display:'grid',gap:10,maxWidth:480}}>
        <input placeholder='Title' onChange={e=>setForm({...form,title:e.target.value})} required/>
        <input placeholder='Location' onChange={e=>setForm({...form,location:e.target.value})} required/>
        <input placeholder='Price' onChange={e=>setForm({...form,price:e.target.value})} required/>
        <input placeholder='Image URL' onChange={e=>setForm({...form,image:e.target.value})} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}
