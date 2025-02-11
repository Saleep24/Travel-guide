"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, ArrowLeft, Instagram } from "lucide-react"

// Hero Section
function HeroSection() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.2])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
        <Image
          src="/images/stpauli.jpg"
          alt="St. Pauli Underground Culture"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <motion.div style={{ opacity }} className="absolute inset-0 bg-black/30" />
      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold text-white tracking-wider drop-shadow-lg mb-6"
        >
          St. Pauli Underground Scene
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl text-gray-200 drop-shadow-md mb-8"
        >
          Hamburg&apos;s Most Vibrant and Alternative District
        </motion.p>
      </motion.div>
    </section>
  )
}

// Main Component
export default function StPauliUnderground() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Navbar */}
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
            <Link
              href="/"
              className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
                isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
              }`}
            >
              <span className="flex items-center">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </span>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="bg-gradient-to-b from-gray-50 to-white">
        <HeroSection />

        {/* Content Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700">
                St. Pauli is Hamburg&apos;s most colorful and diverse neighborhood, known for its alternative culture, street art, and vibrant nightlife. This is where counterculture meets creativity, and every street corner tells a story. As a Gen Z traveler, you&apos;ll love the authentic, raw energy of this unique district.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/stpauli-street.jpg" alt="St. Pauli Street Scene" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                The heart of St. Pauli is the infamous Reeperbahn, but the real magic happens in the side streets. Check out Wohlwillstraße and Paul-Roosen-Straße for their amazing street art, indie boutiques, and alternative cafes. The area around Hafenstraße is particularly known for its political murals and punk culture heritage.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/stpauli-art.jpg" alt="Street Art" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/stpauli-cafe.jpg" alt="Alternative Cafe" fill className="object-cover" />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                Pro tip: Visit the Flohschanze flea market on Saturdays - it&apos;s where locals sell vintage clothes, vinyl records, and unique crafts. The area around the market (Schanzenviertel) is full of cool bars and restaurants perfect for that authentic Hamburg experience.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/flohschanze.jpg" alt="Flohschanze Market" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                Music lovers shouldn&apos;t miss the legendary Molotow Club or the Golden Pudel Club - these venues have launched countless indie bands. For a unique photo op, head to the Park Fiction with its artificial palm trees and amazing harbor views - it&apos;s a symbol of successful community activism and a popular spot for locals.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/molotow.jpg" alt="Molotow Club" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/park-fiction.jpg" alt="Park Fiction" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/pudel-club.jpg" alt="Golden Pudel Club" fill className="object-cover" />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                Getting there is easy: Take the U3 to St. Pauli or Feldstraße station. The area is most alive in the evenings and at night, but the street art and cafes can be enjoyed during the day too. Remember to be respectful when taking photos - this is a living, breathing neighborhood with a strong sense of community.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/stpauli-night.jpg" alt="St. Pauli at Night" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">GenZ Travel Guide</h3>
                <p className="text-gray-400"></p>
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
                    href="https://www.instagram.com/saleep.shrestha"
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
    </>
  )
} 