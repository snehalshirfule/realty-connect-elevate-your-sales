import { PropertyData } from "@/types/property";

export const sampleProperty: PropertyData = {
  projectName: "Skyline Residences",
  developerName: "Prestige Group",
  reraNumber: "RERA/KA/2024/001234",
  channelPartner: "Elite Realty Partners",

  heroHeadline: "Elevated Living in the Heart of Whitefield",
  heroSubheadline: "Premium 2 & 3 BHK residences with panoramic city views, world-class amenities, and seamless connectivity to IT hubs.",
  heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
  heroPrice: "₹85 Lakh Onwards",
  heroPossession: "Dec 2026",

  location: "Whitefield, Near ITPL Main Road",
  city: "Bangalore",
  micromarket: "Whitefield",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7!2d77.7!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1",
  locationHighlights: [
    "5 min to ITPL & Prestige Tech Park",
    "10 min to Phoenix Marketcity",
    "15 min to Varthur Lake",
    "Direct metro connectivity (Purple Line extension)",
    "Close to top international schools",
  ],

  highlights: [
    { icon: "Building2", label: "Towers", value: "3 Towers" },
    { icon: "Layers", label: "Floors", value: "G + 24" },
    { icon: "Home", label: "Units", value: "480 Units" },
    { icon: "Maximize", label: "Plot Area", value: "4.5 Acres" },
    { icon: "Calendar", label: "Possession", value: "Dec 2026" },
    { icon: "ShieldCheck", label: "RERA", value: "Registered" },
  ],

  amenities: [
    { icon: "Waves", label: "Infinity Pool" },
    { icon: "Dumbbell", label: "Modern Gymnasium" },
    { icon: "Trees", label: "Landscaped Gardens" },
    { icon: "Baby", label: "Kids Play Area" },
    { icon: "Car", label: "Covered Parking" },
    { icon: "Shield", label: "24/7 Security" },
    { icon: "Zap", label: "Power Backup" },
    { icon: "Wind", label: "Jogging Track" },
    { icon: "Users", label: "Clubhouse" },
    { icon: "Gamepad2", label: "Indoor Games" },
    { icon: "Flower2", label: "Meditation Zone" },
    { icon: "UtensilsCrossed", label: "Party Hall" },
  ],

  configurations: [
    { type: "2 BHK Standard", area: "1,050 sq.ft.", price: "₹85 Lakh", status: "available" },
    { type: "2 BHK Large", area: "1,200 sq.ft.", price: "₹98 Lakh", status: "available" },
    { type: "3 BHK Premium", area: "1,550 sq.ft.", price: "₹1.28 Cr", status: "limited" },
    { type: "3 BHK Grande", area: "1,850 sq.ft.", price: "₹1.52 Cr", status: "available" },
  ],

  gallery: [
    { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80", alt: "Building Exterior", category: "exterior" },
    { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Modern Living Room", category: "interior" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Aerial View", category: "exterior" },
    { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Premium Kitchen", category: "interior" },
    { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80", alt: "Swimming Pool", category: "amenity" },
    { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "City View", category: "view" },
  ],

  floorPlans: [
    { label: "2 BHK Standard", image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&q=80", area: "1,050 sq.ft.", bedrooms: "2 BHK" },
    { label: "2 BHK Large", image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&q=80", area: "1,200 sq.ft.", bedrooms: "2 BHK" },
    { label: "3 BHK Premium", image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&q=80", area: "1,550 sq.ft.", bedrooms: "3 BHK" },
  ],

  currentOffer: "Pre-launch offer: No GST for first 50 bookings",
  possessionDate: "December 2026",

  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  brochureUrl: "#",

  trustBadges: [
    "RERA Registered",
    "Bank Approved",
    "ISO 9001 Certified",
    "500+ Happy Families",
  ],

  theme: "teal",
};
