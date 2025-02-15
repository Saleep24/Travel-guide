// Import spot data from data file
import { berlinSpots, hamburgSpots, lubeckSpots } from '../data/spots'

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
  // Convert spots to search format
  ...lubeckSpots.map(spot => ({
    title: spot.name,
    description: spot.description,
    link: `/lubeck#${spot.name.toLowerCase().replace(/\s+/g, '-')}`,
    type: "spot",
    city: "Lübeck",
    image: spot.image
  })),
  ...hamburgSpots.map(spot => ({
    title: spot.name,
    description: spot.description,
    link: `/hamburg#${spot.name.toLowerCase().replace(/\s+/g, '-')}`,
    type: "spot",
    city: "Hamburg",
    image: spot.image
  })),
  ...berlinSpots.map(spot => ({
    title: spot.name,
    description: spot.description,
    link: `/berlin#${spot.name.toLowerCase().replace(/\s+/g, '-')}`,
    type: "spot",
    city: "Berlin",
    image: spot.image
  }))
] 