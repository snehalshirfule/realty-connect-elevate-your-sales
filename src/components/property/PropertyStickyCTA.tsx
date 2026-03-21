import { PropertyData } from "@/types/property";
import { Phone, MessageCircle, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  data: PropertyData;
  onEnquire?: () => void;
}

const PropertyStickyCTA = ({ data, onEnquire }: Props) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-t border-border shadow-elevated">
      <div className="container flex items-center justify-between gap-3 px-4 sm:px-6 py-3">
        <div className="hidden sm:block min-w-0">
          <p className="font-heading font-bold text-foreground text-sm truncate">{data.projectName}</p>
          {data.heroPrice && (
            <p className="text-xs text-primary font-heading font-semibold">{data.heroPrice}</p>
          )}
        </div>

        <div className="flex items-center gap-2 ml-auto">
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
            WhatsApp
          </a>
          <Button onClick={onEnquire} size="sm" className="rounded-lg font-heading font-semibold text-xs">
            Enquire <ArrowRight className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyStickyCTA;
