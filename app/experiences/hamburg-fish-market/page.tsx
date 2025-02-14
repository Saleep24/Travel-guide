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
                During my two week trip to Northern Germany, one of the most unique experiences was visiting the historic Hamburg Fish Market. Getting up at 6 AM was little difficult, but the energy of this 300 year old tradition made it absolutely worth it! The market has been running since 1703, making it one of Hamburg&apos;s oldest and most cherished institutions. What amazed me was how this place brings together such a diverse crowd. This mix of people and atmospheres is what makes the Fish Market such a special part of Hamburg&apos;s identity.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/fish-market-aerial.jpg" alt="Hamburg Fish Market Aerial View" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                The most entertaining part was watching the market vendors, known as Marktschreier (market criers). These guys are the absolute play-makers. What fascinated me most was their unique selling technique: they would cleverly mix different fruits in bags, creating these amazing variety packs I&apos;d never seen anywhere else. Anyone travelling to Hamburg or even for local&apos;s getting such a diverse mix of fresh fruits at such a low price would be incrediblee! Even though I couldn&apos;t understand all the German being shouted, their sales pitch and the way they packed those fruit bags was exciting to watch!
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
                The heart of the market happens in the Fischauktionshalle (Fish Auction Hall), a beautiful Art Nouveau building from 1894. This is where my favorite memory was made, dancing with locals to German songs! Honestly speaking, I am not a good dancer, but my muscle memory was activated by our Southern Miss game day spirit. My friends, who were much better dancers than me, taught me some basic moves, and soon enough, I was dancing along with everyone else. The combination of live music, warm atmosphere, and my hot cocoa (perfect for the chilly morning!) created this magical moment that perfectly captured the spirit of Hamburg.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/auction-hall.jpg" alt="Fish Auction Hall Interior" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                Warming up with my hot cocoa while watching the the market was such a cozy experience. The market is a tradition for locals and tourists alike. I spent a good hour just taking photos, observing the surroundings, watching the vendors&apos; entertaining sales techniques and also communicating with the locals.
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
                For anyone visiting Hamburg, I highly recommend experiencing the Fish Market, even if you have to cut your Saturday night short! It runs every Sunday from 7 AM to 9:30 AM in winter. Getting there is easy, just take the U3 to Landungsbrücken or S1/S3 to Reeperbahn station. Pro tip: arrive early to catch the sunrise over the Elbe River, it creates the most magical backdrop for photos. Also, bring cash as most vendors don&apos;t accept cards, and don&apos;t be afraid to engage with the sellers (bargain!).
              </p>

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