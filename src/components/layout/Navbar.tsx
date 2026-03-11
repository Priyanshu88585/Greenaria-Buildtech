// src/components/layout/Navbar.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "./Container";
import Button from "../ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <Container className="flex items-center justify-between py-4">
        {/* LOGO */}

        <Link href="/" className="text-xl font-bold text-green-600">
          Greenaria Buildtech
        </Link>

        {/* DESKTOP NAV */}

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-green-600 transition">
            Home
          </Link>

          <Link href="/properties" className="hover:text-green-600 transition">
            Properties
          </Link>

          <Link href="/services" className="hover:text-green-600 transition">
            Services
          </Link>

          <Link href="/blog" className="hover:text-green-600 transition">
            Blog
          </Link>

          <Link href="/about" className="hover:text-green-600 transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-green-600 transition">
            Contact
          </Link>

          {/* CTA */}

          <Button className="ml-4">Enquire Now</Button>
        </nav>

        {/* MOBILE BUTTON */}

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* MOBILE MENU */}

      {open && (
        <div className="md:hidden border-t bg-white">
          <Container className="flex flex-col gap-4 py-6 text-sm font-medium">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/properties" onClick={() => setOpen(false)}>
              Properties
            </Link>

            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>

            <Link href="/blog" onClick={() => setOpen(false)}>
              Blog
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <Button className="mt-2">Enquire Now</Button>
          </Container>
        </div>
      )}
    </header>
  );
}
