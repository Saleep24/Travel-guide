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
          Street Art Tours in Berlin, East Side Gallery
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
              I have to tell you about one of the most unforgettable experiences I had in Berlin, the street art tour along the East Side Gallery. This place is a living reminder of the city's history and a true symbol of freedom. The Berlin Wall once divided a country, separating East and West Germany for almost 30 years. Built in 1961 by the East German government to stop people from fleeing to the democratic West, the wall stood as a harsh reminder of division until its fall on November 9, 1989. Today, every painting on this long stretch of wall speaks of hope, unity, and the power of expression. For Germans, this wall carries deep personal meaning, and people from all over the world come here to see how art has turned a symbol of separation into a canvas of togetherness. 
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/berlin-street-art.jpg" alt="East Side Gallery" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
              Walking along the East Side Gallery, I was amazed to see over a hundred paintings, murals, and graffiti. Each piece has its own story. I saw abstract designs that made me think, playful art that brought a smile to my face, and powerful images that carry messages of peace and resistance. One of the most famous pieces is "The Kiss" by Dmitri Vrubel. This painting shows a passionate embrace and speaks of reconciliation in a way that feels both bold and tender. I also noticed "The Guardian" and a striking piece featuring a peace sign. These artworks remind us to hold onto hope and keep striving for a better world. 
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
              The history behind the wall adds another layer to the art. Many of the artists who painted on this once dividing barrier were young and full of rebellious spirit after the wall fell. I think they saw an opportunity to heal old wounds and express dreams of unity. For many Germans, transforming the wall into a massive outdoor gallery was a way to take back a painful past and turn it into something beautiful and inspiring. This is why the East Side Gallery is so important (not just as a tourist attraction, but as a living piece of history that embraces street art as a form of catharsis and celebration). 
              </p>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/2.jpg" alt="RAW-Gelände" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
              What really made my visit special was the chance to see how the artists poured their emotions and experiences onto the wall. I felt like I was part of a shared story that unites past and present. At one point, I even wrote my name and signed it on the wall. It was a small gesture, but it connected me to countless others who have left their mark here. I promise myself that I will come back one day to see my name again and feel that unique feeling. 
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
              Getting to the East Side Gallery is super easy with Berlin’s public transportation. You can take a train from anywhere in the city, which makes planning your visit really simple. When you’re there, don’t miss the chance to take a picture in front of your favorite piece of art. I took mine in front of “The Kiss” and a couple of other spots. The gallery is full of perfect corners for epic Instagram shots. And if you’re up for it, take a moment to read the messages and let the art speak to you. I believe every stroke and color carries a piece of history and emotion that is worth pausing for. 
              </p>

              <p className="text-lg text-gray-700">
              If you ever find yourself in Berlin, this tour is a must. The energy, the stories, and the creativity on display remind me why art matters. It connects us, heals us, and shows us that even the darkest parts of our history can be transformed into something beautiful. For Germans, embracing street art means reclaiming their past and celebrating their newfound freedom. Enjoy every moment, and don’t forget to leave your own mark, just like I did. 
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
                
              </p>

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

