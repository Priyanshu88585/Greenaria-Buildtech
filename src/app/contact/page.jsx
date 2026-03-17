import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/forms/ContactForm";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export const metadata = {
  title: "Contact Us | Greenaria Buildtech",
  description: "Get in touch with Greenaria Buildtech for expert real estate consultation across Noida, Greater Noida, Yamuna Expressway, and NCR.",
};

export default function ContactPage() {
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
              Contact Us
            </h1>
            <p className="text-white/70">We&apos;re here to help you find your perfect property</p>
          </div>
        </section>

        <section className="section-pad" style={{ background: "#fff" }}>
          <div className="max-content">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Left */}
              <div className="lg:col-span-2">
                <h2
                  className="section-title mb-4"
                  style={{ fontSize: "clamp(1.2rem,2.8vw,1.9rem)", lineHeight: 1.28 }}
                >
                  Ready To Find Your<br />Dream Property?
                </h2>
                <p className="mb-8" style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.72 }}>
                  Looking for a trusted{" "}
                  <strong>real estate consultant in Noida, Greater Noida, or Yamuna Expressway?</strong>{" "}
                  Get in touch with Greenaria Buildtech for personalised real estate advisory.
                </p>

                {[
                  {
                    bg: "#22c55e",
                    shadow: "rgba(34,197,94,.3)",
                    icon: "📞",
                    label: "Call Us",
                    value: "+91 8218035989  |  +91 8130898777",
                  },
                  {
                    bg: "#1a78c2",
                    shadow: "rgba(26,120,194,.3)",
                    icon: "✉️",
                    label: "General Enquiry",
                    value: "info@greenariabuildtech.com",
                  },
                  {
                    bg: "#f59e0b",
                    shadow: "rgba(245,158,11,.3)",
                    icon: "💼",
                    label: "Sales",
                    value: "sales@greenariabuildtech.com",
                  },
                  {
                    bg: "#0d2137",
                    shadow: "rgba(13,33,55,.3)",
                    icon: "📍",
                    label: "Serving Locations",
                    value: "Noida · Greater Noida · Yamuna Expressway · Delhi NCR · Mumbai · Bangalore · Uttarakhand · Dubai",
                  }
                ].map(m => (
                  <div key={m.label} className="flex items-start gap-4 mb-5">
                    <div
                      className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center text-lg"
                      style={{ background: m.bg, boxShadow: `0 4px 14px ${m.shadow}` }}
                    >
                      {m.icon}
                    </div>
                    <div>
                      <p className="font-heading font-bold mb-1" style={{ fontSize: 13, color: "#0d2137" }}>{m.label}</p>
                      <p style={{ fontSize: 14, color: "#6b7280" }}>{m.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right */}
              <div className="lg:col-span-3">
                <div
                  className="bg-white rounded-2xl p-[40px_36px]"
                  style={{ boxShadow: "0 8px 48px rgba(0,0,0,.12)", border: "1px solid #e5e7eb" }}
                >
                  <p
                    className="font-heading font-bold text-navy mb-6 tracking-[.04em]"
                    style={{ fontSize: 18 }}
                  >
                    Get Expert Consultation
                  </p>
                  <ContactForm />
                </div>
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
