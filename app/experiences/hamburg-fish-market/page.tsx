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
              One of the most unforgettable experiences I had in Hamburg was visiting the historic Fish Market. This place is a living tradition and a true symbol of the city’s culture. The market has been running since 1703, making it one of Hamburg’s oldest and most cherished institutions. Every Sunday morning, all kinds of people, locals, tourists, night owls, and early risers gather here. What amazed me most was how this market brings together such a diverse mix of people and energy.               </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/fish-market-aerial.jpg" alt="Hamburg Fish Market Aerial View" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
              Walking through the market, I was fascinated by the Marktschreier (market criers). These vendors are the heart of the experience. Their selling techniques are legendary, mixing different fruits into bags and shouting out deals with incredible enthusiasm. Even though I didn’t understand all the German, their energy and skill made it exciting to watch. The way they packed those fruit bags was an art in itself. For anyone visiting Hamburg, getting such a variety of fresh produce at such a low price is an experience in itself.
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
              The true heartbeat of the market is the Fischauktionshalle (Fish Auction Hall), a stunning Art Nouveau building from 1894. This is where my favorite memory was made, dancing with locals to live German music! Honestly, I’m not a great dancer, but something about the atmosphere made me let go. Maybe it was the warmth of the people, or maybe it was the Southern Miss game day spirit kicking in. My friends, much better dancers than me, showed me some basic moves, and soon enough, I was dancing along with everyone else. The mix of live music, laughter, and my hot cocoa (perfect for the chilly morning!) created a moment I’ll never forget.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/auction-hall.jpg" alt="Fish Auction Hall Interior" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
              Sipping my hot cocoa while watching the sunrise over the Elbe River was the perfect way to take it all in. I spent time taking photos, observing the vendors’ entertaining sales techniques, and try chatting with locals in broken German-English language. Every detail, from the smell of fresh fish to the sound of laughter, made this experience feel truly special.
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
              If you ever find yourself in Hamburg, visiting the Fish Market is a must. Even if it means cutting your Saturday night short, waking up early is absolutely worth it. The market runs every Sunday from 7 AM to 9:30 AM in winter. Getting there is easy, just take the U3 to Landungsbrücken or the S1/S3 to Reeperbahn station. Pro tip: arrive early to catch the sunrise over the Elbe, it’s a breathtaking sight. Also, bring cash, as most vendors don’t accept cards, and don’t be afraid to engage with the sellers (bargain!). The energy, the tradition, and the community make the Hamburg Fish Market one of the most unforgettable experiences in the city.              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/harbor-sunrise.jpg" alt="Hamburg Harbor Sunrise" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
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