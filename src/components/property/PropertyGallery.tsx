import { useState } from "react";
import { PropertyGalleryImage } from "@/types/property";

interface Props {
  gallery: PropertyGalleryImage[];
  variant?: "grid" | "carousel";
}

const categories = ["all", "exterior", "interior", "amenity", "view"] as const;

const PropertyGallery = ({ gallery, variant = "grid" }: Props) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = activeCategory === "all"
    ? gallery
    : gallery.filter((g) => g.category === activeCategory);

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-background">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-xs font-body font-medium text-primary uppercase tracking-widest mb-2">Gallery</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">See the Vision Come to Life</h2>
        </div>

        {/* Category filter */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-body font-medium capitalize transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {filtered.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(img.src)}
              className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-muted"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] rounded-2xl shadow-elevated object-contain"
            />
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl font-heading"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyGallery;
