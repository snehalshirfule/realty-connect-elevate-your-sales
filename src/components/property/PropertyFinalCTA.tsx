import { PropertyData } from "@/types/property";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  data: PropertyData;
  onEnquire?: () => void;
}

const PropertyFinalCTA = ({ data, onEnquire }: Props) => {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-primary/5">
      <div className="container max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
          {data.finalCtaHeadline || `Interested in ${data.projectName}?`}
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground font-body mb-6">
          {data.finalCtaSubtext || "Get in touch with our team for exclusive pricing and a site visit."}
        </p>
        <Button
          onClick={onEnquire}
          className="rounded-xl px-8 font-heading font-semibold"
          size="lg"
        >
          Enquire Now <ArrowRight className="w-4 h-4 ml-1.5" />
        </Button>
      </div>
    </section>
  );
};

export default PropertyFinalCTA;
