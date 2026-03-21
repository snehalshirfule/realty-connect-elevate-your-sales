import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 section-padding bg-surface-teal relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground text-balance mb-4">
            Ready to Bring Order to Your Sales Process?
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            Join real-estate teams across India who have moved from scattered leads to structured sales — with Realty Connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg" className="rounded-xl px-10">
              Start Your Free Trial
            </Button>
            <Button variant="hero-outline" size="lg" className="rounded-xl px-10">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-5 text-xs text-muted-foreground font-body">Free for small teams · No credit card needed · Live in 10 minutes</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
