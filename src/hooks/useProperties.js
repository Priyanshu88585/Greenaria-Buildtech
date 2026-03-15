import { useEffect, useState } from "react"

export default function useProperties(){

  const [properties,setProperties] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{

    const fetchProperties = async ()=>{

      try{

        const res = await fetch("/api/properties")
        const data = await res.json()

        setProperties(data.data)

      }catch(error){

        console.error("Failed to fetch properties",error)

      }finally{
        setLoading(false)
      }

    }

    fetchProperties()

  },[])

  return {
    properties,
    loading
  }

}