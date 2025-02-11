"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, ArrowLeft, Instagram } from "lucide-react"

// 1. HERO SECTION
function HeroSection() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.2])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.video
        style={{ scale }}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hamburg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
      <motion.div style={{ opacity }} className="absolute inset-0 bg-black/50" />
      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-wider drop-shadow-lg mb-6"
        >
          Berlin
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl text-gray-200 drop-shadow-md mb-8"
        >
          Where history was written
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="#explore"
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300 inline-block"
          >
            Explore Berlin
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

// 2. INSTAGRAM SPOTS DATA
const instaSpots = [
    {
        name: "Brandenburg Gate",
        image: "/images/brandenburg-gate.jpeg",
        description:
          "You absolutely can't miss the Brandenburg Gate when you're in Berlin. This iconic neoclassical monument stands as a symbol of unity and freedom. Whether it's bathed in golden light at sunset or illuminated at night, it's the perfect spot for an epic Instagram shot.",
      },
      {
        name: "Reichstag Building",
        image: "/images/reichstag.jpeg",
        description:
          "The Reichstag Building is a blend of historic grandeur and modern innovation. Its stunning glass dome offers breathtaking views of Berlin’s skyline. Trust me, this spot is a must-visit for anyone who loves a mix of history and contemporary design.",
      },
      {
        name: "Berlin Wall Memorial",
        image: "/images/berlin-wall.jpeg",
        description:
          "A poignant reminder of a divided past, the Berlin Wall Memorial is a must-see. Walk along the preserved sections, explore the thought-provoking exhibits, and capture the raw essence of Berlin’s journey to reunification.",
      },
      {
        name: "Museum Island",
        image: "/images/museum-island.jpeg",
        description:
          "Nestled in the heart of Berlin, Museum Island is a cultural haven. Home to world-class museums and stunning architecture, it's the perfect place to immerse yourself in art, history, and the vibrant spirit of the city.",
      },
      {
        name: "Alexanderplatz",
        image: "/images/alexanderplatz.jpeg",
        description:
          "Alexanderplatz is the bustling epicenter of modern Berlin. From its iconic TV Tower to the dynamic street life, this square captures the city's energetic vibe. It's a hotspot for both urban exploration and those perfect Instagram moments.",
      },
      {
        name: "Checkpoint Charlie",
        image: "/images/checkpoint-charlie.jpeg",
        description:
          "Step back in time at Checkpoint Charlie, one of Berlin's most famous Cold War landmarks. With its rich history and urban art, this spot offers a unique glimpse into the city’s transformative past, making it an unmissable photo op.",
      },
]

// 3. TIMELINE ITEM COMPONENT
function TimelineItem({ spot, index }: { spot: any; index: number }) {
  const isLeft = index % 2 === 0

  return (
    <div className="relative min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col lg:flex-row gap-12 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
          {/* Image Section */}
          <motion.div
            className="lg:w-1/2 relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image src={spot.image || "/placeholder.svg"} alt={spot.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center text-white">
              <Instagram className="w-6 h-6 mr-2" />
              <span className="text-lg font-semibold">Saleep.Shrestha</span>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="lg:w-1/2 flex items-center"
            initial={{ opacity: 0, x: isLeft ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className={`bg-white/90 backdrop-blur-sm p-8 lg:p-12 rounded-2xl shadow-xl border border-gray-100 ${
                isLeft ? "lg:ml-12" : "lg:mr-12"
              }`}
            >
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">{spot.name}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{spot.description}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Timeline Dot */}
      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow-xl z-10 ${
          isLeft ? "right-[calc(50%-1rem)]" : "left-[calc(50%-1rem)]"
        }`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />
    </div>
  )
}

// 4. MAIN COMPONENT
export default function HamburgTimeline() {
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

        {/* Timeline Section */}
        <section id="explore" className="relative pt-20">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center py-20 text-gray-900"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Must Visit Instagram Spots
          </motion.h2>

          <div className="relative pb-32">
            {/* Timeline vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2 z-0" />

            {instaSpots.map((spot, index) => (
              <TimelineItem key={index} spot={spot} index={index} />
            ))}
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

