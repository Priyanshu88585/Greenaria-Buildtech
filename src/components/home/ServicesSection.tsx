// src/components/home/ServicesSection.tsx

import Container from "../layout/Container";
import Card from "../ui/card";
import { Home, Building2, LineChart } from "lucide-react";

const services = [
  {
    title: "Buy Property",
    desc: "Find your dream home with expert assistance and curated property listings.",
    icon: Home,
  },
  {
    title: "Sell Property",
    desc: "List and sell your property quickly with our powerful marketing network.",
    icon: Building2,
  },
  {
    title: "Investment Consulting",
    desc: "Get expert real estate investment strategies for long-term growth.",
    icon: LineChart,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {/* SECTION HEADER */}

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Greenaria Buildtech provides complete real estate solutions for
            buyers, sellers, and investors.
          </p>
        </div>

        {/* SERVICES GRID */}

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="p-8 text-center hover:shadow-xl transition duration-300"
              >
                {/* ICON */}

                <div className="flex justify-center mb-5">
                  <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
                    <Icon size={28} />
                  </div>
                </div>

                {/* TITLE */}

                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

                {/* DESCRIPTION */}

                <p className="text-sm text-gray-600">{service.desc}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
