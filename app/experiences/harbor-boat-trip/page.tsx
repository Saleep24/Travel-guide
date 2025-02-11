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
          src="/images/harbor-boat.JPEG"
          alt="Hamburg Harbor Boat Trip"
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
          Hamburg Harbor Boat Tour
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl text-gray-200 drop-shadow-md mb-8"
        >
          Experience Europe&apos;s Second-Largest Port from the Water
        </motion.p>
      </motion.div>
    </section>
  )
}

// Main Component
export default function HarborBoatTrip() {
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
                One of the best ways to experience Hamburg is from the water. The harbor boat tour offers a unique perspective of Germany&apos;s largest port and second-largest city. As a Gen Z traveler, I found this experience not just informative but incredibly Instagram-worthy!
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/harbor-view.jpg" alt="Hamburg Harbor View" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                The tour takes you through the historic Speicherstadt (warehouse district) with its stunning red-brick architecture, past modern container terminals, and gives you a close-up view of massive cargo ships. The contrast between old and new Hamburg is absolutely fascinating.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/speicherstadt.jpg" alt="Speicherstadt" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/container-terminal.jpg" alt="Container Terminal" fill className="object-cover" />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                Pro tip: Try to catch a sunset tour if possible. The lighting is perfect for photos, and watching the sun set behind the cranes and ships creates an unforgettable atmosphere. Don&apos;t forget to bring a light jacket - it can get quite breezy on the water!
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/harbor-sunset.jpg" alt="Harbor Sunset" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                The tours typically last about 1-2 hours and depart from Landungsbrücken. Prices are reasonable (around €18-25), and many tours offer student discounts. Most boats have both indoor and outdoor seating, and some even have onboard cafes where you can grab a drink or snack.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/boat-cafe.jpg" alt="Boat Cafe" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/harbor-life.jpg" alt="Harbor Life" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/elbphilharmonie-water.jpg" alt="Elbphilharmonie from Water" fill className="object-cover" />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                Getting there is easy: Take the U3 or S1/S3 to Landungsbrücken station. The boat tour companies are right there at the piers. I recommend booking in advance during peak season (summer months and weekends), but you can usually get tickets on the spot during off-peak times.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/landungsbrucken.jpg" alt="Landungsbrücken" fill className="object-cover" />
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