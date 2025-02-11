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
          src="/images/lubeck-alley.jpg"
          alt="Lübeck Alley Culture"
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
          Lübeck&apos;s Hidden Alleys
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl text-gray-200 drop-shadow-md mb-8"
        >
          Discover the Secret Passages of Medieval Lübeck
        </motion.p>
      </motion.div>
    </section>
  )
}

// Main Component
export default function LubeckAlleyCulture() {
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
                Lübeck&apos;s famous Gänge und Höfe (alleys and courtyards) are like stepping into a medieval storybook. These narrow passages, some barely wide enough for two people to pass, were once home to craftsmen and workers. Today, they&apos;re one of the most Instagram-worthy spots in Northern Germany!
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/lubeck-alley-wide.jpg" alt="Lübeck Alley Overview" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                There are over 80 of these historic passageways in Lübeck&apos;s old town, each with its own character and story. The most famous ones include the Füchtingshof and Glandorps Gang, but my personal favorite is the colorful Engelsgrube with its perfectly preserved medieval houses.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/fuchtingshof.jpg" alt="Füchtingshof" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/engelsgrube.jpg" alt="Engelsgrube" fill className="object-cover" />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                Pro tip: The best time for photos is early morning or during golden hour. The way the light plays through these narrow passages creates amazing shadows and highlights. Plus, you&apos;ll have these picturesque spots mostly to yourself!
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/alley-morning.jpg" alt="Morning Light in Alley" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                Many of these alleys are still residential areas, so remember to be respectful when taking photos. Some courtyards are private, but many are open to the public and even house cute cafes and artisan shops. The contrast between the historic architecture and modern life is what makes these spaces so special.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/alley-cafe.jpg" alt="Alley Cafe" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/alley-shop.jpg" alt="Artisan Shop" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/alley-life.jpg" alt="Modern Life in Alleys" fill className="object-cover" />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                You can easily explore these alleys on your own, but I recommend joining one of the guided tours (available in English) to learn about their fascinating history. The tourist information center at the market square offers maps marking all the accessible alleys and courtyards.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/alley-map.jpg" alt="Alley Tour Map" fill className="object-cover" />
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