// src/components/layout/Footer.tsx

import Link from "next/link";
import Container from "./Container";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <Container className="py-16 grid gap-10 md:grid-cols-4">
        {/* BRAND */}

        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Greenaria Buildtech
          </h3>

          <p className="text-sm leading-relaxed">
            Your trusted partner for premium real estate investments,
            residential projects and commercial property consultancy.
          </p>

          {/* SOCIAL */}

          <div className="flex gap-4 mt-6">
            <a className="hover:text-white transition">
              <Facebook size={18} />
            </a>

            <a className="hover:text-white transition">
              <Instagram size={18} />
            </a>

            <a className="hover:text-white transition">
              <Linkedin size={18} />
            </a>

            <a className="hover:text-white transition">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>

          <div className="flex flex-col gap-2 text-sm">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>

            <Link href="/properties" className="hover:text-white transition">
              Properties
            </Link>

            <Link href="/services" className="hover:text-white transition">
              Services
            </Link>

            <Link href="/blog" className="hover:text-white transition">
              Blog
            </Link>

            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>

        {/* PROPERTY TYPES */}

        <div>
          <h4 className="text-white font-semibold mb-4">Property Types</h4>

          <div className="flex flex-col gap-2 text-sm">
            <Link
              href="/properties/residential"
              className="hover:text-white transition"
            >
              Residential
            </Link>

            <Link
              href="/properties/commercial"
              className="hover:text-white transition"
            >
              Commercial
            </Link>

            <Link
              href="/properties/plots"
              className="hover:text-white transition"
            >
              Plots
            </Link>
          </div>
        </div>

        {/* CONTACT */}

        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>

          <div className="text-sm space-y-2">
            <p>Email: info@greenaria.com</p>

            <p>Phone: +91 99999 99999</p>

            <p>
              Gurgaon, Haryana
              <br />
              India
            </p>
          </div>
        </div>
      </Container>

      {/* BOTTOM BAR */}

      <div className="border-t border-gray-800">
        <Container className="py-5 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>
            © {new Date().getFullYear()} Greenaria Buildtech. All rights
            reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
