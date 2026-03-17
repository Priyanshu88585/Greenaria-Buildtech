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
  { label: "Property Buying",           href: "/services#loan"      },
  { label: "Property Selling",          href: "/services#legal"     },
  { label: "Investment Consulting",     href: "/services#invest"    },
  { label: "Leasing Services",          href: "/services#valuation" },
  { label: "Site Visit Coordination",   href: "/services#visit"     },
];
const locations = [
  { label: "Noida",             href: "/locations/noida"             },
  { label: "Greater Noida",     href: "/locations/greater-noida"     },
  { label: "Yamuna Expressway", href: "/locations/yamuna-expressway" },
  { label: "Delhi NCR",         href: "/locations/delhi"             },
  { label: "Dubai",             href: "/locations/dubai"             },
];
const socials = [
  { char: "f",  label: "Facebook",  href: "https://www.facebook.com/greenariabuildtech"  },
  { char: "𝕏",  label: "X/Twitter", href: "https://x.com/GreenariaBuild"   },
  { char: "in", label: "LinkedIn",  href: "https://www.linkedin.com/company/greenariabuildtech/posts/?feedView=all"  },
  { char: "▶",  label: "YouTube",   href: "https://www.youtube.com/channel/UCFClfvZkhvULrGJ_zDpK38A"   },
  { char: "◉",  label: "Instagram", href: "https://www.instagram.com/greenariabuildtech" },
];

export default function Footer() {
  const posts = blogData.slice(0, 3);

  return (
    <footer style={{ background: "#0d2137", paddingTop: 80, paddingBottom: 0 }}>
      <div className="max-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <img
                src="/logos/company/logo-light.png"
                alt="Greenaria Buildtech"
                className="h-[48px] w-auto object-contain"
              />
            </Link>

            <p style={{ fontSize: 13.5, color: "#8a98ae", lineHeight: 1.7, marginBottom: 20 }}>
              Your trusted partner for all real estate needs in Noida, Greater Noida & Yamuna Expressway. Professional, reliable, and result-oriented services.
            </p>

            {[
              { icon: "🏢", text: "Noida, Greater Noida, Yamuna Expressway & NCR Region" },
              { icon: "📞", text: "+91 8218035989  |  +91 8130898777" },
              { icon: "✉️", text: "info@greenariabuildtech.com" },
            ].map((m) => (
              <div key={m.icon} className="flex items-start gap-3 mb-3">
                <span className="flex-shrink-0 mt-0.5" style={{ fontSize: 12 }}>{m.icon}</span>
                <span style={{ fontSize: 13, color: "#8a98ae" }}>{m.text}</span>
              </div>
            ))}

            <div className="flex gap-2 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs transition-all duration-300 hover:-translate-y-1 hover:bg-[#2e7d32] hover:text-white"
                  style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)", color: "#8a98ae" }}
                >
                  {s.char}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links + Locations */}
          <div>
            <p className="font-heading font-bold text-white text-xs tracking-[.15em] uppercase mb-5 pb-2.5 border-b border-white/[.06]">
              Quick Links
            </p>
            <ul className="space-y-2 mb-8">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
            <p className="font-heading font-bold text-white text-xs tracking-[.15em] uppercase mb-4 pb-2.5 border-b border-white/[.06]">
              Locations
            </p>
            <ul className="space-y-2">
              {locations.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-heading font-bold text-white text-xs tracking-[.15em] uppercase mb-5 pb-2.5 border-b border-white/[.06]">
              Services
            </p>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="footer-link">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Posts */}
          <div>
            <p className="font-heading font-bold text-white text-xs tracking-[.15em] uppercase mb-5 pb-2.5 border-b border-white/[.06]">
              Popular Posts
            </p>
            <div className="space-y-4">
              {posts.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="flex gap-3 group">
                  <div className="w-14 h-11 rounded-lg overflow-hidden flex-shrink-0 bg-gray-800">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <p className="text-xs leading-snug mb-0.5 font-medium group-hover:text-white transition-colors line-clamp-2"
                      style={{ color: "#bdc8d8" }}>
                      {p.title}
                    </p>
                    <p className="text-[11px]" style={{ color: "#5a6580" }}>{p.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-5 flex flex-wrap items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,.05)" }}>
          <p style={{ fontSize: 13, color: "#5a6580" }}>
            © {new Date().getFullYear()} Greenaria Buildtech Private Limited. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Terms & Conditions", "Privacy Policy"].map((l) => (
              <a key={l} href="#" className="text-xs transition-colors hover:text-white"
                style={{ color: "#5a6580" }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
