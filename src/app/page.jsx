import Hero from "../components/home/Hero"
import SearchBar from "../components/home/SearchBar"
import FeaturedProjects from "../components/home/FeaturedProjects"
import LatestProjects from "../components/home/LatestProjects"
import Locations from "../components/home/Locations"
import PropertyTypes from "../components/home/PropertyTypes"
import Partners from "../components/home/Partners"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Property Search */}
      <SearchBar />

      {/* Exclusive Projects */}
      <FeaturedProjects />

      {/* Latest Projects */}
      <LatestProjects />

      {/* Locations */}
      <Locations />

      {/* Property Types */}
      <PropertyTypes />

      {/* Developer Partners */}
      <Partners />
    </>
  )
}