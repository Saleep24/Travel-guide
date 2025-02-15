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
          Hamburg Boat Tour
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
                During our two week honors program in Northern Germany, the Hamburg Harbor boat tour was one of the most magical thing I had experienced. What made it truly special was how Hamburg welcomed us with a rare combination of snow and rainbow. This rare combination created an absolutely perfect backdrop for our group tour, and awesome intagram pictures.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/harbor-view.jpeg" alt="Hamburg Harbor View" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                During the harbor tour, our guide shared fascinating facts about how the port has evolved, one was about the container cranes. Each of these massive structures costs around 40 million euros, but what really caught my attention was learning that what once required 40 workers can now be operated by a single person. It&apos;s amazing to think about how technology has transformed this historic port, though it also made me reflect on how automation impacts employment and everything nowadays.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/harbor-us.jpeg" alt="Speicherstadt" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/cool-ship.jpeg" alt="Container Terminal" fill className="object-cover" />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                What really brought happy to me during harbor tour was spotting cruise ships decorated with Lion King and other Disney characters! These massive boats added a touch of industrial and western landscape. Learning that Hamburg&apos;s port ranks 3rd in Europe and 26th worldwide gave me perspective on its global significance. The guide also explained how Germans had to continuously deepen the river to accommodate larger ships, including impressive cruise ships that can carry up to 4,000 passengers, though that&apos;s still smaller than some U.S. ships that can hold 7,000 passengers!
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/rainbow.jpeg" alt="Cruise Ships" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                One of the most intriguing parts was learning about the port&apos;s multicultural history, particularly the story of Chinese immigrants in Hamburg&apos;s maritime past. They were paid one-third of what German workers earned, but interestingly, the used to save in pounds rather than marks (before German&apos;s currency), and that led many of them became wealthy after Germany&apos;s hyperinflation. These stories of adaptation and survival also highlights the cultures and people harbor invited in Germany.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/ship-big.jpeg" alt="Container Ships" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/harbor-city.jpeg" alt="Harbor Cranes" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/lion-king.jpeg" alt="Harbor Rainbow" fill className="object-cover" />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                While watching the automated cranes efficiently move containers, our guide explained how global competition has shaped the port&apos;s development. For instance, while China heavily subsidizes shipbuilding, Germany has taken a different approach, focusing on efficiency and technology to stay competitive despite higher labor costs.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/us-harbor-all.jpeg" alt="Port Activity" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                The magical combination of snow and rainbow seemed to perfectly symbolize Hamburg&apos;s ability to blend seemingly contradictory elements into something beautiful and harmonious.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/harbor-from-boat.jpeg" alt="Boat Cafe" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/harbor-crane.jpeg" alt="Harbor Life" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/me-harbor-inship.jpeg" alt="Elbphilharmonie from Water" fill className="object-cover" />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                Getting there is easy, Take the U3 or S1/S3 to Landungsbrücken station. The boat tour companies are right there at the harbor. I recommend booking in advance during peak season, but you can usually get tickets on the spot during off-peak times. Also I recommend to explore harbor market to get some local food and souvenirs.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/big-ship-harbor.jpeg" alt="Landungsbrücken" fill className="object-cover" />
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