import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function Page() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <section className="relative flex items-center justify-center" style={{ minHeight:280, background:"linear-gradient(160deg,#0d2137 0%,#0a2e16 100%)" }}>
          <div className="text-center z-10 px-4">
            <h1 className="font-heading font-black text-white uppercase tracking-[.1em] mb-3" style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>Coming Soon</h1>
            <p className="text-white/70">This page is under construction</p>
          </div>
        </section>
        <section className="section-pad text-center" style={{ background:"#fff" }}>
          <p className="text-2xl mb-4">🚧</p>
          <h2 className="font-heading font-bold text-navy text-xl mb-4">We are working on it!</h2>
          <a href="/" className="btn-primary inline-flex">Back to Home</a>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
