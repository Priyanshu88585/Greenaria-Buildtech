import { useState } from "react"

export default function useSearch(data){

  const [results,setResults] = useState(data)

  const search = (keyword)=>{

    if(!keyword){

      setResults(data)
      return

    }

    const filtered = data.filter((item)=>

      item.title
      .toLowerCase()
      .includes(keyword.toLowerCase())

      ||

      item.location
      .toLowerCase()
      .includes(keyword.toLowerCase())

    )

    setResults(filtered)

  }

  return {
    results,
    search
  }

}