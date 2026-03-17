"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 1500); return () => clearTimeout(t); }, []);

  return (
    <motion.div initial={{ opacity:0, x:50 }} animate={{ opacity: visible?1:0, x: visible?0:50 }}
      transition={{ duration:.5 }} className="fixed bottom-7 right-5 z-[9999] flex flex-col gap-3">
      <a href="https://wa.me/918218035989" target="_blank" rel="noreferrer"
        className="float-wa relative" aria-label="WhatsApp">
        <span className="ping-ring" />
        <svg className="relative z-10" width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.26 4.8L2.05 22l5.45-1.43c1.37.73 2.94 1.15 4.54 1.15 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.835 9.835 0 0012.04 2zm.01 1.67c2.2 0 4.27.86 5.82 2.41a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32A8.19 8.19 0 013.8 11.9c0-4.54 3.7-8.23 8.25-8.23zM8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1.01 2.56.12.17 1.75 2.67 4.23 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.24-.01-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.24-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.77-1.83-.2-.48-.41-.42-.56-.43-.14 0-.3-.01-.47-.01z"/>
        </svg>
      </a>
      <a href="tel:+918218035989" className="float-ph" aria-label="Call">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.84a16 16 0 006.24 6.24l1.42-1.34a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
      </a>
    </motion.div>
  );
}
