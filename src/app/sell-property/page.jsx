import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SellPropertyForm from "@/components/forms/SellPropertyForm";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export const metadata = {
  title: "Sell Your Property | Greenaria BuildTech",
  description: "List your property with Greenaria BuildTech for maximum visibility and best price.",
};

export default function SellPropertyPage() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <section className="relative flex items-center justify-center" style={{ minHeight:280, background:"linear-gradient(160deg,#0d2137 0%,#0a2e16 100%)" }}>
          <div className="text-center z-10 px-4">
            <h1 className="font-heading font-black text-white uppercase tracking-[.1em] mb-3" style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>Sell Your Property</h1>
            <p className="text-white/70">Get the best price with expert guidance</p>
          </div>
        </section>
        <section className="section-pad" style={{ background:"#fff" }}>
          <div className="max-content max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-10" style={{ boxShadow:"0 8px 48px rgba(0,0,0,.12)", border:"1px solid #e5e7eb" }}>
              <p className="font-heading font-bold text-navy mb-6" style={{ fontSize:20 }}>Submit Your Property</p>
              <SellPropertyForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
