import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PropertyGrid from "@/components/property/PropertyGrid";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { getPropertiesByLocation, getAllProperties } from "@/lib/fetchProperties";
import locationsData from "@/data/locations.json";

export async function generateStaticParams() {
  return locationsData.map(l => ({ city: l.slug }));
}

export async function generateMetadata({ params }) {
  const loc = locationsData.find(l => l.slug === params.city);
  return {
    title: `Properties in ${loc?.city || params.city} | Greenaria BuildTech`,
    description: `Explore premium RERA-verified properties in ${loc?.city || params.city} with Greenaria BuildTech.`,
  };
}

export default async function LocationPage({ params }) {
  const loc = locationsData.find(l => l.slug === params.city);
  if (!loc) notFound();
  const properties = await getPropertiesByLocation(loc.city);

  return (
    <>
      <Header />
      <main className="page-wrapper">
        <section className="relative flex items-center justify-center" style={{ minHeight:300, background:"linear-gradient(160deg,#0d2137 0%,#0a2e16 100%)" }}>
          <div className="text-center z-10 px-4">
            <h1 className="font-heading font-black text-white uppercase tracking-[.1em] mb-3" style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>
              Properties in {loc.city}
            </h1>
            <p className="text-white/70">{loc.desc}</p>
          </div>
        </section>

        <section className="section-pad" style={{ background:"#f9f9f9" }}>
          <div className="max-content">
            <div className="mb-8">
              <h2 className="font-heading font-bold text-navy" style={{ fontSize:20 }}>
                {properties.length > 0 ? `${properties.length} Properties in ${loc.city}` : `Explore ${loc.city}`}
              </h2>
            </div>
            {properties.length > 0 ? (
              <PropertyGrid properties={properties} loading={false} />
            ) : (
              <div className="text-center py-20">
                <p className="text-5xl mb-4">🏗️</p>
                <h3 className="font-heading font-bold text-navy text-xl mb-2">Coming Soon!</h3>
                <p className="text-gray-500 mb-6">We&apos;re adding exclusive {loc.city} listings. Stay tuned!</p>
                <a href="/contact" className="btn-primary inline-flex">Get Notified</a>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
