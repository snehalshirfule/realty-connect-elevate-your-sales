import { Users, MapPin, CheckCircle2, Megaphone, Clock, TrendingUp, TrendingDown } from "lucide-react";

const kpis = [
  {
    label: "Total Leads",
    value: "2,847",
    change: "+12.4%",
    positive: true,
    icon: Users,
    accent: "hsl(168 55% 38%)",
    bg: "hsl(168 40% 96%)",
    featured: true,
  },
  {
    label: "Site Visits",
    value: "438",
    change: "+8.2%",
    positive: true,
    icon: MapPin,
    accent: "hsl(220 55% 50%)",
    bg: "hsl(220 40% 96%)",
  },
  {
    label: "Conversions",
    value: "67",
    change: "+23.1%",
    positive: true,
    icon: CheckCircle2,
    accent: "hsl(150 50% 40%)",
    bg: "hsl(150 35% 96%)",
  },
  {
    label: "Active Campaigns",
    value: "12",
    change: "+2",
    positive: true,
    icon: Megaphone,
    accent: "hsl(30 65% 48%)",
    bg: "hsl(30 50% 96%)",
  },
  {
    label: "Pending Follow-ups",
    value: "156",
    change: "-5.3%",
    positive: false,
    icon: Clock,
    accent: "hsl(0 50% 50%)",
    bg: "hsl(0 30% 97%)",
  },
];

export function DashboardKPIs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className={`rounded-2xl p-5 transition-all duration-300 group cursor-default ${
            kpi.featured
              ? "bg-primary text-primary-foreground shadow-card"
              : "bg-card shadow-card hover:shadow-elevated"
          }`}
        >
          <div className="flex items-start justify-between mb-3.5">
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: kpi.featured ? "hsla(0,0%,100%,0.18)" : kpi.bg,
              }}
            >
              <kpi.icon
                className="h-[18px] w-[18px]"
                style={{ color: kpi.featured ? "white" : kpi.accent }}
              />
            </div>
            <div
              className={`flex items-center gap-0.5 text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                kpi.featured
                  ? kpi.positive
                    ? "text-white/90 bg-white/15"
                    : "text-white/90 bg-white/15"
                  : kpi.positive
                  ? "text-emerald-700 bg-emerald-50"
                  : "text-red-600 bg-red-50"
              }`}
            >
              {kpi.positive ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              {kpi.change}
            </div>
          </div>
          <p className={`font-heading font-extrabold text-[26px] leading-none mb-1 tabular-nums ${
            kpi.featured ? "" : "text-foreground"
          }`}>
            {kpi.value}
          </p>
          <p className={`text-[12px] font-medium ${
            kpi.featured ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}>
            {kpi.label}
          </p>
        </div>
      ))}
    </div>
  );
}
