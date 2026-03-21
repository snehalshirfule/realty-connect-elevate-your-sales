import { PropertyData } from "@/types/property";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PropertyNavbar from "@/components/property/PropertyNavbar";
import PropertyHero from "@/components/property/PropertyHero";
import PropertyHighlights from "@/components/property/PropertyHighlights";
import PropertyTrustStrip from "@/components/property/PropertyTrustStrip";
import PropertyConfigurations from "@/components/property/PropertyConfigurations";
import PropertyFloorPlans from "@/components/property/PropertyFloorPlans";
import PropertyAmenities from "@/components/property/PropertyAmenities";
import PropertyGallery from "@/components/property/PropertyGallery";
import PropertyLocationMap from "@/components/property/PropertyLocationMap";
import PropertyBrochureCTA from "@/components/property/PropertyBrochureCTA";
import PropertyEnquiryForm from "@/components/property/PropertyEnquiryForm";
import PropertyStickyCTA from "@/components/property/PropertyStickyCTA";
import PropertyFooter from "@/components/property/PropertyFooter";

interface Props {
  data: PropertyData;
}

const InventoryTemplate = ({ data }: Props) => {
  const scrollToForm = () => {
    document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <PropertyNavbar data={data} />
      <PropertyHero data={data} variant="detail" onEnquire={scrollToForm} />
      <PropertyHighlights highlights={data.highlights} variant="grid" />
      <PropertyTrustStrip badges={data.trustBadges} />

      {/* Configurations with table view — key section for this variant */}
      <PropertyConfigurations configurations={data.configurations} variant="table" onEnquire={scrollToForm} />

      {/* Mid-page CTA */}
      <section className="py-8 px-4 sm:px-6 bg-accent/50">
        <div className="container text-center">
          <p className="text-sm font-body text-foreground mb-3">
            {data.currentOffer || "Speak with our team for exclusive pricing and offers."}
          </p>
          <Button onClick={scrollToForm} className="rounded-xl font-heading font-semibold" size="lg">
            Get Exclusive Pricing <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </section>

      <PropertyFloorPlans floorPlans={data.floorPlans} />
      <PropertyAmenities amenities={data.amenities} variant="grid" />
      <PropertyGallery gallery={data.gallery} />
      <PropertyLocationMap data={data} />
      <PropertyBrochureCTA data={data} />
      <PropertyEnquiryForm data={data} variant="fullwidth" />
      <PropertyFooter data={data} />
      <PropertyStickyCTA data={data} onEnquire={scrollToForm} />
    </div>
  );
};

export default InventoryTemplate;
