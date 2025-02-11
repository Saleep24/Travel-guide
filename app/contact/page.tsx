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
          className="bg-white shadow-xl rounded-lg overflow-hidden max-w-6xl mx-auto"
        >
          <div className="md:flex">
            <div className="md:w-3/5 p-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
                  <div className="flex items-start mb-6">
                    <Image
                      src="/images/profile-saleep.jpeg"
                      alt="Saleep Shrestha"
                      width={150}
                      height={150}
                      className="rounded-lg shadow-md mr-6"
                    />
                    <div>
                      <h2 className="text-2xl font-semibold mb-2">Hello everyone, I'm Saleep</h2>
                      <p className="text-sm mb-4">
                        A Computer Science sophomore studying at the University of Southern Mississippi.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 text-sm">
                    <p>
                      I went to Germany in Winter 2024 with my honors class from the University of Southern Mississippi,
                      organized by Study Abroad USM and the Honors College.
                    </p>
                    <p>
                      This site serves as the one and only Gen Z guide to Northern Germany, where I (Generation Z)
                      explored Lübeck, Hamburg, and other parts of Germany through a program designed by non-Gen Z
                      (Millennials, Generation X, and Baby Boomers).
                    </p>
                    <p>If you have any more questions, feel free to reach out to me through the form below!</p>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex justify-center mb-6">
                    <motion.a
                      href="https://saleepshrestha.com.np/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-blue-100 transition-colors duration-300 shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🚀 Explore My Portfolio
                    </motion.a>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://www.linkedin.com/in/saleepshrestha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-200 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.instagram.com/saleep.shrestha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-200 transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/5 p-8 bg-gray-50">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                >
                  <p className="font-bold">Thank you for your message!</p>
                  <p>I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
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

