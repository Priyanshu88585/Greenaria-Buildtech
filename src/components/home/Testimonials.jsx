"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import testimonialsData from "@/data/testimonials.json";
const fallbackImgs=["https://randomuser.me/api/portraits/men/32.jpg","https://randomuser.me/api/portraits/women/44.jpg","https://randomuser.me/api/portraits/men/55.jpg","https://randomuser.me/api/portraits/women/68.jpg"];
function Stars({count}){return(<div style={{display:"flex",justifyContent:"center",gap:3}}>{[1,2,3,4,5].map(i=>(<svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i<=Math.floor(count)?"#f59e0b":i-.5<=count?"url(#half)":"#d1d5db"} stroke="none"><defs><linearGradient id="half"><stop offset="50%" stopColor="#f59e0b"/><stop offset="50%" stopColor="#d1d5db"/></linearGradient></defs><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>))}</div>);}
export default function Testimonials(){
  const {ref,inView}=useInView({triggerOnce:true,threshold:.1});
  const pairs=[[testimonialsData[0],testimonialsData[1]],[testimonialsData[2],testimonialsData[3]]];
  const [page,setPage]=useState(0);const [animIn,setAnimIn]=useState(true);
  const changePage=(i)=>{setAnimIn(false);setTimeout(()=>{setPage(i);setAnimIn(true);},300);};
  useEffect(()=>{const t=setInterval(()=>changePage((page+1)%pairs.length),5500);return()=>clearInterval(t);},[page]);
  return(
    <section id="testimonials" ref={ref} className="section-pad relative overflow-hidden" style={{background:"linear-gradient(160deg,#0e2a3a 0%,#0d2137 60%,#0a2e16 100%)"}}>
      <svg style={{position:"absolute",bottom:0,left:0,right:0,opacity:.18,pointerEvents:"none",height:160}} viewBox="0 0 1440 160" xmlns="http://www.w3.org/2000/svg" fill="white" preserveAspectRatio="none"><path d="M0,160 L0,100 L40,100 L40,80 L60,80 L60,60 L80,60 L80,80 L100,80 L100,40 L110,40 L110,20 L120,20 L120,40 L130,40 L130,80 L150,80 L150,100 L180,100 L180,70 L200,70 L200,50 L220,50 L220,70 L240,70 L240,90 L260,90 L260,60 L270,60 L270,30 L280,30 L280,60 L290,60 L290,90 L320,90 L320,110 L360,110 L360,80 L380,80 L380,55 L395,55 L395,35 L405,35 L405,55 L420,55 L420,80 L450,80 L450,100 L480,100 L480,70 L500,70 L500,45 L515,45 L515,25 L525,25 L525,45 L540,45 L540,70 L560,70 L560,90 L590,90 L590,60 L610,60 L610,40 L625,40 L625,20 L635,20 L635,40 L650,40 L650,60 L680,60 L680,85 L700,85 L700,100 L730,100 L730,75 L750,75 L750,50 L770,50 L770,75 L790,75 L790,100 L820,100 L820,70 L840,70 L840,45 L855,45 L855,25 L865,25 L865,45 L880,45 L880,70 L910,70 L910,90 L940,90 L940,65 L960,65 L960,40 L975,40 L975,20 L985,20 L985,40 L1000,40 L1000,65 L1020,65 L1020,90 L1050,90 L1050,70 L1070,70 L1070,50 L1090,50 L1090,70 L1110,70 L1110,85 L1140,85 L1140,60 L1160,60 L1160,35 L1175,35 L1175,15 L1185,15 L1185,35 L1200,35 L1200,60 L1220,60 L1220,85 L1250,85 L1250,100 L1280,100 L1280,75 L1300,75 L1300,55 L1315,55 L1315,35 L1325,35 L1325,55 L1340,55 L1340,75 L1360,75 L1360,100 L1400,100 L1440,100 L1440,160 Z"/></svg>
      <div className="max-content" style={{position:"relative",zIndex:2}}>
        <div style={{textAlign:"center",marginBottom:52,opacity:inView?1:0,transform:inView?"translateY(0)":"translateY(30px)",transition:"all .65s ease"}}>
          <h2 style={{fontFamily:"Montserrat,sans-serif",fontWeight:900,letterSpacing:".2em",textTransform:"uppercase",color:"#fff",fontSize:"clamp(1.2rem,2.5vw,1.8rem)",marginBottom:6}}>TESTIMONIALS</h2>
          <p style={{color:"rgba(255,255,255,.55)",fontSize:14,letterSpacing:".06em"}}>What Our Clients Say</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{opacity:animIn?1:0,transform:animIn?"translateX(0)":"translateX(40px)",transition:"all .5s ease"}}>
          {pairs[page].map((t)=>(
            <div key={t.id}>
              <div className="t-bubble" style={{position:"relative",background:"rgba(255,255,255,.97)",borderRadius:16,padding:"30px 26px 26px",textAlign:"center",boxShadow:"0 8px 44px rgba(0,0,0,.22)"}}>
                <p style={{fontFamily:"Montserrat,sans-serif",fontWeight:700,fontSize:13.5,color:"#0d2137",marginBottom:12}}>{t.headline}</p>
                <Stars count={t.stars}/>
                <p style={{fontSize:13.5,color:"#6b7280",lineHeight:1.72,fontStyle:"italic",marginTop:12}}>&ldquo;{t.text}&rdquo;</p>
              </div>
              <div style={{marginTop:28,textAlign:"center"}}>
                <img src={fallbackImgs[t.id-1]||fallbackImgs[0]} alt={t.author} style={{width:60,height:60,borderRadius:"50%",objectFit:"cover",border:"3px solid rgba(255,255,255,.9)",boxShadow:"0 4px 16px rgba(0,0,0,.22)",margin:"0 auto 8px",display:"block"}} onError={e=>{e.target.src=fallbackImgs[0];}}/>
                <p style={{fontFamily:"Montserrat,sans-serif",fontWeight:700,fontSize:13,letterSpacing:".04em",color:"#fff"}}>{t.author}, {t.city}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",justifyContent:"center",gap:8,marginTop:36}}>
          {pairs.map((_,i)=>(<button key={i} onClick={()=>changePage(i)} style={{borderRadius:9999,width:i===page?22:8,height:8,background:i===page?"#fff":"rgba(255,255,255,.35)",border:"none",cursor:"pointer",transition:"all .3s"}}/>))}
        </div>
      </div>
    </section>
  );
}
