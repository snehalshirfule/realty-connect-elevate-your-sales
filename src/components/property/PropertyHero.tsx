import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
  variant?: "compact" | "full" | "detail";
  onEnquire?: () => void;
}

const PropertyHero = ({ data, variant = "full", onEnquire }: Props) => {
  const isCompact = variant === "compact";

  return (
    <section className="relative pt-14">
      {/* Background image with overlay */}
      <div className="relative min-h-[420px] md:min-h-[520px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={data.heroImage}
            alt={data.projectName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/10" />
        </div>

        <div className="relative container px-4 sm:px-6 pb-8 md:pb-12 pt-16">
          {data.currentOffer && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium font-body mb-4 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
              {data.currentOffer}
            </div>
          )}

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-[1.1] text-balance mb-3 max-w-2xl">
            {data.heroHeadline}
          </h1>

          {!isCompact && (
            <p className="text-sm sm:text-base text-white/80 font-body leading-relaxed mb-6 max-w-xl text-pretty">
              {data.heroSubheadline}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex items-center gap-1.5 text-white/90">
              <MapPin className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-body">{data.location}, {data.city}</span>
            </div>
            {data.heroPrice && (
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-heading font-semibold">
                {data.heroPrice}
              </span>
            )}
            {data.heroPossession && (
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-body">
                Possession: {data.heroPossession}
              </span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={onEnquire}
              className="rounded-xl px-6 font-heading font-semibold shadow-hero"
              size="lg"
            >
              Enquire Now <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            {data.brochureUrl && !isCompact && (
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl px-6 font-heading font-semibold bg-white/10 border-white/25 text-white hover:bg-white/20 hover:text-white"
                asChild
              >
                <a href={data.brochureUrl} target="_blank" rel="noopener noreferrer">
                  Download Brochure
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyHero;
