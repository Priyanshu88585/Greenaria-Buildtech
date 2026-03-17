import Header         from "@/components/layout/Header";
import Footer         from "@/components/layout/Footer";
import Hero           from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Services       from "@/components/home/Services";
import SmartTools     from "@/components/home/SmartTools";
import Partners       from "@/components/home/Partners";
import About          from "@/components/home/About";
import Stats          from "@/components/home/Stats";
import PropertyTypes  from "@/components/home/PropertyTypes";
import Locations      from "@/components/home/Locations";
import LatestProjects from "@/components/home/LatestProjects";
import BlogSection    from "@/components/home/BlogSection";
import Testimonials   from "@/components/home/Testimonials";
import Contact        from "@/components/home/Contact";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export const metadata = {
  title: "Best Real Estate Developer in Gurgaon | Greenaria BuildTech",
  description: "Greenaria BuildTech – Trusted eco-luxury real estate developer in Gurgaon, Delhi NCR & Dubai. Premium RERA-verified residential & commercial properties. 10+ years experience, 8000+ successful transactions.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <Services />
        <SmartTools />
        <Partners />
        <About />
        <Stats />
        <PropertyTypes />
        <Locations />
        <LatestProjects />
        <BlogSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
