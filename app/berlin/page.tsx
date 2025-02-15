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
        <source src="/videos/berlin.mp4" type="video/mp4" />
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
interface SpotData {
  name: string;
  image: string;
  description: string;
}

export const instaSpots: SpotData[] = [
  {
    name: "Brandenburg Gate",
    image: "/images/brandenburg-gate.jpeg",
    description:
      "Okay, you absolutely can't skip the Brandenburg Gate - it's like Berlin's Eiffel Tower! The best time to visit? Either super early morning when there's barely anyone around (perfect for those main character moments), or at sunset when the golden light hits just right. Pro tip: walk a bit further back and get that perfect shot where you're 'holding' the gate. Trust me, it's going to be your most liked photo from Berlin!",
  },
  {
    name: "Reichstag Building",
    image: "/images/reichstag.jpeg",
    description:
      "The Reichstag Building is literally insane! The glass dome on top is giving futuristic vibes, but make sure to book your free tickets online in advance (thank me later). The best part? You can walk up the spiral ramp inside the dome for some seriously epic shots of Berlin's skyline. And if you're feeling fancy, there's a rooftop restaurant where you can grab a coffee with Parliament views. Student discount available!",
  },
  {
    name: "East Side Gallery",
    image: "/images/berlin-street-art.jpg",
    description:
      "If you're into street art and history, the East Side Gallery should be your favorite place in entire Europe! It's the longest remaining stretch of the Berlin Wall, and now it's basically the world's longest open air gallery. My favorite part? The famous 'The Kiss' painting, you know, the one with the two politicians kissing. The whole wall is super colorful and perfect for those artsy Instagram shots. Just avoid the middle of the day when it gets super crowded!",
  },
  {
    name: "Memorial to the Murdered Jews",
    image: "/images/holocaust-memorial.jpeg",
    description:
      "The Holocaust Memorial is one of the most powerful places you'll visit in Berlin. It's this massive field of concrete blocks that creates this really moving atmosphere. While it's important to be respectful (it's not just a photo op), you can capture some really meaningful shots that show the scale and impact of this place. The underground information center is a must visit too, it really puts everything into perspective.",
  },
  {
    name: "Olympic Stadium",
    image: "/images/olympic-stadium.jpeg",
    description:
      "The Olympic Stadium is huge and has some serious history (it hosted the 1936 Olympics). The architecture gives ancient Roman colosseum meets modern sports arena vibe. And the best part, you can actually climb up to the roof for some insane panoramic views of Berlin, perfect for those 'top of the world' shots. And if you're lucky, you might catch a football match or concert here! (I did not)",
  },
  {
    name: "German Spy Museum",
    image: "/images/spy-museum.JPEG",
    description:
      "Okay, the Spy Museum is literally the most fun museum ever! They've got this laser maze room where you can pretend you're in a spy movie (perfect for Reels or TikToks). There's also a photo booth where you can dress up as a spy which gives James Bond vibes! Definitely bring your friends here, it's way more fun as a group. Pro tip: try the lie detector test, it's superhilarious!",
  },
  {
    name: "Lustgarten",
    image: "/images/lustgarten.jpeg",
    description:
      "Lustgarten is a gorgeous park right in the heart of Museum Island. It's surrounded by some of Berlin's most iconic buildings, and the lawn is perfect for those candid picnic shots. Quick tip: grab some snacks from the nearby shops, find a spot on the grass, and get those perfect 'living my best life in Berlin' photos!",
  },
  {
    name: "Sanssouci Palace",
    image: "/images/sanssouci.JPEG",
    description:
      "Okay, technically this is in Potsdam (like 30 mins from Berlin), but you HAVE to visit Sanssouci Palace! It gives major Bridgerton vibes with its rococo architecture and stunning gardens. The terraced vineyard in front of the palace is probably the most Instagram worthy spot. Maybe try to visit during spring or fall (I visited during winter and the garden was not that welcoming great :() and send me your photos!",
  },
]

// Add type definition before the timeline item component
interface SpotData {
  name: string
  image: string
  description: string
}

// 3. TIMELINE ITEM COMPONENT
function TimelineItem({ spot, index }: { spot: SpotData; index: number }) {
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

