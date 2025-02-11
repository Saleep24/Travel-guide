"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Menu, ArrowRight, Linkedin, Instagram, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const allExperiences = [
    {
      name: "Street Art Tours in Berlin",
      link: "/experiences/street-art-berlin",
      category: "Berlin",
    },
    {
      name: "Hamburg Fish Market",
      link: "/experiences/hamburg-fish-market",
      category: "Hamburg",
    },
    {
      name: "Harbor Boat Trip",
      link: "/experiences/harbor-boat-trip",
      category: "Hamburg",
    },
    {
      name: "Alley Culture in Lübeck",
      link: "/experiences/lubeck-alley-culture",
      category: "Lübeck",
    },
    {
      name: "Lubeck Christmas Market",
      link: "/experiences/lubeck-christmas-market",
      category: "Lübeck",
    },
    {
      name: "Underground Culture of St-Pauli",
      link: "/experiences/stpauli-underground",
      category: "Hamburg",
    },
  ]

  const filteredExperiences = allExperiences.filter((exp) =>
    exp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exp.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" : "text-white"
              }`}
            >
              GenZ Travel Guide
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/lubeck"
                className={`transition-colors duration-300 ${isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-gray-200"}`}
              >
                Lübeck
              </Link>
              <Link
                href="/hamburg"
                className={`transition-colors duration-300 ${isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-gray-200"}`}
              >
                Hamburg
              </Link>
              <Link
                href="/berlin"
                className={`transition-colors duration-300 ${isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-gray-200"}`}
              >
                Berlin
              </Link>
              <Link
                href="/contact"
                className={`transition-colors duration-300 ${isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-gray-200"}`}
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 rounded-full transition-colors duration-300 ${isScrolled ? "hover:bg-gray-100" : "hover:bg-white/20"}`}
                aria-label="Search experiences"
              >
                <Search className={`w-5 h-5 ${isScrolled ? "text-gray-600" : "text-white"}`} />
              </button>
              <button
                className={`md:hidden p-2 rounded-full transition-colors duration-300 ${isScrolled ? "hover:bg-gray-100" : "hover:bg-white/20"}`}
              >
                <Menu className={`w-5 h-5 ${isScrolled ? "text-gray-600" : "text-white"}`} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden"
            >
              <div className="p-4 border-b flex items-center">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search experiences, cities, or attractions..."
                  className="flex-1 text-lg outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <div className="max-h-[60vh] overflow-y-auto">
                {searchQuery && (
                  <div className="p-2">
                    {filteredExperiences.length === 0 ? (
                      <p className="text-gray-500 text-center py-4">No experiences found</p>
                    ) : (
                      <div className="space-y-2">
                        {filteredExperiences.map((exp) => (
                          <Link
                            key={exp.link}
                            href={exp.link}
                            className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setIsSearchOpen(false)}
                          >
                            <div className="font-medium text-gray-900">{exp.name}</div>
                            <div className="text-sm text-gray-500">{exp.category}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <Image
          src="/images/main.jpg?height=1080&width=1920"
          alt="Northern Germany Cityscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Gen Z Guide to Northern Germany</h1>
          <p className="text-xl md:text-xl mb-8 max-w-2xl mx-auto">
            Experience Lübeck, Hamburg, and Berlin through the lens of a young traveler so you too can find the top
            Insta spots and experience the most exciting opportunities Northern Germany has to offer
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
          >
            Know More About Me
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Post Worthy Insta Spots Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Post Worthy Insta Spots</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: "Lübeck",
                description: "Medieval charm meets modern culture in this UNESCO World Heritage site",
                image: "/images/lubeck.jpg?height=600&width=800",
                link: "/lubeck",
              },
              {
                city: "Hamburg",
                description: "Harbor life, street art, and vibrant nightlife in Germany's gateway to the world",
                image: "/images/hamburg.jpg?height=600&width=800",
                link: "/hamburg",
              },
              {
                city: "Berlin",
                description: "Underground scenes, street art, and cultural revolution in the capital",
                image: "/images/main.jpg?height=600&width=800",
                link: "/berlin",
              },
            ].map((city) => (
              <motion.div key={city.city} className="group relative rounded-xl overflow-hidden" whileHover={{ y: -5 }}>
                <div className="aspect-[4/5] relative">
                  <Image
                    src={city.image || "/placeholder.svg"}
                    alt={city.city}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{city.city}</h3>
                    <p className="text-white/90 mb-4">{city.description}</p>
                    <Link
                      href={city.link}
                      className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
                    >
                      Explore more <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Must-Try Experiences Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Must-Try Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Street Art Tours in Berlin",
                image: "/images/berlin-street-art.PNG",
                link: "/experiences/street-art-berlin",
              },
              { 
                name: "Hamburg Fish Market", 
                image: "/images/hamburg-fish-market.jpg",
                link: "/experiences/hamburg-fish-market"
              },
              { 
                name: "Harbor Boat Trip", 
                image: "/images/harbor-boat.JPEG",
                link: "/experiences/harbor-boat-trip"
              },
              { 
                name: "Alley Culture in Lübeck", 
                image: "/images/lubeck-alley.jpg",
                link: "/experiences/lubeck-alley-culture"
              },
              { 
                name: "Lubeck Christmas Market", 
                image: "/images/lubeck-christmas.jpg",
                link: "/experiences/lubeck-christmas-market"
              },
              { 
                name: "Underground Culture of St-Pauli", 
                image: "/images/stpauli.jpg",
                link: "/experiences/stpauli-underground"
              },
            ].map((experience) => (
              <motion.div
                key={experience.name}
                className="relative h-64 rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <Link href={experience.link || "#"}>
                  <Image
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-semibold text-white">{experience.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gen Z Travel Tips Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Gen Z Travel Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Navigation Made Easy",
                tips: ["Offline maps", "Public transport apps", "Best photo spots"],
              },
              {
                title: "Money Savers",
                tips: ["Student discounts", "Free walking tours", "Budget food spots"],
              },
              {
                title: "Local Experiences",
                tips: ["Language basics", "Cultural etiquette", "Hidden gems"],
              },
              {
                title: "Tech Essentials",
                tips: ["Best travel apps", "WiFi spots", "Power adapter tips"],
              },
              {
                title: "Sustainable Travel",
                tips: ["Eco-friendly transport", "Zero-waste tips", "Green accommodations"],
              },
              {
                title: "Social Media Guide",
                tips: ["Instagram spots", "Content creation", "Local hashtags"],
              },
            ].map((section) => (
              <motion.div
                key={section.title}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.tips.map((tip) => (
                    <li key={tip} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">GenZ Travel Guide</h3>
              <p className="text-gray-400">Exploring the world, one city at a time.</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/saleepshrestha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/genz_travel_guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2025 Saleep Shrestha. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}

