import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 section-padding bg-background relative overflow-hidden">
      {/* Subtle teal gradient orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="max-w-xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium font-body mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Built for Indian Real Estate Teams
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground leading-tight text-balance mb-5">
              Capture Leads. Close Deals.{" "}
              <span className="text-primary">Track Everything.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground font-body leading-relaxed mb-8 max-w-md">
              Realty Connect helps real-estate developers and sales teams launch project campaigns, capture leads from every source, and follow up without the spreadsheet chaos.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg" className="rounded-xl px-8">
                Start Free Trial
              </Button>
              <Button variant="hero-outline" size="lg" className="rounded-xl px-8">
                See How It Works
              </Button>
            </div>

            <p className="mt-5 text-xs text-muted-foreground font-body">No credit card required · Set up in 10 minutes</p>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center lg:justify-end" style={{ animationDelay: "0.2s" }}>
            <div className="animate-fade-up">
              <img
                src={heroDashboard}
                alt="Realty Connect CRM dashboard showing lead management and analytics"
                className="w-full max-w-lg lg:max-w-xl drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
