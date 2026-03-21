import { useRef } from "react";
import { PropertyData } from "@/types/property";
import PropertyNavbar from "@/components/property/PropertyNavbar";
import PropertyHero from "@/components/property/PropertyHero";
import PropertyHighlights from "@/components/property/PropertyHighlights";
import PropertyTrustStrip from "@/components/property/PropertyTrustStrip";
import PropertyEnquiryForm from "@/components/property/PropertyEnquiryForm";
import PropertyAmenities from "@/components/property/PropertyAmenities";
import PropertyStickyCTA from "@/components/property/PropertyStickyCTA";
import PropertyFooter from "@/components/property/PropertyFooter";

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
      
      {/* Hero + Inline form side by side on desktop */}
      <section className="relative pt-14">
        <div className="relative min-h-[500px] md:min-h-[560px]">
          <div className="absolute inset-0">
            <img src={data.heroImage} alt={data.projectName} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
          </div>

          <div className="relative container px-4 sm:px-6 py-12 md:py-16">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left: copy */}
              <div className="lg:col-span-3">
                {data.currentOffer && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium font-body mb-5 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                    {data.currentOffer}
                  </div>
                )}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white leading-[1.1] text-balance mb-4">
                  {data.heroHeadline}
                </h1>
                <p className="text-sm sm:text-base text-white/75 font-body leading-relaxed mb-6 max-w-lg">
                  {data.heroSubheadline}
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {data.heroPrice && (
                    <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-heading font-semibold">
                      {data.heroPrice}
                    </span>
                  )}
                  {data.heroPossession && (
                    <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-body">
                      Possession: {data.heroPossession}
                    </span>
                  )}
                </div>
              </div>

              {/* Right: form */}
              <div className="lg:col-span-2">
                <PropertyEnquiryForm data={data} variant="card" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PropertyHighlights highlights={data.highlights} variant="strip" />
      <PropertyTrustStrip badges={data.trustBadges} />
      <PropertyAmenities amenities={data.amenities} variant="compact" />
      <PropertyEnquiryForm data={data} variant="fullwidth" />
      <PropertyFooter data={data} />
      <PropertyStickyCTA data={data} onEnquire={scrollToForm} />
    </div>
  );
};

export default AdCampaignTemplate;
