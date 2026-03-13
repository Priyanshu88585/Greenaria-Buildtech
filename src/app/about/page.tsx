import Container from "@/components/layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Greenaria Buildtech",
  description:
    "Greenaria Buildtech is a premium real estate consultancy helping clients find the best residential, commercial and investment properties.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* HERO */}

      <section className="bg-gray-100 py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Greenaria Buildtech
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              Greenaria Buildtech is a leading real estate consultancy
              specializing in residential, commercial and investment properties.
              Our mission is to help clients find the best properties with
              complete transparency and expert guidance.
            </p>
          </div>
        </Container>
      </section>

      {/* COMPANY OVERVIEW */}

      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                At Greenaria Buildtech we connect property buyers with the best
                real estate projects across premium locations. Our team works
                with top developers and builders to ensure that every property
                we recommend meets the highest standards of quality and
                investment potential.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Whether you are searching for a luxury apartment, a commercial
                investment or a residential plot, we provide complete support
                from property discovery to final purchase.
              </p>
            </div>

            <div className="bg-gray-200 h-[350px] rounded-xl" />
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE US */}

      <section className="bg-gray-50 py-24">
        <Container>
          <h2 className="text-3xl font-semibold text-center mb-16">
            Why Choose Greenaria Buildtech
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Verified Properties
              </h3>

              <p className="text-gray-600">
                We work only with trusted builders and verified real estate
                projects to ensure complete transparency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Expert Advisors</h3>

              <p className="text-gray-600">
                Our experienced consultants guide you through every step of the
                property buying journey.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Best Investment Options
              </h3>

              <p className="text-gray-600">
                We help investors find high-growth properties with strong
                appreciation potential.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* COMPANY STATS */}

      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-4 gap-10 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600">500+</p>

              <p className="text-gray-600 mt-2">Properties Listed</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-blue-600">200+</p>

              <p className="text-gray-600 mt-2">Happy Clients</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-blue-600">50+</p>

              <p className="text-gray-600 mt-2">Trusted Builders</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-blue-600">10+</p>

              <p className="text-gray-600 mt-2">Years Experience</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
