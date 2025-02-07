"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ----------------------------------------------------------------------------
// 1. HERO SECTION (Video Background)
// ----------------------------------------------------------------------------
function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/lubeck.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {/* Text content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-6xl font-extrabold text-white tracking-wider drop-shadow-lg">
          Lübeck
        </h1>
        <p className="mt-4 text-2xl md:text-2xl text-gray-200 drop-shadow-md">
          A fairy tale UNESCO World Heritage site
        </p>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// 2. LANDMARKS SECTION DATA (Draft descriptions)
// ----------------------------------------------------------------------------
const landmarks = [
  {
    title: "Holstentor",
    description: "The iconic city gate and symbol of Lübeck. Holstentor is a grand red-brick gate, standing strong since the 1400s. Walk up close, and you’ll see carvings telling stories of old traders and battles. Inside, a small museum shows off ancient Hanseatic trade link, its power and wealth. At dusk, the gate glows golden over its moat. Snap a photo here; it’s the Lübeck postcard moment.",
    image: "/images/lubeck.jpg",
  },
  {
    title: "St. Mary's Church",
    description: "A masterpiece of brick Gothic architecture.",
    image: "/images/stmary-lubeck.jpeg",
  },
  {
    title: "Buddenbrookhaus",
    description: "Dedicated to the famous Mann family of writers.",
    image: "/images/book.jpg",
  },
  {
    title: "Niederegger Marzipan",
    description: "Taste the city's famous sweet treat.",
    image: "/images/lubeck-marzipan.jpg",
  },
  {
    title: "Baltic Sea",
    description: "Enjoy the Baltic Sea beach.",
    image: "/images/baltic-sea.jpg",
  },
];

// ----------------------------------------------------------------------------
// 3. INSTAGRAM SPOTS SECTION DATA (Names & images only)
// ----------------------------------------------------------------------------
const instaSpots = [
  { name: "St. Mary's Church", image: "/images/insta1.jpg" },
  { name: "Holstentor View", image: "/images/insta2.jpg" },
  { name: "Historic Harbor", image: "/images/insta3.jpg" },
  { name: "Marzipan Moments", image: "/images/insta4.jpg" },
  { name: "Cobblestone Alley", image: "/images/insta5.jpg" },
];

// ----------------------------------------------------------------------------
// 4. ANIMATED IMAGE COMPONENT (Vertical animation)
// ----------------------------------------------------------------------------
type SectionImageProps = {
  section: { title: string; image: string };
  index: number;
  total: number;
  scrollYProgress: any;
};

function SectionImage({
  section,
  index,
  total,
  scrollYProgress,
}: SectionImageProps) {
  // Calculate scroll range for this section
  const start = index / total;
  const end = (index + 1) / total;

  // Vertical parallax: image comes up from 50px to -50px while fading in/out
  const opacity = useTransform(
    scrollYProgress,
    [start, (start + end) / 2, end],
    [0, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [start, (start + end) / 2, end],
    [0.9, 1, 0.9]
  );
  const y = useTransform(
    scrollYProgress,
    [start, (start + end) / 2, end],
    ["50px", "0px", "-50px"]
  );

  return (
    <motion.div className="absolute inset-0" style={{ opacity, scale, y }}>
      <Image
        src={section.image}
        alt={section.title}
        fill
        className="object-cover"
      />
      {/* Optional creative overlay */}
      <div className="absolute inset-0 bg-black opacity-30 mix-blend-overlay" />
    </motion.div>
  );
}

// ----------------------------------------------------------------------------
// 5. MAIN COMPONENT
// ----------------------------------------------------------------------------
export default function LubeckParallelScroll() {
  // Ref & scroll progress for landmarks section
  const landmarksScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: landmarksScrollRef });

  // Ref & scroll progress for Instagram spots section
  const instaScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: instaScrollYProgress } = useScroll({
    target: instaScrollRef,
  });

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              GenZ Travel Guide
            </Link>
            <div>
              <Link
                href="/"
                className="px-4 py-2 bg-blue-500 text-white rounded-full text-lg font-medium shadow hover:bg-blue-600 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* HERO SECTION */}
        <HeroSection />

        {/* LANDMARKS Parallel Scrolling Section */}
        <section ref={landmarksScrollRef} className="relative pt-16">
          <div className="grid grid-cols-2">
            {/* Left Column: Sticky Animated Images */}
            <div className="relative h-screen sticky top-16 overflow-hidden">
              {landmarks.map((landmark, i) => (
                <SectionImage
                  key={i}
                  section={{ title: landmark.title, image: landmark.image }}
                  index={i}
                  total={landmarks.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
            {/* Right Column: Scrolling Text with Title & Draft Description */}
            <div className="space-y-32 p-16">
              {landmarks.map((landmark, i) => (
                <div key={i} className="min-h-screen flex flex-col justify-center">
                  <motion.h2
                    className="text-6xl font-extrabold mb-4 tracking-wide text-gray-900"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {landmark.title}
                  </motion.h2>
                  <motion.p
                    className="text-2xl max-w-lg leading-relaxed text-gray-700"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.2,
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {landmark.description}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSTAGRAM SPOTS Parallel Scrolling Section */}
        <section ref={instaScrollRef} className="relative pt-16">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-gray-900">Instagram Spots</h2>
          </div>
          <div className="grid grid-cols-2">
            {/* Left Column: Sticky Animated Images for Instagram Spots */}
            <div className="relative h-screen sticky top-16 overflow-hidden">
              {instaSpots.map((spot, i) => (
                <SectionImage
                  key={i}
                  section={{ title: spot.name, image: spot.image }}
                  index={i}
                  total={instaSpots.length}
                  scrollYProgress={instaScrollYProgress}
                />
              ))}
            </div>
            {/* Right Column: Scrolling Names Only */}
            <div className="space-y-32 p-16">
              {instaSpots.map((spot, i) => (
                <div key={i} className="min-h-screen flex flex-col justify-center">
                  <motion.h2
                    className="text-6xl font-extrabold tracking-wide text-gray-900"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {spot.name}
                  </motion.h2>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT CALL-TO-ACTION SECTION */}
        <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-white">
          <motion.h2
            className="text-5xl font-bold mb-6 tracking-tight text-gray-900"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Ready to Experience Lübeck?
          </motion.h2>
          <Link
            href="/contact"
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-xl font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us
          </Link>
        </section>
      </main>
    </>
  );
}
