import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export const metadata = {
  title: "Real Estate Services | Greenaria BuildTech",
  description: "Comprehensive real estate services in Gurgaon - Home Loan Assistance, Legal Help, Site Visit Coordination, Investment Consulting.",
};

const services = [
  { id:"loan",      icon:"🏦", title:"Home Loan Assistance",         desc:"Get pre-approved loans from 15+ top banks with competitive rates and complete documentation support. Our finance experts compare rates across leading banks to find the best deal for you.", features:["Pre-approval in 48 hours","15+ bank partnerships","Door-step documentation","Zero processing fee guidance"] },
  { id:"legal",     icon:"⚖️", title:"Legal & Valuation Help",        desc:"RERA verification, title check, and valuation all done by certified professionals for transparent transactions. We ensure every document is clean before you invest.", features:["RERA verification","Title deed check","Circle rate valuation","Agreement review"] },
  { id:"visit",     icon:"🏠", title:"Site Visit Coordination",       desc:"Personalised site visits with transportation and expert guidance. Seeing your future home should be effortless — we arrange everything including pick-up and drop.", features:["Free pick-up & drop","Expert guide on site","Comparison of multiple sites","After-visit report"] },
  { id:"invest",    icon:"📈", title:"Investment Consulting",         desc:"Our investment advisors analyse market trends, rental yields, and appreciation potential to help you make data-driven property investment decisions.", features:["Market trend analysis","Rental yield calculation","ROI projections","Portfolio diversification"] },
  { id:"valuation", icon:"💰", title:"Property Valuation in Gurgaon", desc:"Get a certified property valuation report based on current market conditions, circle rates, and comparable transactions in the area.", features:["Certified valuation report","Market comparable analysis","Circle rate comparison","Online + physical visit"] },
  { id:"nri",       icon:"🌍", title:"NRI & Dubai Investment",        desc:"Specialised services for NRI investors looking to invest in India or Dubai. We handle everything remotely — from property selection to registration.", features:["Remote property buying","Dubai real estate advisory","NRI documentation help","Repatriation guidance"] },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <section className="relative flex items-center justify-center" style={{ minHeight:280, background:"linear-gradient(160deg,#0d2137 0%,#0a2e16 100%)" }}>
          <div className="text-center z-10 px-4">
            <h1 className="font-heading font-black text-white uppercase tracking-[.1em] mb-3" style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>Our Services</h1>
            <p className="text-white/70">End-to-End Real Estate Solutions in Gurgaon</p>
          </div>
        </section>

        <section className="section-pad" style={{ background:"#f5faf5" }}>
          <div className="max-content">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(s => (
                <div key={s.id} id={s.id} className="svc-card group bg-white text-left p-8">
                  <div className="svc-icon text-2xl mb-5">{s.icon}</div>
                  <h3 className="font-heading font-bold text-navy mb-3" style={{ fontSize:17 }}>{s.title}</h3>
                  <p className="mb-5" style={{ fontSize:14, color:"#6b7280", lineHeight:1.7 }}>{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2" style={{ fontSize:13, color:"#4b5563" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
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
