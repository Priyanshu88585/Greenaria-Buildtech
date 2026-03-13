// src/components/home/BuildersSection.tsx

import Container from "../layout/Container";
import Image from "next/image";
import Link from "next/link";

const builders = [
  {
    name: "Greenaria Developers",
    logo: "/builders/builder1.png",
  },
  {
    name: "Urban Estate",
    logo: "/builders/builder2.png",
  },
  {
    name: "Future Infra",
    logo: "/builders/builder3.png",
  },
  {
    name: "Prime Realty",
    logo: "/builders/builder4.png",
  },
];

export default function BuildersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {/* HEADER */}

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Trusted Builders</h2>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            We collaborate with India's most trusted builders to provide premium
            residential and commercial projects.
          </p>
        </div>

        {/* BUILDER GRID */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {builders.map((builder) => (
            <Link
              key={builder.name}
              href="#"
              className="group bg-white border rounded-xl p-6 flex items-center justify-center transition hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-4">
                {/* LOGO */}

                <Image
                  src={builder.logo}
                  alt={builder.name}
                  width={120}
                  height={60}
                  className="object-contain opacity-80 group-hover:opacity-100 transition"
                />

                {/* NAME */}

                <span className="text-sm font-medium text-gray-700 text-center">
                  {builder.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
