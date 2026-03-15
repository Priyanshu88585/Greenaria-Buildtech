"use client"

import { useState } from "react"

export default function PropertyInquiryForm({propertyTitle}) {

  const [form,setForm] = useState({
    name:"",
    phone:"",
    email:"",
    message:""
  })

  const handleSubmit = async (e)=>{

    e.preventDefault()

    await fetch("/api/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        ...form,
        property:propertyTitle
      })
    })

    alert("Inquiry submitted")

  }

  return (

    <form className="inquiry-form" onSubmit={handleSubmit}>

      <h3>Request Details</h3>

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
        onChange={(e)=>setForm({...form,email:e.target.value})}
      />

      <textarea
        placeholder="Message"
        onChange={(e)=>setForm({...form,message:e.target.value})}
      />

      <button type="submit">
        Submit Inquiry
      </button>

    </form>

  )

}