'use client'
import { useCompare } from '@/context/CompareContext'
export default function ComparePage(){
  const { compare, removeFromCompare, clearCompare } = useCompare()
  return (
    <div className='container'>
      <h1>Compare Properties</h1>
      {compare.length===0 ? <p>No properties selected</p> : (
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
          {compare.map(p=>(
            <div key={p.id} style={{border:'1px solid #eee',padding:12}}>
              <img src={p.image} style={{width:'100%',height:140,objectFit:'cover'}}/>
              <h3>{p.title}</h3>
              <p>{p.location}</p>
              <p>{p.price}</p>
              <button onClick={()=>removeFromCompare(p.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      <button onClick={clearCompare} style={{marginTop:20}}>Clear</button>
    </div>
  )
}
