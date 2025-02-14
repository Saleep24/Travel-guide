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
          src="/images/lubeck-christmas.jpg"
          alt="Lübeck Christmas Market"
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
          Lübeck Christmas Market
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl text-gray-200 drop-shadow-md mb-8"
        >
          A Medieval Winter Wonderland
        </motion.p>
      </motion.div>
    </section>
  )
}

// Main Component
export default function LubeckChristmasMarket() {
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
                One of the most unforgettable experiences I had in Germany was visiting the Lübeck Christmas Market. This historic market, which started in the 17th century, is one of the oldest and most famous in Germany. Every year, people from all over Germany, Europe, and even other parts of the world come to Lübeck to enjoy Lübeck&apos;s magic. The market spreads through the city&apos;s old streets, filling the air with the smell of roasted almonds, warm spiced wine, and festive vibes.
              </p>

              <div className="relative h-[600px] rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/christmas-overview.jpeg" alt="Christmas Market Overview" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                Lübeck, once the capital of the Hanseatic League, has long been known for its rich history and beautiful architecture. The Christmas market tradition started centuries ago as a way for local craftsmen and merchants to sell their goods during the holiday season. Today, it has grown into a grand celebration, with beautifully decorated stalls selling handmade gifts, festive decorations, and delicious seasonal treats. Whether you want to find special gifts or just enjoy the festive vibe, the Lübeck Christmas Market is the place to be.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/christmas-market-1.jpeg" alt="Christmas Craft Market" fill className="object-cover" />
                </div>
                <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/christmas-market-food.jpeg" alt="Fairy Tale Forest" fill className="object-cover" />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                I visited the market on its last day, which turned out to be the best time to grab some great deals on decorations and souvenirs. I picked up some beautiful handcrafted ornaments and a Christmas globe at a bargain. The stalls were filled with intricate wooden carvings, festive candles, and unique gifts that you won&apos;t find anywhere else. If you love Christmas decorations, this market is a dream come true.
              </p>

              <div className="relative h-[700px] rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/christmas-market-me.jpeg" alt="Christmas Market at Night" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                Food is a huge part of the experience, and I made sure to try some local specialties. I had a delicious mushroom dish and, surprisingly, even enjoyed some ice cream. Lübeck is famous for its marzipan, so if you have a sweet tooth, you have to try some while you&apos;re there. Some of my friends also tried Lübeck&apos;s famous hot beer and mulled wine, which are traditional winter drinks that help keep you warm in the chilly weather. ((I don&apos;t drink, so I didn&apos;t try it, but my friends said it was really good!))
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/christmas-food.jpeg" alt="Christmas Marzipan" fill className="object-cover" />
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/christmas-last.jpg" alt="Glühwein" fill className="object-cover" />
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/beer.jpeg" alt="Christmas Treats" fill className="object-cover" />
                </div>
              </div>

              <p className="text-lg text-gray-700">
                Besides the shopping and food, the Christmas market is a great place for a fun family trips, catching up with friends, or just enjoying a cozy winter evening. The whole city glows with festive lights, making it a perfect spot for pictures. I took so many pictures of the glowing lights, old buildings, and cute market stalls, it really felt like a real cozy Christmas market.
              </p>

              <p className="text-lg text-gray-700">
                One important tip: make sure to carry cash! Most stalls do not accept credit cards, so having some euros on hand will save you a lot of trouble. Also, learning a few basic German greetings like "Hallo" (Hello) and "Danke" (Thank you) goes a long way in making your experience even more enjoyable.
              </p>

              <div className="relative h-[600px] rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/christmas-lubeck.jpeg" alt="Christmas Market Atmosphere" fill className="object-cover" />
              </div>

              <p className="text-lg text-gray-700">
                If you&apos;re planning a trip to Germany during the holiday season, Lübeck&apos;s Christmas Market should definitely be on your list. It&apos;s a perfect blend of history, culture, and holiday magic that you won&apos;t forget!
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