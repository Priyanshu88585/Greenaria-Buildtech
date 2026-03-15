"use client"

import { useState } from "react"

export default function SellPropertyForm() {

  const [form,setForm] = useState({
    owner:"",
    phone:"",
    email:"",
    location:"",
    propertyType:"",
    description:""
  })

  const handleSubmit = async (e)=>{

    e.preventDefault()

    await fetch("/api/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(form)
    })

    alert("Property submitted")

  }

  return (

    <form className="sell-property-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Owner Name"
        required
        onChange={(e)=>setForm({...form,owner:e.target.value})}
      />

      <input
        type="tel"
        placeholder="Phone Number"
        required
        onChange={(e)=>setForm({...form,phone:e.target.value})}
      />

      <input
        type="email"
        placeholder="Email Address"
        onChange={(e)=>setForm({...form,email:e.target.value})}
      />

      <input
        type="text"
        placeholder="Property Location"
        required
        onChange={(e)=>setForm({...form,location:e.target.value})}
      />

      <select
        onChange={(e)=>setForm({...form,propertyType:e.target.value})}
      >
        <option>Property Type</option>
        <option>Apartment</option>
        <option>Plot</option>
        <option>Commercial</option>
        <option>Villa</option>
      </select>

      <textarea
        placeholder="Property Description"
        onChange={(e)=>setForm({...form,description:e.target.value})}
      />

      <button type="submit">
        Submit Property
      </button>

    </form>

  )

}