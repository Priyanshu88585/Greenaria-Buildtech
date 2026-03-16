"use client";
import Link from "next/link";
import blogData from "@/data/blog.json";

const quickLinks = [
  { label: "Home",       href: "/" },
  { label: "About Us",   href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Blog",       href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];
const services = [
  { label: "Home Loan Assistance",               href: "/services#loan"      },
  { label: "Legal Help & Property Verification", href: "/services#legal"     },
  { label: "Investment Consulting in Gurgaon",   href: "/services#invest"    },
  { label: "Property Valuation in Gurgaon",      href: "/services#valuation" },
  { label: "Site Visit Coordination",            href: "/services#visit"     },
];
const locations = [
  { label: "Dubai",         href: "/locations/dubai"         },
  { label: "Gurgaon",       href: "/locations/gurgaon"       },
  { label: "Noida",         href: "/locations/noida"         },
  { label: "Delhi",         href: "/locations/delhi"         },
  { label: "Greater Noida", href: "/locations/greater-noida" },
];
const socials = [
  { char:"f",  label:"Facebook",  href:"https://facebook.com"  },
  { char:"𝕏",  label:"X/Twitter", href:"https://x.com"         },
  { char:"in", label:"LinkedIn",  href:"https://linkedin.com"  },
  { char:"▶",  label:"YouTube",   href:"https://youtube.com"   },
  { char:"◉",  label:"Instagram", href:"https://instagram.com" },
];

export default function Footer() {
  const posts = blogData.slice(0, 3);
  return (
    <footer style={{ background:"#0d2137", paddingTop:80, paddingBottom:0 }}>
      <div className="max-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-[9px] flex items-center justify-center" style={{background:"linear-gradient(135deg,#2e7d32,#4caf50)"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
              </div>
              <div>
                <div style={{fontFamily:"Montserrat",fontWeight:900,fontSize:16,color:"#fff",letterSpacing:".06em",lineHeight:1.1}}>GREENARIA</div>
                <div style={{fontFamily:"Montserrat",fontWeight:600,fontSize:9,color:"#4caf50",letterSpacing:".18em",textTransform:"uppercase"}}>BUILDTECH</div>
              </div>
            </Link>
            <p style={{fontSize:13.5,color:"#8a98ae",lineHeight:1.7,marginBottom:20}}>Your trusted partner for all real estate needs in Gurgaon. Professional, reliable, and result-oriented services.</p>
            {[
              {icon:"🏢",text:"A-512-517, 5th floor, Tower A, Emaar Digital Greens, Golf Course Ext Rd, Sector 61, Gurugram 122102"},
              {icon:"📞",text:"+91 8218035989"},
              {icon:"✉️",text:"enquiries@greenariabuildtech.com"},
            ].map(m=>(
              <div key={m.icon} className="flex items-start gap-3 mb-3">
                <span className="flex-shrink-0 mt-0.5" style={{fontSize:12}}>{m.icon}</span>
                <span style={{fontSize:13,color:"#8a98ae"}}>{m.text}</span>
              </div>
            ))}
            <div className="flex gap-2 mt-5">
              {socials.map(s=>(
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs transition-all duration-300 hover:-translate-y-1 hover:bg-[#2e7d32] hover:text-white"
                  style={{background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.08)",color:"#8a98ae"}}>
                  {s.char}
                </a>
              ))}
            </div>
          </div>
          {/* Quick Links + Locations */}
          <div>
            <p className="font-heading font-bold text-white text-xs tracking-[.15em] uppercase mb-5 pb-2.5 border-b border-white/[.06]">Quick Links</p>
            <ul className="space-y-2 mb-8">
              {quickLinks.map(l=><li key={l.label}><Link href={l.href} className="footer-link">{l.label}</Link></li>)}
            </ul>
            <p className="font-heading font-bold text-white text-xs tracking-[.15em] uppercase mb-4 pb-2.5 border-b border-white/[.06]">Location</p>
            <ul className="space-y-2">
              {locations.map(l=><li key={l.label}><Link href={l.href} className="footer-link">{l.label}</Link></li>)}
            </ul>
          </div>
          {/* Services */}
          <div>
            <p className="font-heading font-bold text-white text-xs tracking-[.15em] uppercase mb-5 pb-2.5 border-b border-white/[.06]">Services</p>
            <ul className="space-y-2">
              {services.map(s=><li key={s.label}><Link href={s.href} className="footer-link">{s.label}</Link></li>)}
            </ul>
          </div>
          {/* Popular Posts */}
          <div>
            <p className="font-heading font-bold text-white text-xs tracking-[.15em] uppercase mb-5 pb-2.5 border-b border-white/[.06]">Popular Posts</p>
            <div className="space-y-4">
              {posts.map(p=>(
                <Link key={p.id} href={`/blog/${p.slug}`} className="flex gap-3 group">
                  <div className="w-14 h-11 rounded-lg overflow-hidden flex-shrink-0 bg-gray-800">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" onError={e=>{e.target.style.display="none"}}/>
                  </div>
                  <div>
                    <p className="text-xs leading-snug mb-0.5 font-medium group-hover:text-white transition-colors line-clamp-2" style={{color:"#bdc8d8"}}>{p.title}</p>
                    <p className="text-[11px]" style={{color:"#5a6580"}}>{p.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="py-5 flex flex-wrap items-center justify-between gap-3" style={{borderTop:"1px solid rgba(255,255,255,.05)"}}>
          <p style={{fontSize:13,color:"#5a6580"}}>© {new Date().getFullYear()} Greenaria BuildTech. All rights reserved.</p>
          <div className="flex gap-5">
            {["Terms & Conditions","Privacy Policy"].map(l=>(
              <a key={l} href="#" className="text-xs transition-colors hover:text-white" style={{color:"#5a6580"}}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
