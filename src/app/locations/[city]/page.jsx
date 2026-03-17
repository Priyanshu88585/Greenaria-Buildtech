"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PropertyGrid from "@/components/property/PropertyGrid";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import propertiesData from "@/data/properties.json";

export default function CategoryPage({ params }) {
  const type = params.type ? decodeURIComponent(params.type) : "All";
  const filtered = propertiesData.filter(
    (p) => p.type?.toLowerCase() === type.toLowerCase()
  );

  return (
    <>
      <Header />
      <main className="page-wrapper">
        <section
          className="relative flex items-center justify-center"
          style={{ minHeight: 280, background: "linear-gradient(160deg,#0d2137 0%,#0a2e16 100%)" }}
        >
          <div className="text-center z-10 px-4">
            <h1
              className="font-heading font-black text-white uppercase tracking-[.1em] mb-3"
              style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)" }}
            >
              {type} Properties
            </h1>
            <p className="text-white/70">RERA-Verified {type} Properties</p>
          </div>
        </section>
        <section className="section-pad" style={{ background: "#f9f9f9" }}>
          <div className="max-content">
            <div className="mb-8">
              <h2 className="font-heading font-bold text-navy" style={{ fontSize: 20 }}>
                {filtered.length} {type} Properties Found
              </h2>
            </div>
            <PropertyGrid properties={filtered} loading={false} />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
