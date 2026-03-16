import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { getFeaturedProperties } from "@/lib/fetchProperties";

export const metadata = {
  title: "About Us | Greenaria BuildTech",
  description: "Learn about Greenaria BuildTech – 10+ years of trusted real estate consultancy in Gurgaon, Delhi NCR & Dubai.",
};

export default async function AboutPage() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        {/* Page Banner */}
        <section className="relative flex items-center justify-center" style={{ minHeight:320, background:"linear-gradient(160deg,#0d2137 0%,#0a2e16 100%)" }}>
          <div className="text-center z-10 px-4">
            <h1 className="font-heading font-black text-white uppercase tracking-[.1em] mb-3" style={{ fontSize:"clamp(2rem,5vw,3.2rem)" }}>About Greenaria BuildTech</h1>
            <p className="text-white/70 text-base">Trusted Real Estate Partner Since 2014</p>
          </div>
        </section>

        {/* About Content */}
        <section className="section-pad" style={{ background:"#fff" }}>
          <div className="max-content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-title mb-4" style={{ fontSize:"clamp(1.2rem,2.5vw,1.9rem)" }}>Our Story</h2>
                <div className="gold-divider left" />
                <div className="space-y-4" style={{ fontSize:15, lineHeight:1.82, color:"#2d2d2d" }}>
                  <p><strong>Greenaria BuildTech</strong> is a trusted and experienced <span style={{ color:"#2e7d32", fontWeight:600 }}>real estate developer in Gurgaon</span>, associated with some of the most reputed builders including <strong>DLF, M3M, Trump Towers, AIPL, Bhutani Group, Emaar, and Sobha Dubai</strong>.</p>
                  <p>With over <strong>10 years of experience</strong> and <strong>8,000+ successful property transactions</strong>, we have established ourselves as a leading real estate consultancy catering to both Indian and international markets.</p>
                  <p>We offer premium residential, commercial, and investment property advisory services across <strong>Gurgaon, Delhi-NCR, Noida, and Dubai</strong>.</p>
                  <p>Guided by our core principle — <em style={{ color:"#2e7d32", fontWeight:600 }}>&ldquo;You make a living by what you get, but you make a life by what you give&rdquo;</em> — we strive to create lasting value for our clients and community.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { num:"₹ 2,500 Cr+", label:"Total Transactions",    note:"Property value transacted" },
                  { num:"500+",         label:"Happy Clients",         note:"Families found dream homes" },
                  { num:"10+",          label:"Years Experience",      note:"Of real estate expertise" },
                  { num:"100%",         label:"RERA Compliant",        note:"All our listings" },
                ].map(s => (
                  <div key={s.label} className="p-6 rounded-2xl text-center" style={{ background:"#f5faf5", border:"1px solid #e0e0e0" }}>
                    <div className="font-heading font-black mb-1" style={{ fontSize:"clamp(1.5rem,3vw,2rem)", color:"#b8914a" }}>{s.num}</div>
                    <p className="font-heading font-bold text-navy" style={{ fontSize:12 }}>{s.label}</p>
                    <p style={{ fontSize:11, color:"#6b7280" }}>{s.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Vision */}
        <section className="section-pad" style={{ background:"#f5faf5" }}>
          <div className="max-content">
            <div className="text-center mb-12">
              <h2 className="section-title" style={{ fontSize:"clamp(1.2rem,2.5vw,1.85rem)" }}>Our Mission & Values</h2>
              <div className="gold-divider" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon:"🎯", title:"Our Mission", text:"To deliver transparent, ethical, and result-driven real estate solutions that empower buyers and investors to make the best property decisions." },
                { icon:"👁️", title:"Our Vision",  text:"To be the most trusted real estate partner in NCR & Dubai by combining deep market expertise with unmatched client service." },
                { icon:"💎", title:"Our Values",  text:"Integrity, transparency, accountability, and client-first thinking — these guide every interaction and transaction we handle." },
              ].map(v => (
                <div key={v.title} className="svc-card group text-center">
                  <div className="svc-icon text-2xl">{v.icon}</div>
                  <h3 className="font-heading font-bold text-navy mb-3" style={{ fontSize:16 }}>{v.title}</h3>
                  <p style={{ fontSize:14, color:"#6b7280", lineHeight:1.7 }}>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
