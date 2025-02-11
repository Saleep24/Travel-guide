"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

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
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <Image
              src="/images/saleep-profile.jpg"
              alt="Saleep Shrestha"
              width={200}
              height={200}
              className="rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4">Hello everyone, I'm Saleep</h2>
              <p className="text-gray-700 mb-4">
                I'm a Computer Science sophomore studying at the University of Southern Mississippi. I went to Germany
                in Winter 2024 with my honors class from the University of Southern Mississippi, organized by Study
                Abroad USM and the Honors College.
              </p>
              <p className="text-gray-700 mb-4">
                This site serves as the one and only Gen Z guide to Northern Germany, where I (Generation Z) explored
                Lübeck, Hamburg, and other parts of Germany through a program designed by non-Gen Z (Millennials,
                Generation X, and Baby Boomers).
              </p>
              <p className="text-gray-700 mb-4">
                If you have any more questions, feel free to reach out to me through the form below! Also, if you want
                to see more content from me, here is my{" "}
                <a
                  href="https://saleepshrestha.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  portfolio website
                </a>
                !
              </p>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative max-w-md mx-auto">
            <p>Thank you for your message! We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
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
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </main>
  )
}

