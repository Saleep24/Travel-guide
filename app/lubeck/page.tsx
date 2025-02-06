import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Lightbulb } from "lucide-react"

export default function Lubeck() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            GenZ Travel Guide
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Discover Lübeck</h1>

        <div className="mb-8">
          <Image
            src="/images/lubeck.jpg"
            alt="Lübeck cityscape"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        <p className="text-lg mb-10">
          Lübeck, a UNESCO World Heritage site, offers a perfect blend of medieval charm and modern culture. Known for
          its distinctive Brick Gothic architecture, this Hanseatic city is a treasure trove for history buffs and
          culture enthusiasts alike.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-blue-600" />
              Must-Visit Spots
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-4">
                {[
                  "Holstentor - The iconic city gate and symbol of Lübeck",
                  "Marienkirche - A masterpiece of brick Gothic architecture",
                  "Buddenbrookhaus - Dedicated to the famous Mann family of writers",
                  "Niederegger Marzipan - Taste the city's famous sweet treat",
                  "Travemünde - Enjoy the Baltic Sea beach",
                ].map((spot, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                    <span>{spot}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2 text-purple-600" />
              GenZ Travel Tips
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-4">
                {[
                  "Explore the narrow alleys of the old town for Instagram-worthy shots",
                  "Take a boat tour on the Trave River for unique city views",
                  "Visit during the Christmas season to experience the magical Christmas markets",
                  'Try the local specialty "Rotspon" - a French red wine aged in Lübeck',
                  "Use the affordable public transport to get around easily",
                ].map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-2"></span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 rounded-lg p-6 mb-10">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <Lightbulb className="w-5 h-5 mr-2 text-blue-600" />
            Pro Tip
          </h3>
          <p>Don't miss the view from St. Peter's Church tower - it offers a panoramic view of the entire old town!</p>
        </div>

        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Got questions about Lübeck? Contact us!
        </Link>
      </div>
    </main>
  )
}

