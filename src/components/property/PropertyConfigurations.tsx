import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PropertyConfig } from "@/types/property";
import { ArrowRight } from "lucide-react";

interface Props {
  configurations: PropertyConfig[];
  variant?: "table" | "cards";
  onEnquire?: () => void;
}

const statusColors: Record<string, string> = {
  available: "bg-emerald-50 text-emerald-700 border-emerald-200",
  limited: "bg-amber-50 text-amber-700 border-amber-200",
  "sold-out": "bg-red-50 text-red-600 border-red-200",
};

const statusLabels: Record<string, string> = {
  available: "Available",
  limited: "Few Left",
  "sold-out": "Sold Out",
};

const PropertyConfigurations = ({ configurations, variant = "cards", onEnquire }: Props) => {
  if (variant === "table") {
    return (
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-surface-warm">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-xs font-body font-medium text-primary uppercase tracking-widest mb-2">Configurations</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Choose Your Ideal Home</h2>
          </div>

          <div className="max-w-3xl mx-auto bg-background rounded-2xl shadow-card overflow-hidden border border-border/50">
            <div className="hidden sm:grid grid-cols-4 gap-4 px-6 py-3 bg-muted/50 text-xs font-body font-medium text-muted-foreground uppercase tracking-wider">
              <span>Type</span>
              <span>Area</span>
              <span>Price</span>
              <span>Status</span>
            </div>
            {configurations.map((c, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 px-6 py-4 items-center ${i < configurations.length - 1 ? "border-b border-border/50" : ""}`}
              >
                <span className="font-heading font-semibold text-sm text-foreground">{c.type}</span>
                <span className="text-sm font-body text-muted-foreground">{c.area}</span>
                <span className="font-heading font-bold text-sm text-foreground">{c.price}</span>
                <div>
                  {c.status && (
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-medium border ${statusColors[c.status]}`}>
                      {statusLabels[c.status]}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {onEnquire && (
            <div className="text-center mt-8">
              <Button onClick={onEnquire} className="rounded-xl px-6 font-heading font-semibold" size="lg">
                Get Detailed Pricing <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-surface-warm">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-xs font-body font-medium text-primary uppercase tracking-widest mb-2">Configurations & Pricing</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Find Your Perfect Fit</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {configurations.map((c, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-5 shadow-card border border-border/50 hover:shadow-elevated transition-shadow flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading font-bold text-foreground text-sm">{c.type}</h3>
                {c.status && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${statusColors[c.status]}`}>
                    {statusLabels[c.status]}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground font-body mb-1">{c.area}</p>
              <p className="text-lg font-heading font-extrabold text-primary mt-auto pt-3">{c.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyConfigurations;
