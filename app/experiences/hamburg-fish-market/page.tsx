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
          src="/images/hamburg-fish-market.jpg"
          alt="Hamburg Fish Market"
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
          Hamburg Fish Market Experience
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl text-gray-200 drop-shadow-md mb-8"
        >
          A Sunday morning tradition since 1703
        </motion.p>
      </motion.div>
    </section>
  )
}

// Main Component
export default function HamburgFishMarket() {
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
                Let me tell you about one of Hamburg's most iconic experiences - the historic Fish Market. Every Sunday morning, while most of the city is still sleeping, this 300-year-old tradition comes alive at the crack of dawn. As someone who's not typically a morning person, I can tell you that getting up at 5 AM for this was absolutely worth it! The energy, the atmosphere, and the authentic Hamburg experience make it an unforgettable adventure.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/fish-market-aerial.jpg" alt="Hamburg Fish Market Aerial View" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                The market is a sensory overload in the best possible way. The loud calls of the market vendors, known as Marktschreier or "market criers," echo through the historic halls as they playfully compete for customers' attention. These guys aren't just sellers - they're entertainers! They throw fish through the air, crack jokes, and create an atmosphere that's part market, part show. I watched in awe as one vendor packed a box with fresh fish, fruits, and vegetables, then auctioned it off to the crowd with theatrical flair.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/fish-vendor.jpg" alt="Fish Market Vendor" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/market-crowd.jpg" alt="Market Crowd" fill className="object-cover" />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                What makes this experience truly special is how it brings together different worlds. You'll see party-goers from the nearby Reeperbahn finishing their night out alongside early-rising families and tourists. Everyone gathers in the historic Fischauktionshalle (Fish Auction Hall) - a beautiful Art Nouveau building from 1894 - where live bands play jazz and people dance while enjoying their fresh fish sandwiches and early morning beers.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/auction-hall.jpg" alt="Fish Auction Hall Interior" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                The market isn't just about fish - though the fresh seafood is incredible. You'll find everything from local fruits and vegetables to flowers, clothing, and souvenirs. I couldn't resist trying the traditional Fischbrötchen (fish sandwich) - a local specialty that tastes even better at 6 AM! The combination of fresh fish, crispy bread, and traditional toppings is simply unbeatable.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/fish-sandwich.jpg" alt="Traditional Fischbrötchen" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/market-produce.jpg" alt="Fresh Produce" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/market-flowers.jpg" alt="Flower Stand" fill className="object-cover" />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                Getting to the Fish Market is easy - it's located in the St. Pauli district, right by the Elbe River. Take the U3 to Landungsbrücken or S1/S3 to Reeperbahn station. The market runs every Sunday from 5 AM to 9:30 AM (7 AM to 9:30 AM in winter). My tip? Arrive early to catch the best atmosphere and watch the sunrise over the harbor - it's pure magic!
              </p>

              <p className="text-lg text-gray-700">
                This isn't just a tourist attraction; it's a living piece of Hamburg's maritime culture. The tradition, the people, the food, and the early morning adventure combine to create an experience that captures the true spirit of this historic port city. Even if you're not a morning person, trust me - this is one early wake-up call you won't regret!
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/harbor-sunrise.jpg" alt="Hamburg Harbor Sunrise" fill className="object-cover" />
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