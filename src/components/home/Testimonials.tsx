// src/components/home/Testimonials.tsx

import Container from "../layout/Container";
import Card from "../ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    message:
      "Amazing experience buying property through Greenaria Buildtech. The process was smooth and professional.",
    image: "/images/user1.jpg",
  },
  {
    name: "Anita Verma",
    message:
      "Excellent support and guidance for real estate investment. Highly professional team.",
    image: "/images/user2.jpg",
  },
  {
    name: "Vikram Mehta",
    message:
      "Highly recommended consultancy. They helped me find the perfect commercial property.",
    image: "/images/user3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {/* HEADER */}

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Client Testimonials
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Hear what our clients say about their experience with Greenaria
            Buildtech.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="p-8 hover:shadow-xl transition duration-300"
            >
              {/* STARS */}

              <div className="flex mb-4 text-yellow-500">
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
              </div>

              {/* MESSAGE */}

              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                "{t.message}"
              </p>

              {/* USER */}

              <div className="flex items-center gap-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />

                <span className="font-semibold text-sm">{t.name}</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
