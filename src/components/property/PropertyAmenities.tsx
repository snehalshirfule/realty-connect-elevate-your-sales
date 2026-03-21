import * as LucideIcons from "lucide-react";
import { PropertyAmenity } from "@/types/property";

interface Props {
  amenities: PropertyAmenity[];
  variant?: "grid" | "compact";
}

const amenityIconMap: Record<string, React.FC<{ className?: string }>> = {
  Waves: LucideIcons.Waves,
  Dumbbell: LucideIcons.Dumbbell,
  Trees: LucideIcons.Trees,
  Baby: LucideIcons.Baby,
  Car: LucideIcons.Car,
  Shield: LucideIcons.Shield,
  Zap: LucideIcons.Zap,
  Wind: LucideIcons.Wind,
  Users: LucideIcons.Users,
  Gamepad2: LucideIcons.Gamepad2,
  Flower2: LucideIcons.Flower2,
  UtensilsCrossed: LucideIcons.UtensilsCrossed,
};

const PropertyAmenities = ({ amenities, variant = "grid" }: Props) => {
  const displayAmenities = variant === "compact" ? amenities.slice(0, 8) : amenities;

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-xs font-body font-medium text-primary uppercase tracking-widest mb-2">Amenities</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
            Everything You Need, Right Here
          </h2>
        </div>

        <div className={`grid ${variant === "compact" ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"} gap-3 md:gap-4 max-w-4xl mx-auto`}>
          {displayAmenities.map((a) => {
            const Icon = amenityIconMap[a.icon] || LucideIcons.Star;
            return (
              <div
                key={a.label}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-teal border border-border/50 hover:shadow-soft transition-shadow"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-body font-medium text-foreground">{a.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyAmenities;
