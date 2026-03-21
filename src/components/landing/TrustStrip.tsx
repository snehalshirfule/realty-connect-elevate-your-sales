import { BarChart3, Users, ShieldCheck, Zap } from "lucide-react";

const stats = [
  { icon: Zap, value: "5 min", label: "Campaign setup time" },
  { icon: Users, value: "50+", label: "Teams onboarded" },
  { icon: BarChart3, value: "3×", label: "Faster lead response" },
  { icon: ShieldCheck, value: "100%", label: "Follow-up visibility" },
];

const TrustStrip = () => {
  return (
    <section className="py-10 md:py-14 section-padding bg-surface-teal border-y border-border/50">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-1">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-2xl md:text-3xl font-heading font-bold text-foreground">{s.value}</span>
              <span className="text-xs md:text-sm text-muted-foreground font-body">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
