"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

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
      <div className="absolute inset-0 bg-black opacity-30"></div>
      {/* Text content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wider drop-shadow-lg">
          Lübeck
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200 drop-shadow-md">
          A fairy tale UNESCO World Heritage site
        </p>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// 2. INSTAGRAM SPOTS SECTION DATA (Names, images, and descriptions)
// ----------------------------------------------------------------------------
const instaSpots = [
  { 
    name: "The Holsten Gate", 
    image: "/images/Holstentor_lubeck.jpeg", 
    description:
      "The Holsten Gate is Lübeck’s most iconic landmark, with its fairy-tale like towers and medieval charm making it a must visit photo spot. It’s as symbolic to Lübeck as the Eiffel Tower is to Paris." 
  },
  { 
    name: "St. Mary's Church", 
    image: "/images/stmary-lubeck.jpeg", 
    description:
      "St. Mary’s Church is one of the most beautiful churches I’ve ever seen both inside and outside. The architecture alone makes it worth visiting, and honestly, any trip to Europe feels incomplete without visiting a historic church. Plus, there’s a student discount, so why not?" 
  },
  { 
    name: "Lübeck narrow streets", 
    image: "/images/lubeck-streets.jpeg", 
    description:
      "Lübeck’s narrow streets look exactly like the Europe you see in pictures, stone-paved roads, cozy alleyways, and beautiful old buildings all around. Bigger cities don’t have this kind of charm, so if you’re in Northern Germany, take a walk and snap some pics for your Instagram." 
  },
  { 
    name: "European Hansemuseum", 
    image: "/images/hanse-museum.JPEG", 
    description:
      "Look around and take pictures with old Hanseatic traders’ clothes, ornaments, and weapons on display. The best part? There’s a photo booth where you can dress up and get that classic Hanseatic vibe, especially if you're with friends. Quick tip: this is one of the highest points in Lübeck, so if you’re here on New Year’s Eve, head to the top for an amazing view of the fireworks over the harbor and city." 
  },
  { 
    name: "Baltic Sea", 
    image: "/images/baltic-sea.jpeg", 
    description:
      "If you’re in Northern Germany, don’t miss the Baltic Sea, less than a 30 minute drive from Lübeck. It’s the closest sea to Northern Germany, where you can see ships, old pirate ships, lighthouses, and even stop by marzipan shops." 
  },
];

// ----------------------------------------------------------------------------
// 3. ANIMATED IMAGE COMPONENT (Vertical animation)
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
// 4. MAIN COMPONENT
// ----------------------------------------------------------------------------
export default function LubeckParallelScroll() {
  // Ref & scroll progress for the Instagram spots section
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

        {/* INSTAGRAM SPOTS Parallel Scrolling Section */}
        <section ref={instaScrollRef} className="relative pt-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Must visit Instagram Spots
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
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
            {/* Right Column: Scrolling Names and Descriptions */}
            <div className="space-y-16 md:space-y-32 p-4 md:p-16">
              {instaSpots.map((spot, i) => (
                <div key={i} className="min-h-screen flex flex-col justify-center">
                  <motion.h2
                    className="text-3xl md:text-4xl font-extrabold tracking-wide text-gray-900"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {spot.name}
                  </motion.h2>
                  <motion.p
                    className="mt-2 text-base md:text-lg text-gray-700"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {spot.description}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-100 py-8 mt-auto">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 mb-4 md:mb-0">
                © 2025 Saleep Shrestha. All rights reserved.
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
                <a
                  href="https://www.linkedin.com/in/saleepshrestha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
