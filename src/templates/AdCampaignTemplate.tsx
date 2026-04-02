import { PropertyData } from "@/types/property";
import PropertyNavbar from "@/components/property/PropertyNavbar";
import PropertyHighlights from "@/components/property/PropertyHighlights";
import PropertyTrustStrip from "@/components/property/PropertyTrustStrip";
import PropertyEnquiryForm from "@/components/property/PropertyEnquiryForm";
import PropertyAmenities from "@/components/property/PropertyAmenities";
import PropertyConfigurations from "@/components/property/PropertyConfigurations";
import PropertyAboutBuilder from "@/components/property/PropertyAboutBuilder";
import PropertyFAQ from "@/components/property/PropertyFAQ";
import PropertyFinalCTA from "@/components/property/PropertyFinalCTA";
import PropertyFooter from "@/components/property/PropertyFooter";
import { MapPin, ShieldCheck, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  data: PropertyData;
}

const AdCampaignTemplate = ({ data }: Props) => {
  const scrollToForm = () => {
    document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <PropertyNavbar data={data} />

      {/* Hero: headline-dominant with balanced form */}
      <section className="relative pt-14">
        <div className="relative min-h-[520px] md:min-h-[580px]">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={data.heroImage}
              alt={data.projectName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/20" />
          </div>

          <div className="relative container px-4 sm:px-6 py-10 md:py-14">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">

              {/* Left: headline-dominant copy — 7 cols */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Offer badge */}
                {data.currentOffer && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium font-body mb-5 backdrop-blur-sm w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                    {data.currentOffer}
                  </div>
                )}

                {/* Headline — strongest element */}
                <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-heading font-extrabold text-white leading-[1.08] text-balance mb-4 max-w-xl">
                  {data.heroHeadline}
                </h1>

                <p className="text-sm sm:text-base text-white/75 font-body leading-relaxed mb-6 max-w-lg text-pretty">
                  {data.heroSubheadline}
                </p>

                {/* Key facts: price, possession, location */}
                <div className="flex flex-wrap items-center gap-2.5 mb-6">
                  {data.heroPrice && (
                    <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-heading font-bold">
                      {data.heroPrice}
                    </span>
                  )}
                  {data.heroPossession && (
                    <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-body">
                      Possession: {data.heroPossession}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5 text-white/80 text-sm font-body">
                    <MapPin className="w-3.5 h-3.5" />
                    {data.location}
                  </span>
                </div>

                {/* Inline trust strip */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {(data.trustBadges || []).slice(0, 4).map((badge) => (
                    <div key={badge} className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary-foreground/70" />
                      <span className="text-[11px] font-body text-white/60">{badge}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile CTA — visible above fold on small screens */}
                <div className="lg:hidden">
                  <Button
                    onClick={scrollToForm}
                    className="rounded-xl px-6 font-heading font-semibold w-full sm:w-auto"
                    size="lg"
                  >
                    Get Instant Quote <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              </div>

              {/* Right: form — 5 cols, visually secondary */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="max-w-sm ml-auto">
                  <PropertyEnquiryForm data={data} variant="card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PropertyHighlights highlights={data.highlights} variant="strip" />

      {/* Mobile form — after highlights so user sees value first */}
      <div className="lg:hidden">
        <PropertyEnquiryForm data={data} variant="fullwidth" />
      </div>

      <PropertyAmenities amenities={data.amenities} variant="compact" />
      <PropertyConfigurations configurations={data.configurations} variant="cards" onEnquire={scrollToForm} />
      <PropertyAboutBuilder data={data} />
      <PropertyFAQ faqs={data.faqs} />
      <PropertyFinalCTA data={data} onEnquire={scrollToForm} />
      <PropertyFooter data={data} />

      {/* Sticky bottom bar — mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-sm border-t border-border shadow-elevated">
        <div className="container flex items-center justify-between gap-3 px-4 py-3">
          <div className="min-w-0">
            <p className="font-heading font-bold text-foreground text-sm truncate">{data.projectName}</p>
            {data.heroPrice && (
              <p className="text-xs text-primary font-heading font-semibold">{data.heroPrice}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${data.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium font-body bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Call
            </a>
            <a
              href={`https://wa.me/${data.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium font-body bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
            <Button onClick={scrollToForm} size="sm" className="rounded-lg font-heading font-semibold text-xs">
              Enquire <ArrowRight className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCampaignTemplate;
