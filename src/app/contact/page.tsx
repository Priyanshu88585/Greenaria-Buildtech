// src/app/contact/page.tsx

import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Greenaria Buildtech",
  description:
    "Get in touch with Greenaria Buildtech for property enquiries, real estate investment consultation and site visit bookings.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* HEADER */}

      <section className="bg-gray-100 py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>

          <p className="text-gray-600 max-w-2xl">
            Have questions about properties or investments? Our real estate
            experts are here to help you.
          </p>
        </Container>
      </section>

      {/* CONTACT SECTION */}

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-16">
            {/* CONTACT FORM */}

            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

              <ContactForm />
            </div>

            {/* CONTACT DETAILS */}

            <div>
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>

                  <p>+91 9876543210</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800">Email</p>

                  <p>info@greenariabuildtech.com</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800">Office Address</p>

                  <p>Sector 113, Dwarka Expressway Gurgaon, Haryana, India</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MAP SECTION */}

      <section className="pb-20">
        <Container>
          <h2 className="text-2xl font-semibold mb-6">Our Location</h2>

          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow">
            <iframe
              src="https://maps.google.com/maps?q=gurgaon&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
