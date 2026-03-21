import { Phone, MessageCircle } from "lucide-react";
import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
  showEnquiryInline?: boolean;
}

const PropertyNavbar = ({ data, showEnquiryInline }: Props) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-14 px-4 sm:px-6">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <span className="text-primary-foreground font-heading font-bold text-xs">RC</span>
          </div>
          <div className="min-w-0">
            <p className="font-heading font-bold text-foreground text-sm truncate">{data.projectName}</p>
            <p className="text-[10px] text-muted-foreground font-body truncate">by {data.developerName}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${data.phone}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium font-body bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Call</span>
          </a>
          <a
            href={`https://wa.me/${data.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium font-body bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default PropertyNavbar;
