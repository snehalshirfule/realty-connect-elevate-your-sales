import { useState } from "react";
import { PropertyFloorPlan } from "@/types/property";

interface Props {
  floorPlans: PropertyFloorPlan[];
}

const PropertyFloorPlans = ({ floorPlans }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = floorPlans[activeIndex];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-surface-teal">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-xs font-body font-medium text-primary uppercase tracking-widest mb-2">Floor Plans</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Thoughtfully Designed Layouts</h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {floorPlans.map((fp, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`px-4 py-2 rounded-xl text-sm font-body font-medium transition-colors ${
                activeIndex === i
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-background text-muted-foreground hover:bg-accent border border-border/50"
              }`}
            >
              {fp.label}
            </button>
          ))}
        </div>

        {/* Active plan */}
        <div className="max-w-2xl mx-auto bg-background rounded-2xl shadow-card border border-border/50 overflow-hidden">
          <div className="aspect-[4/3] bg-muted">
            <img
              src={active.image}
              alt={active.label}
              className="w-full h-full object-contain p-4"
            />
          </div>
          <div className="flex justify-between items-center px-6 py-4 border-t border-border/50">
            <div>
              <p className="font-heading font-bold text-foreground">{active.label}</p>
              <p className="text-sm text-muted-foreground font-body">{active.bedrooms}</p>
            </div>
            <p className="text-sm font-heading font-semibold text-primary">{active.area}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyFloorPlans;
