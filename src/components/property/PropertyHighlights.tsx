import * as LucideIcons from "lucide-react";
import { PropertyHighlight } from "@/types/property";

interface Props {
  highlights: PropertyHighlight[];
  variant?: "strip" | "grid";
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Building2: LucideIcons.Building2,
  Layers: LucideIcons.Layers,
  Home: LucideIcons.Home,
  Maximize: LucideIcons.Maximize,
  Calendar: LucideIcons.Calendar,
  ShieldCheck: LucideIcons.ShieldCheck,
};

const PropertyHighlights = ({ highlights, variant = "strip" }: Props) => {
  if (variant === "grid") {
    return (
      <section className="py-10 md:py-14 px-4 sm:px-6 bg-surface-teal">
        <div className="container">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-8 text-center">
            Project at a Glance
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {highlights.map((h) => {
              const Icon = iconMap[h.icon] || LucideIcons.Info;
              return (
                <div key={h.label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background shadow-soft text-center">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-xs text-muted-foreground font-body">{h.label}</span>
                  <span className="text-sm font-heading font-bold text-foreground">{h.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6 md:py-8 px-4 sm:px-6 border-b border-border bg-surface-teal">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {highlights.map((h) => {
            const Icon = iconMap[h.icon] || LucideIcons.Info;
            return (
              <div key={h.label} className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-[11px] text-muted-foreground font-body uppercase tracking-wide">{h.label}</p>
                  <p className="text-sm font-heading font-semibold text-foreground">{h.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyHighlights;
