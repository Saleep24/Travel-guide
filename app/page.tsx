"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, BookmarkPlus, Menu, ArrowRight, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              GenZ Travel Guide
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/lubeck" className="text-gray-600 hover:text-gray-900">
                Lübeck
              </Link>
              <Link href="/hamburg" className="text-gray-600 hover:text-gray-900">
                Hamburg
              </Link>
              <Link href="/berlin" className="text-gray-600 hover:text-gray-900">
                Berlin
              </Link>
              <Link href="/tips" className="text-gray-600 hover:text-gray-900">
                Travel Tips
              </Link>
              <Link href="/contact/form.tsx" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <BookmarkPlus className="w-5 h-5" />
              </button>
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Gen Z Guide to Northern Germany</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience Lübeck, Hamburg, and Berlin through the lens of a young traveler
          </p>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore Cities</h2>
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

      {/* Tech Tips Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Gen Z Travel Tips</h2>
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

{/* Featured Experiences */}
<section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Must-Try Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Street Art Tours in Berlin", image: "/images/berlin-street-art.PNG" },
              { name: "Hamburg Fish Market", image: "/images/hamburg-fish-market.jpg" },
              { name: "Lübeck's Marzipan Culture", image: "/images/lubeck-marzipan.jpg" },
              { name: "Alley Culture in Lübeck", image: "/images/lubeck-alley.jpg" },
              { name: "Lubeck Christmas Market", image: "/images/lubeck-christmas.jpg" },
              { name: "Underground culture of St-Pauli", image: "/images/stpauli.jpg" }
            ].map((experience) => (
              <motion.div
                key={experience.name}
                className="relative h-64 rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">© 2025 Saleep Shrestha. All rights reserved.</div>
            <div className="flex items-center space-x-4">
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
              <a
                href="https://www.linkedin.com/in/saleepshrestha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

