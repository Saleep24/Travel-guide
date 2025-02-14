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
                Walking through Lübeck&apos;s famous alleys and courtyards was one of the most unique experiences I had in Germany, and I highly recommend you check it out when you visit. These narrow passages feel like something straight out of a fairy tale, but they also tell a fascinating story about how Lübeck adapted to its growing population during its golden age as the capital of the Hanseatic League. Since the city is surrounded by water, they had to get creative, so they built a network of tight alleys and courtyards to house the working-class residents of this wealthy trading hub.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/lubeck-alley-opening.jpeg" alt="Lübeck Alley Overview" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                What fascinated me the most was how these alleys have changed over time. Originally built for the working class, today they&apos;ve become highly desirable residences for people who want to experience traditional alley culture. It&apos;s amazing to see how history has been preserved while also adapting to modern life. Some alleys are private, but others are open to visitors at certain times.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/alley-lubeck.jpeg" alt="Füchtingshof" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/mosquito.jpeg" alt="Engelsgrube" fill className="object-cover" />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                Walking through these narrow corridors was honestly one of my favorite moments in Lübeck. Some of the passages are so tight that only one or two people can fit at a time, which gave me that classic European charm I&apos;d always imagined. But what stood out even more was the sense of community here. Unlike modern apartment buildings where people barely know their neighbors, these alleys still foster a close-knit atmosphere where people actually connect with each other.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/alley-morning.jpeg" alt="Morning Light in Alley" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                These alleys are a living part of Lübeck&apos;s identity. Back in the days of the Hanseatic League, when Lübeck was one of Europe&apos;s most powerful cities, these alleys represented both prosperity and social structure. Now, they show how historical preservation can create vibrant, livable spaces instead of just being tourist sites. If you visit Lübeck, you should definitely take some time to explore these alleys. While some are private, many are open to the public at certain hours. Walking through them gives you a understanding into both the past and present of the city.
              </p>

              <p className="text-lg text-gray-700">
                In a world where we often don&apos;t even know our neighbors, Lübeck&apos;s alleys are a reminder that architecture can shape human connection. These narrow streets and shared courtyards preserve both history and a lifestyle that values community over convenience. If you&apos;re in Germany, don&apos;t miss this chance to step into a piece of living history!
              </p>
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