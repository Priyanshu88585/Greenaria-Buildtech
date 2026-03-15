"use client"

import { useState } from "react"

export default function PropertySidebar() {

  const [form,setForm] = useState({
    name:"",
    phone:"",
    email:""
  })

  const handleSubmit = async (e)=>{
    e.preventDefault()

    await fetch("/api/contact",{
      method:"POST",
      body:JSON.stringify(form)
    })

    alert("Inquiry submitted")
  }

  return (

    <div className="property-sidebar">

      <h3>Request Details</h3>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input
          type="tel"
          placeholder="Phone"
          required
          onChange={(e)=>setForm({...form,phone:e.target.value})}
        />

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>

  )

}