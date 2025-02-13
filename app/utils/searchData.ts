// Import spot data from city pages
import { instaSpots as berlinSpots } from '../berlin/page'
import { instaSpots as hamburgSpots } from '../hamburg/page'
import { instaSpots as lubeckSpots } from '../lubeck/page'

// Create search data array
export const searchData = [
  // Main cities
  {
    title: "Lübeck",
    description: "Medieval charm meets modern culture in this UNESCO World Heritage site",
    link: "/lubeck",
    type: "city"
  },
  {
    title: "Hamburg",
    description: "Harbor life, street art, and vibrant nightlife in Germany's gateway to the world",
    link: "/hamburg",
    type: "city"
  },
  {
    title: "Berlin",
    description: "Underground scenes, street art, and cultural revolution in the capital",
    link: "/berlin",
    type: "city"
  },
  // Convert Lübeck spots to search format
  ...lubeckSpots.map(spot => ({
    title: spot.name,
    description: spot.description,
    link: `/lubeck#${spot.name.toLowerCase().replace(/\s+/g, '-')}`,
    type: "spot",
    city: "Lübeck",
    image: spot.image
  })),
  // Convert Hamburg spots to search format
  ...hamburgSpots.map(spot => ({
    title: spot.name,
    description: spot.description,
    link: `/hamburg#${spot.name.toLowerCase().replace(/\s+/g, '-')}`,
    type: "spot",
    city: "Hamburg",
    image: spot.image
  })),
  // Convert Berlin spots to search format
  ...berlinSpots.map(spot => ({
    title: spot.name,
    description: spot.description,
    link: `/berlin#${spot.name.toLowerCase().replace(/\s+/g, '-')}`,
    type: "spot",
    city: "Berlin",
    image: spot.image
  }))
] 