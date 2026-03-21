import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Built for Indian Real Estate",
    description: "Not a generic CRM adapted for property. Realty Connect is purpose-built for how Indian developers, brokers, and sales teams actually work.",
  },
  {
    title: "Replace Spreadsheets & WhatsApp Groups",
    description: "Stop losing leads in Excel files and chat groups. Every lead, follow-up, and update lives in one organised system your whole team can access.",
  },
  {
    title: "Simple Enough for Your Sales Team",
    description: "No complex training needed. If your team can use a smartphone, they can use Realty Connect. Designed for adoption, not frustration.",
  },
  {
    title: "Manager Dashboards That Actually Help",
    description: "Real-time visibility into team performance, pipeline health, and campaign ROI. Spend your time making decisions, not collecting data.",
  },
  {
    title: "Fast Setup, No IT Team Required",
    description: "Go from sign-up to first campaign in under 15 minutes. No developers, no integrations headache. We handle the technology.",
  },
  {
    title: "Backed by Devascend",
    description: "Realty Connect is built and supported by Devascend, a consultancy that understands both technology and real-estate operations.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 section-padding bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <p className="text-sm font-medium text-primary font-body mb-3 tracking-wide uppercase">Why Realty Connect</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground text-balance mb-4">
            Your Team Deserves a System That Works as Hard as They Do
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-heading font-semibold text-foreground mb-1.5">{r.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
