import { PropertyData } from "@/types/property";
import PropertyNavbar from "@/components/property/PropertyNavbar";
import PropertyHero from "@/components/property/PropertyHero";
import PropertyHighlights from "@/components/property/PropertyHighlights";
import PropertyTrustStrip from "@/components/property/PropertyTrustStrip";
import PropertyAmenities from "@/components/property/PropertyAmenities";
import PropertyGallery from "@/components/property/PropertyGallery";
import PropertyLocationMap from "@/components/property/PropertyLocationMap";
import PropertyBrochureCTA from "@/components/property/PropertyBrochureCTA";
import PropertyConfigurations from "@/components/property/PropertyConfigurations";
import PropertyEnquiryForm from "@/components/property/PropertyEnquiryForm";
import PropertyAboutBuilder from "@/components/property/PropertyAboutBuilder";
import PropertyFAQ from "@/components/property/PropertyFAQ";
import PropertyFinalCTA from "@/components/property/PropertyFinalCTA";
import PropertyFooter from "@/components/property/PropertyFooter";

interface Props {
  data: PropertyData;
}

const ProjectShowcaseTemplate = ({ data }: Props) => {
  const scrollToForm = () => {
    document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <PropertyNavbar data={data} />
      <PropertyHero data={data} variant="full" onEnquire={scrollToForm} />
      <PropertyHighlights highlights={data.highlights} variant="grid" />
      <PropertyTrustStrip badges={data.trustBadges} />

      {/* Story section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-background">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-xs font-body font-medium text-primary uppercase tracking-widest mb-2">About the Project</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
            A New Standard of Living
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed">
            {data.projectName} by {data.developerName} offers meticulously designed residences in one of {data.city}'s most sought-after locations. 
            Every detail — from the grand lobby to the landscaped gardens — has been crafted to deliver a living experience that matches your aspirations.
          </p>
        </div>
      </section>

      <PropertyAmenities amenities={data.amenities} variant="grid" />
      <PropertyGallery gallery={data.gallery} />
      <PropertyConfigurations configurations={data.configurations} variant="cards" onEnquire={scrollToForm} />
      <PropertyLocationMap data={data} />
      <PropertyAboutBuilder data={data} />
      <PropertyBrochureCTA data={data} />
      <PropertyFAQ faqs={data.faqs} />
      <PropertyFinalCTA data={data} onEnquire={scrollToForm} />
      <PropertyEnquiryForm data={data} variant="fullwidth" />
      <PropertyFooter data={data} />
    </div>
  );
};

export default ProjectShowcaseTemplate;
