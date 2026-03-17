"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home",        href: "/" },
  { label: "About Us",    href: "/about" },
  {
    label: "Properties",
    href: "/properties",
    dropdown: [
      { label: "All Properties",   href: "/properties" },
      { label: "Latest Projects",  href: "/projects/latest" },
      { label: "Upcoming",         href: "/projects/upcoming" },
      { label: "Exclusive",        href: "/projects/exclusive" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Home Loan",         href: "/services#loan" },
      { label: "Legal Help",        href: "/services#legal" },
      { label: "Site Visit",        href: "/services#visit" },
      { label: "Investment Advice", href: "/services#invest" },
    ],
  },
  {
    label: "Locations",
    href: "/locations/noida",
    dropdown: [
      { label: "Noida",             href: "/locations/noida" },
      { label: "Greater Noida",     href: "/locations/greater-noida" },
      { label: "Yamuna Expressway", href: "/locations/yamuna-expressway" },
      { label: "Delhi NCR",         href: "/locations/delhi" },
      { label: "Dubai",             href: "/locations/dubai" },
    ],
  },
  { label: "Blog",        href: "/blog" },
  { label: "Contact Us",  href: "/contact" },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll progress
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;
    const update = () => {
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${dh > 0 ? window.scrollY / dh : 0})`;
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <div id="scroll-progress" />

      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-[0_4px_28px_rgba(0,0,0,.12)]"
            : "bg-white shadow-[0_2px_16px_rgba(0,0,0,.07)]"
        }`}
      >
        <div className="max-content">
          <div className="flex items-center justify-between h-[72px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center flex-shrink-0 group">
              <img
                src="/logos/company/logo-dark@2x.png"
                alt="Greenaria Buildtech"
                className="h-[48px] w-auto object-contain transition-opacity duration-300 group-hover:opacity-85"
              />
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href={link.href} className="nav-link whitespace-nowrap">
                    {link.label}
                    {link.dropdown && (
                      <svg className="inline ml-1 -mt-0.5 transition-transform duration-200 group-hover:rotate-180" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <div className={`absolute top-full left-0 w-52 bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,.12)] border border-gray-100 py-2 z-50 transition-all duration-200 origin-top ${activeDropdown === link.label ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
                      {link.dropdown.map((item) => (
                        <Link key={item.label} href={item.href}
                          className="block px-4 py-2.5 text-[13px] font-medium text-gray-700 hover:text-[#2e7d32] hover:bg-[#f5faf5] transition-colors"
                          style={{ fontFamily:"DM Sans,sans-serif" }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* ── Phone + Mobile toggle ── */}
            <div className="flex items-center gap-3">
              <a href="tel:+918218035989"
                className="hidden lg:flex items-center gap-2 transition-colors duration-300 hover:text-[#2e7d32]"
                style={{ fontFamily:"Montserrat,sans-serif", fontWeight:700, fontSize:14, color:"#0d2137" }}
              >
                <div className="w-8 h-8 rounded-full bg-[#e8f5e9] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.84a16 16 0 006.24 6.24l1.42-1.34a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                +91 8218035989
              </a>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden p-2 flex flex-col gap-[5px]"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <span className="block w-6 h-0.5 bg-navy rounded" />
                <span className="block w-6 h-0.5 bg-navy rounded" />
                <span className="block w-4 h-0.5 bg-navy rounded" />
              </button>
            </div>

          </div>
        </div>
      </header>

      <MobileMenu links={navLinks} open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
