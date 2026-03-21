export type PropertyTheme = "teal" | "navy" | "emerald" | "amber" | "slate";

export interface PropertyConfig {
  type: string;
  area: string;
  price: string;
  status?: "available" | "limited" | "sold-out";
}

export interface PropertyAmenity {
  icon: string;
  label: string;
}

export interface PropertyHighlight {
  icon: string;
  label: string;
  value: string;
}

export interface PropertyGalleryImage {
  src: string;
  alt: string;
  category?: "exterior" | "interior" | "amenity" | "view";
}

export interface PropertyFloorPlan {
  label: string;
  image: string;
  area: string;
  bedrooms: string;
}

export interface PropertyData {
  // Branding
  projectName: string;
  developerName: string;
  developerLogo?: string;
  channelPartner?: string;
  channelPartnerLogo?: string;
  reraNumber?: string;

  // Hero
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  heroPrice?: string;
  heroPossession?: string;

  // Location
  location: string;
  city: string;
  micromarket?: string;
  mapEmbedUrl?: string;
  locationHighlights?: string[];

  // Content
  highlights: PropertyHighlight[];
  amenities: PropertyAmenity[];
  configurations: PropertyConfig[];
  gallery: PropertyGalleryImage[];
  floorPlans: PropertyFloorPlan[];

  // Offers
  currentOffer?: string;
  possessionDate?: string;

  // Contact
  phone: string;
  whatsapp: string;
  brochureUrl?: string;

  // Trust
  trustBadges?: string[];

  // Theme
  theme?: PropertyTheme;
}
