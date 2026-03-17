"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MobileMenu({ links, open, onClose }) {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-[1001] transition-opacity duration-300 lg:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[1002] shadow-2xl transition-transform duration-300 lg:hidden flex flex-col ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Link href="/" onClick={onClose}>
            <img
              src="/logos/company/logo-dark@2x.png"
              alt="Greenaria Buildtech"
              className="h-[36px] w-auto object-contain"
            />
          </Link>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-3">
          {links.map((link) => (
            <div key={link.label}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setExpanded(expanded === link.label ? null : link.label)}
                    className="w-full flex items-center justify-between py-3 border-b border-gray-50 text-left"
                    style={{ fontFamily:"Montserrat,sans-serif", fontWeight:600, fontSize:13, color:"#0d2137" }}
                  >
                    {link.label}
                    <svg className={`transition-transform duration-200 ${expanded === link.label ? "rotate-180" : ""}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  {expanded === link.label && (
                    <div className="pl-4 pb-2">
                      {link.dropdown.map((item) => (
                        <Link key={item.label} href={item.href} onClick={onClose}
                          className="block py-2 text-[13px] text-gray-600 hover:text-[#2e7d32] transition-colors"
                          style={{ fontFamily:"DM Sans,sans-serif" }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={link.href} onClick={onClose}
                  className="block py-3 border-b border-gray-50 transition-colors hover:text-[#2e7d32]"
                  style={{ fontFamily:"Montserrat,sans-serif", fontWeight:600, fontSize:13, color:"#0d2137" }}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="p-4 border-t border-gray-100 space-y-2">
          <a href="tel:+918218035989"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#2e7d32] text-white font-heading font-bold text-[13px] tracking-[.06em] uppercase"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.84a16 16 0 006.24 6.24l1.42-1.34a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            +91 8218035989
          </a>
          <a href="https://wa.me/918218035989"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25d366] text-white font-heading font-bold text-[13px] tracking-[.06em] uppercase"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
