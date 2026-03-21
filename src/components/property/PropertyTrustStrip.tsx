import { ShieldCheck } from "lucide-react";

interface Props {
  badges?: string[];
}

const PropertyTrustStrip = ({ badges = [] }: Props) => {
  if (badges.length === 0) return null;

  return (
    <section className="py-4 md:py-5 px-4 sm:px-6 bg-muted/50 border-y border-border/50">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-body font-medium text-muted-foreground">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTrustStrip;
