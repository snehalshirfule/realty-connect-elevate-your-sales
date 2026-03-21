import { MapPin } from "lucide-react";
import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
}

const PropertyLocationMap = ({ data }: Props) => {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-xs font-body font-medium text-primary uppercase tracking-widest mb-2">Location</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
            Prime Location, Perfect Connectivity
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-card aspect-[4/3] bg-muted">
            {data.mapEmbedUrl ? (
              <iframe
                src={data.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${data.projectName} location`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground font-body text-sm">
                <MapPin className="w-8 h-8 mr-2 text-primary/40" />
                Map view
              </div>
            )}
          </div>

          {/* Location highlights */}
          <div className="flex flex-col justify-center">
            <h3 className="font-heading font-bold text-foreground text-lg mb-1">{data.location}</h3>
            <p className="text-sm text-muted-foreground font-body mb-6">{data.city}</p>

            {data.locationHighlights && (
              <ul className="space-y-3">
                {data.locationHighlights.map((lh, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm font-body text-foreground">{lh}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyLocationMap;
