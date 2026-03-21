import { Megaphone, UserPlus, ArrowRightLeft, ClipboardCheck, Eye, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Megaphone,
    title: "Launch Project Campaigns",
    description: "Create branded landing pages for each project in minutes. Share with ad platforms, portals, and channel partners to start capturing leads instantly.",
  },
  {
    icon: UserPlus,
    title: "Capture Leads from Every Source",
    description: "Collect enquiries from Facebook ads, 99acres, MagicBricks, walk-ins, and channel partners — all in one place. No more scattered spreadsheets.",
  },
  {
    icon: ArrowRightLeft,
    title: "Assign to the Right Person",
    description: "Route leads automatically or manually to the right salesperson based on project, source, or location. Reduce response time and missed opportunities.",
  },
  {
    icon: ClipboardCheck,
    title: "Track Follow-Ups & Site Visits",
    description: "Log every call, meeting, and site visit. Set reminders so no lead falls through the cracks. Sales managers see it all in real-time.",
  },
  {
    icon: Eye,
    title: "Full Manager Visibility",
    description: "Managers and admins get a clear view of team activity, pending follow-ups, and pipeline health — without chasing people on WhatsApp.",
  },
  {
    icon: BarChart3,
    title: "Monthly Performance Reports",
    description: "Review campaign ROI, salesperson conversion rates, and source-wise performance with clean, actionable reports every month.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 section-padding bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <p className="text-sm font-medium text-primary font-body mb-3 tracking-wide uppercase">Core Features</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground text-balance mb-4">
            Everything Your Sales Team Needs — In One Platform
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
            From the moment a lead comes in to the day it converts, Realty Connect keeps your entire team aligned and accountable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-card rounded-2xl border border-border/60 p-6 md:p-8 hover:shadow-card hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
