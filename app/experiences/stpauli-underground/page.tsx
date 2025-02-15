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
          className="text-5xl md:text-5xl font-extrabold text-white tracking-wider drop-shadow-lg mb-6"
        >
          St. Pauli Underground Culture
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
                Hey, let me tell you about St. Pauli, you know, that famous district in Hamburg everyone talks about! Before I share my experience, you&apos;ve got to know a bit about its history. This neighborhood has always been Hamburg&apos;s rebellious child, starting as a hangout for sailors back in the day. It&apos;s pretty wild to think that this place has been the heart of Hamburg&apos;s alternative scene for over a century!
              </p>

              <div className="relative h-[600px] rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/hans.jpeg" alt="St. Pauli Street Scene" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                So, the most famous part of St. Pauli is this street called the Reeperbahn, it&apos;s literally been the center of Hamburg&apos;s nightlife since forever! And get this, during World War II, when the Nazis were trying to shut down everything fun in Germany, they couldn&apos;t completely stop St. Pauli. The district just kept doing its thing, staying true to its free-spirited nature. That&apos;s what makes this place so special.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/captain.jpeg" alt="Street Art" fill className="object-cover" />
                </div>
                <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/st-pauli-us.jpeg" alt="Alternative Cafe" fill className="object-cover" />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                Okay, now let me tell you about my visit, it was absolutely mind-blowing! The whole place just buzzes with this incredible energy. You&apos;ve got street art everywhere, music pouring out of bars, and the most diverse crowd you&apos;ll ever see. I actually tried visiting this famous street called Herbertstraße during the day with my friends (fun fact: it&apos;s the only street in Hamburg that still has the vibe like Amsterdam&apos;s Red Light District), but we found out it only opens after 6:30 PM.
              </p>

              <div className="relative h-[700px] rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/the-street-big.jpeg" alt="Flohschanze Market" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                You won&apos;t believe this, but right on the Reeperbahn, there&apos;s this huge store called Boutique Bizarre, it&apos;s actually Europe&apos;s largest sex shop! The whole area is super open-minded about everything. Like, there&apos;s this really unique thing about Herbertstraße, it has these barriers at both ends with signs in German and English, and it&apos;s been that way since the 1970s. It&apos;s pretty fascinating how they&apos;ve preserved these historical elements while still keeping the area modern and vibrant.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/band-big.jpeg" alt="Molotow Club" fill className="object-cover" />
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/latino-bar.jpeg" alt="Park Fiction" fill className="object-cover" />
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/gay-bar.jpeg" alt="Golden Pudel Club" fill className="object-cover" />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                Oh, and if you&apos;re planning to visit (which you totally should!), here&apos;s a pro tip: take the U3 to either St. Pauli or Reeperbahn station, it&apos;s super easy to find. Just remember that the real action starts after sunset, especially around 6:30 PM when everything opens up. And hey, even though it&apos;s generally safe, maybe stick with your friends if you&apos;re staying out late, you know, just like any other party district!
              </p>

              <div className="relative h-[600px] rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/curry.jpeg" alt="St. Pauli at Night" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                I&apos;ve got to say, visiting St. Pauli was definitely one of the highlights of my trip to Hamburg. It&apos;s about experiencing this amazing community that&apos;s been fighting for freedom of expression for generations. Just make sure to be respectful when you visit, after all, we&apos;re guests in their neighborhood. Trust me, you&apos;re going to love it as much as I did!
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