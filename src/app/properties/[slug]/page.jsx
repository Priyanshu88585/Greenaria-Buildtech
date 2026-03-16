import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PropertyGallery from "@/components/property/PropertyGallery";
import Amenities from "@/components/property/Amenities";
import PropertySidebar from "@/components/property/PropertySidebar";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { getPropertyBySlug, getAllProperties } from "@/lib/fetchProperties";

export async function generateStaticParams() {
  const properties = await getAllProperties();
  return properties.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const property = await getPropertyBySlug(params.slug);
  if (!property) return { title: "Property Not Found" };
  return {
    title: `${property.name} | Greenaria BuildTech`,
    description: property.description,
  };
}

export default async function PropertyDetailPage({ params }) {
  const property = await getPropertyBySlug(params.slug);
  if (!property) notFound();

  return (
    <>
      <Header />
      <main className="page-wrapper">
        <section className="section-pad" style={{ background:"#f9f9f9" }}>
          <div className="max-content">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
              <a href="/" className="hover:text-[#2e7d32] transition-colors">Home</a>
              <span>/</span>
              <a href="/properties" className="hover:text-[#2e7d32] transition-colors">Properties</a>
              <span>/</span>
              <span className="text-navy font-medium">{property.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left — Details */}
              <div className="lg:col-span-2">
                <PropertyGallery images={property.images} name={property.name} />

                <div className="mt-8 bg-white rounded-2xl p-8" style={{ border:"1px solid #e0e0e0", boxShadow:"0 2px 12px rgba(0,0,0,.06)" }}>
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.featured && <span className="badge badge-green">Featured</span>}
                    {property.bhk.map(b => <span key={b} className="badge badge-const">{b}</span>)}
                    {property.status.map(s => <span key={s} className={`badge ${s==="Ready To Move"?"badge-ready":s==="Launching Soon"?"badge-launch":"badge-const"}`}>{s}</span>)}
                  </div>

                  <h1 className="font-heading font-black text-navy mb-2" style={{ fontSize:"clamp(1.4rem,3vw,2rem)" }}>{property.name}</h1>
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="#ef4444"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                      {property.location}, {property.sector}
                    </span>
                    {property.area && <span>📐 {property.area}</span>}
                    {property.possession && <span>🗓️ {property.possession}</span>}
                  </div>

                  <p className="font-heading font-black mb-6" style={{ fontSize:"clamp(1.5rem,3vw,2.2rem)", color: property.priceValue ? "#2e7d32" : "#b8914a" }}>
                    {property.price}
                  </p>

                  <h2 className="font-heading font-bold text-navy mb-3" style={{ fontSize:18 }}>About this Property</h2>
                  <p style={{ fontSize:15, lineHeight:1.8, color:"#4b5563" }}>{property.description}</p>

                  <div className="my-8 h-px bg-gray-100" />
                  <Amenities amenities={property.amenities} />

                  {property.developer && (
                    <>
                      <div className="my-8 h-px bg-gray-100" />
                      <div className="p-5 rounded-xl bg-[#f5faf5]">
                        <p className="font-heading font-bold text-navy mb-1">Developer</p>
                        <p className="text-gray-600">{property.developer}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Right — Sidebar */}
              <div className="lg:col-span-1">
                <PropertySidebar property={property} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
