import { PropertyData } from "@/types/property";
import { Building2, Award, Clock } from "lucide-react";

interface Props {
  data: PropertyData;
}

const PropertyAboutBuilder = ({ data }: Props) => {
  if (!data.aboutBuilder) return null;

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-muted/30">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-body font-medium text-primary uppercase tracking-widest mb-2">
            About the Developer
          </p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
            {data.developerName}
          </h2>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed text-center mb-8">
          {data.aboutBuilder}
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {data.builderExperience && (
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border/50 shadow-sm">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-heading font-bold text-foreground">{data.builderExperience}</p>
                <p className="text-[11px] text-muted-foreground font-body">Experience</p>
              </div>
            </div>
          )}
          {data.builderProjects && (
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border/50 shadow-sm">
              <Building2 className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-heading font-bold text-foreground">{data.builderProjects}</p>
                <p className="text-[11px] text-muted-foreground font-body">Delivered</p>
              </div>
            </div>
          )}
          {data.reraNumber && (
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border/50 shadow-sm">
              <Award className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-heading font-bold text-foreground">RERA Verified</p>
                <p className="text-[11px] text-muted-foreground font-body">{data.reraNumber}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertyAboutBuilder;
