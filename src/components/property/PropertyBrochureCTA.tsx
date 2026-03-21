import { Button } from "@/components/ui/button";
import { PropertyData } from "@/types/property";
import { Download, Phone, MessageCircle } from "lucide-react";

interface Props {
  data: PropertyData;
}

const PropertyBrochureCTA = ({ data }: Props) => {
  return (
    <section className="py-10 md:py-14 px-4 sm:px-6 bg-primary">
      <div className="container text-center">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary-foreground mb-3">
          Want the Complete Details?
        </h2>
        <p className="text-sm text-primary-foreground/80 font-body mb-6 max-w-md mx-auto">
          Download the brochure or connect with our team for exclusive pricing and offers.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          {data.brochureUrl && (
            <Button
              variant="secondary"
              size="lg"
              className="rounded-xl font-heading font-semibold"
              asChild
            >
              <a href={data.brochureUrl} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </a>
            </Button>
          )}
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl font-heading font-semibold bg-primary-foreground/10 border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
            asChild
          >
            <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyBrochureCTA;
