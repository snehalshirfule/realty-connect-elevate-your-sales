const steps = [
  {
    number: "01",
    title: "Create a Campaign Page",
    description: "Set up a branded landing page for your new project — add project details, images, pricing, and go live in minutes.",
  },
  {
    number: "02",
    title: "Capture & Assign Leads",
    description: "Leads from ads, portals, and partners flow into Realty Connect automatically. Assign them to the right salesperson instantly.",
  },
  {
    number: "03",
    title: "Follow Up & Track Progress",
    description: "Your team logs calls, site visits, and status updates. Managers see everything in real time — no chasing required.",
  },
  {
    number: "04",
    title: "Review & Improve",
    description: "Pull monthly reports on conversions, source performance, and team productivity. Make data-driven decisions, not guesses.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 section-padding bg-surface-warm">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <p className="text-sm font-medium text-primary font-body mb-3 tracking-wide uppercase">How It Works</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground text-balance mb-4">
            From Campaign to Closure — In Four Simple Steps
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
            Realty Connect is built for speed and simplicity. Here is how your team starts seeing results from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.number} className="relative">
              <div className="bg-card rounded-2xl border border-border/60 p-6 md:p-8 h-full">
                <span className="text-4xl font-heading font-extrabold text-primary/15 block mb-3">{s.number}</span>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.description}</p>
              </div>
              {/* Connector line — hidden on last */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
