import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export const metadata = {
  title: "About Us | Greenaria Buildtech",
  description: "Greenaria Buildtech Pvt Ltd is a trusted real estate company specializing in residential, commercial, and land investments across Noida, Greater Noida, Yamuna Expressway, and the NCR region.",
};

export default async function AboutPage() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        {/* Page Banner */}
        <section className="relative flex items-center justify-center" style={{ minHeight: 320, background: "linear-gradient(160deg,#0d2137 0%,#0a2e16 100%)" }}>
          <div className="text-center z-10 px-4">
            <p className="font-heading font-semibold mb-2" style={{ fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.55)" }}>
              TRUSTED PARTNER · QUALITY SERVICE
            </p>
            <h1 className="font-heading font-black text-white uppercase tracking-[.1em] mb-3" style={{ fontSize: "clamp(2rem,5vw,3.2rem)" }}>
              About Greenaria Buildtech
            </h1>
            <p className="text-white/70 text-base">Your Trusted Real Estate Partner Across NCR &amp; Beyond</p>
          </div>
        </section>

        {/* About Content */}
        <section className="section-pad" style={{ background: "#fff" }}>
          <div className="max-content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-title mb-4" style={{ fontSize: "clamp(1.2rem,2.5vw,1.9rem)" }}>Our Story</h2>
                <div className="gold-divider left" />
                <div className="space-y-4" style={{ fontSize: 15, lineHeight: 1.82, color: "#2d2d2d" }}>
                  <p>
                    <strong>Greenaria Buildtech Pvt Ltd</strong> is a trusted real estate company specializing in{" "}
                    <span style={{ color: "#2e7d32", fontWeight: 600 }}>residential, commercial, and land investments</span>{" "}
                    across Noida, Greater Noida, Yamuna Expressway, and the NCR region.
                  </p>
                  <p>
                    Driven by transparency, market expertise, and ethical practices, we help homebuyers, investors, and businesses make confident real estate decisions. From property buying and selling to leasing and investment consulting, our team delivers end-to-end solutions backed by in-depth market research and complete regulatory compliance.
                  </p>
                  <p>
                    At Greenaria Buildtech, we don't just deal in properties — we{" "}
                    <em style={{ color: "#2e7d32", fontWeight: 600 }}>build long-term value, trust, and growth</em>{" "}
                    for our clients.
                  </p>
                  <p>
                    Our portfolio spans across{" "}
                    <strong>Noida, Greater Noida, Yamuna Expressway, Delhi NCR, Mumbai, Bangalore, Uttarakhand, and Dubai</strong>{" "}
                    — making us a truly pan-India and international real estate consultancy.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { num: "5000+", label: "Happy Customers",  note: "Families who trusted us" },
                  { num: "100+",  label: "Projects Handled", note: "Across NCR & beyond"     },
                  { num: "4.9★",  label: "Client Rating",    note: "Based on 2488+ reviews"  },
                  { num: "100%",  label: "RERA Compliant",   note: "All our listings"         },
                ].map(s => (
                  <div key={s.label} className="p-6 rounded-2xl text-center" style={{ background: "#f5faf5", border: "1px solid #e0e0e0" }}>
                    <div className="font-heading font-black mb-1" style={{ fontSize: "clamp(1.5rem,3vw,2rem)", color: "#b8914a" }}>{s.num}</div>
                    <p className="font-heading font-bold text-navy" style={{ fontSize: 12 }}>{s.label}</p>
                    <p style={{ fontSize: 11, color: "#6b7280" }}>{s.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Vision Values */}
        <section className="section-pad" style={{ background: "#f5faf5" }}>
          <div className="max-content">
            <div className="text-center mb-12">
              <h2 className="section-title" style={{ fontSize: "clamp(1.2rem,2.5vw,1.85rem)" }}>Our Mission, Vision &amp; Values</h2>
              <div className="gold-divider" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "Our Mission",
                  text: "To connect people with inspiring, sustainable spaces — delivering exceptional service and building lasting trust through transparency, market expertise, and ethical practices.",
                },
                {
                  icon: "👁️",
                  title: "Our Vision",
                  text: "To innovate and elevate the real estate experience using modern technology and sustainable practices, becoming the most trusted real estate partner across India and beyond.",
                },
                {
                  icon: "💎",
                  title: "Our Values",
                  text: "Transparency, Integrity, Customer-centric approach, Market expertise, and Ethical practices — these guide every interaction, recommendation, and transaction we handle.",
                },
              ].map(v => (
                <div key={v.title} className="svc-card group text-center">
                  <div className="svc-icon text-2xl">{v.icon}</div>
                  <h3 className="font-heading font-bold text-navy mb-3" style={{ fontSize: 16 }}>{v.title}</h3>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="section-pad" style={{ background: "#fff" }}>
          <div className="max-content">
            <div className="text-center mb-12">
              <h2 className="section-title" style={{ fontSize: "clamp(1.2rem,2.5vw,1.85rem)" }}>What We Offer</h2>
              <div className="gold-divider" />
              <p style={{ color: "#6b7280", fontSize: 15 }}>End-to-end real estate solutions for every need</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "🏠", label: "Property Buying",       desc: "Find your perfect home or investment property with expert guidance." },
                { icon: "💼", label: "Property Selling",      desc: "Get the best price for your property with our marketing expertise." },
                { icon: "🔑", label: "Leasing",               desc: "Premium leasing services for residential and commercial properties." },
                { icon: "📈", label: "Investment Consulting", desc: "Smart investment strategies backed by deep market research." },
                { icon: "🏢", label: "Commercial Services",   desc: "Office spaces, retail shops, and industrial plots across NCR." },
                { icon: "🌱", label: "Land Investment",       desc: "Residential plots, industrial land, and farm land across key locations." },
              ].map(s => (
                <div key={s.label} className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: "#f5faf5", border: "1px solid #e5e7eb" }}>
                  <span className="text-2xl flex-shrink-0">{s.icon}</span>
                  <div>
                    <p className="font-heading font-bold text-navy mb-1" style={{ fontSize: 14 }}>{s.label}</p>
                    <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations We Serve */}
        <section className="section-pad" style={{ background: "#f5faf5" }}>
          <div className="max-content">
            <div className="text-center mb-10">
              <h2 className="section-title" style={{ fontSize: "clamp(1.2rem,2.5vw,1.85rem)" }}>Locations We Serve</h2>
              <div className="gold-divider" />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {["Noida", "Greater Noida", "Yamuna Expressway", "Delhi NCR", "Mumbai", "Bangalore", "Uttarakhand", "Dubai"].map(loc => (
                <span key={loc} className="px-5 py-2 rounded-full font-heading font-bold text-sm" style={{ background: "#fff", border: "1.5px solid #2e7d32", color: "#2e7d32" }}>
                  📍 {loc}
                </span>
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
