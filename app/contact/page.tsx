"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Send, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const response = await fetch("https://formspree.io/f/mayznvpp", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
    if (response.ok) {
      setSubmitted(true)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl mx-auto"
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
              <p className="mb-4">
                Have questions about my Gen Z travel experiences in Northern Germany? Want to share your own stories?
                I'd love to hear from you!
              </p>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Hello, I'm Saleep</h2>
                <Image
                  src="/images/saleep-profile.jpeg"
                  alt="Saleep Shrestha"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md mb-4"
                />
                <p className="text-sm">
                  Computer Science sophomore at the University of Southern Mississippi. I explored Germany in Winter
                  2024 with my honors class, bringing you the ultimate Gen Z guide to Northern Germany!
                </p>
              </div>

              <div>
                <a
                  href="https://your-portfolio-url.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  Check out my portfolio →
                </a>
              </div>

              <div className="mt-8 flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/saleepshrestha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/genz_travel_guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="md:w-1/2 p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                >
                  <p className="font-bold">Thank you for your message!</p>
                  <p>I'll get back to you soon with some awesome travel tips!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

