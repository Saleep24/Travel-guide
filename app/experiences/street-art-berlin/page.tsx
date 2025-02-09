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
          src="/images/berlin-street-art.PNG"
          alt="Berlin Street Art"
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
          Street Art Tours in Berlin
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl text-gray-200 drop-shadow-md mb-8"
        >
          Discover the vibrant urban canvas of Germany's capital
        </motion.p>
      </motion.div>
    </section>
  )
}

// Main Component
export default function StreetArtBerlin() {
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
                Berlin's street art scene is a vibrant tapestry woven from the city's tumultuous history and creative
                spirit. After the fall of the Berlin Wall in 1989, the city became a canvas for artists expressing
                newfound freedom. The East Side Gallery, a 1.3km-long section of the Berlin Wall, transformed into one
                of the world's largest open-air galleries, symbolizing unity and hope.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/berlin-street-art.jpg" alt="East Side Gallery" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                Throughout the 1990s and 2000s, Berlin's allure drew artists from around the globe, turning
                neighborhoods like Kreuzberg, Friedrichshain, and Mitte into hubs of creativity. Today, Berlin's street
                art scene is a vibrant mix of historical commentary, social critique, and pure artistic expression. As a
                Gen Z traveler, exploring this urban gallery was like stepping into an Instagram feed come to life.
                Every corner held a new surprise, from massive murals covering entire buildings to tiny, witty stencils
                hidden in alleyways.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/kreuzberg-mural.jpeg" alt="Kreuzberg Mural" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/friedrichshain.jpg"
                    alt="Friedrichshain Street Art"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                One of the best experiences I had was joining a guided tour led by a local artist. It gave me incredible
                insights into the stories behind the artworks. We explored areas like the RAW-Gelände, an old railway
                yard turned cultural center, and the famous murals of Kreuzberg. The tour also introduced me to some
                great local cafes and vintage shops along the way, adding depth to my Berlin experience.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/2.jpg" alt="RAW-Gelände" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                For my fellow Gen Z travelers, I highly recommend this experience. It's not just about seeing cool art –
                it's about understanding Berlin's culture, history, and the power of creative expression. You'll get to
                immerse yourself in a living, breathing art gallery that's always changing and gain a unique perspective
                on Berlin's history and contemporary culture. Plus, you'll discover hidden gems and off-the-beaten-path
                neighborhoods that you might not find in typical tourist guides.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/flag-art.jpeg" alt="Street Art Selfie" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/monster-art.jpeg" alt="Berlin Graffiti" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/smily-art.jpeg"
                    alt="Street Art Workshop"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                One of the best parts about exploring Berlin's street art scene is the opportunity to connect with
                like-minded creatives from around the world. Whether you're chatting with other tourists on a guided
                tour or striking up a conversation with a local artist, you'll find that the street art community is
                welcoming and passionate. These interactions can lead to unexpected friendships and collaborations,
                adding a whole new dimension to your travel experience.
              </p>

              <p className="text-lg text-gray-700">
                Of course, for us Gen Z travelers, the Instagram potential is huge. You'll capture incredible content
                for your social media, with each mural and installation offering a unique backdrop for your photos. But
                beyond just getting likes, you'll be sharing art that often tackles important social and political
                issues, sparking conversations among your followers and friends back home.
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/politician-kiss.jpeg"
                  alt="Berlin Street Art Collage"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-lg text-gray-700">
                Lastly, don't underestimate how inspiring this experience can be for your own creative projects. Whether
                you're into photography, design, fashion, or any other form of art, Berlin's street art scene will fill
                you with ideas and motivation. You might even be inspired to pick up a spray can yourself and contribute
                to this ever-evolving urban canvas.
              </p>

              <p className="text-lg text-gray-700">
                In conclusion, a street art tour in Berlin is more than just a tourist activity – it's a journey through
                history, culture, and creativity that resonates deeply with our generation. It's an experience that will
                stay with you long after you've left the city, influencing how you see art, urban spaces, and perhaps
                even your own creative potential. So when you're in Berlin, don't miss the chance to explore this
                incredible aspect of the city. It's an adventure that's tailor-made for the curious, creative spirit of
                Gen Z travelers.
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
                <p className="text-gray-400">Exploring the world, one city at a time.</p>
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
                    href="https://www.instagram.com/genz_travel_guide"
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

