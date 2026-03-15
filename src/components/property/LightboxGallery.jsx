"use client"

import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

export default function LightboxGallery({ images }) {

  const [open,setOpen] = useState(false)
  const [index,setIndex] = useState(0)

  return (

    <div>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"10px"
      }}>

        {images.map((img,i)=>(
          <img
            key={i}
            src={img}
            style={{
              width:"100%",
              height:"150px",
              objectFit:"cover",
              cursor:"pointer"
            }}
            onClick={()=>{
              setIndex(i)
              setOpen(true)
            }}
          />
        ))}

      </div>

      <Lightbox
        open={open}
        close={()=>setOpen(false)}
        index={index}
        slides={images.map(i=>({src:i}))}
      />

    </div>

  )

}