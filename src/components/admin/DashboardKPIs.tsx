import { Users, MapPin, CheckCircle2, Megaphone, Clock, TrendingUp, TrendingDown } from "lucide-react";

const kpis = [
  {
    label: "Total Leads",
    value: "2,847",
    change: "+12.4%",
    positive: true,
    icon: Users,
    accent: "hsl(168 55% 38%)",
    bg: "hsl(168 30% 95%)",
  },
  {
    label: "Site Visits",
    value: "438",
    change: "+8.2%",
    positive: true,
    icon: MapPin,
    accent: "hsl(220 60% 50%)",
    bg: "hsl(220 40% 95%)",
  },
  {
    label: "Conversions",
    value: "67",
    change: "+23.1%",
    positive: true,
    icon: CheckCircle2,
    accent: "hsl(150 50% 40%)",
    bg: "hsl(150 30% 95%)",
  },
  {
    label: "Active Campaigns",
    value: "12",
    change: "+2",
    positive: true,
    icon: Megaphone,
    accent: "hsl(30 70% 50%)",
    bg: "hsl(30 50% 95%)",
  },
  {
    label: "Pending Follow-ups",
    value: "156",
    change: "-5.3%",
    positive: false,
    icon: Clock,
    accent: "hsl(0 55% 50%)",
    bg: "hsl(0 30% 96%)",
  },
];

export function DashboardKPIs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className="bg-card rounded-2xl p-5 shadow-soft hover:shadow-card transition-shadow duration-300 group"
        >
          <div className="flex items-start justify-between mb-4">
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: kpi.bg }}
            >
              <kpi.icon className="h-[18px] w-[18px]" style={{ color: kpi.accent }} />
            </div>
            <div
              className={`flex items-center gap-0.5 text-xs font-medium px-2 py-0.5 rounded-full ${
                kpi.positive
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
          <p className="font-heading font-bold text-2xl text-foreground leading-none mb-1 tabular-nums">
            {kpi.value}
          </p>
          <p className="text-xs text-muted-foreground font-body">{kpi.label}</p>
        </div>
      ))}
    </div>
  );
}
