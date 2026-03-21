import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", leads: 312, visits: 68 },
  { month: "Feb", leads: 428, visits: 92 },
  { month: "Mar", leads: 389, visits: 74 },
  { month: "Apr", leads: 502, visits: 118 },
  { month: "May", leads: 467, visits: 103 },
  { month: "Jun", leads: 534, visits: 142 },
  { month: "Jul", leads: 612, visits: 156 },
  { month: "Aug", leads: 578, visits: 131 },
  { month: "Sep", leads: 645, visits: 168 },
  { month: "Oct", leads: 723, visits: 189 },
  { month: "Nov", leads: 689, visits: 174 },
  { month: "Dec", leads: 847, visits: 210 },
];

const chartConfig = {
  leads: {
    label: "Leads",
    color: "hsl(168 55% 38%)",
  },
  visits: {
    label: "Site Visits",
    color: "hsl(220 55% 55%)",
  },
} satisfies ChartConfig;

export function LeadPipelineChart() {
  return (
    <div className="bg-card rounded-2xl p-5 sm:p-6 shadow-soft">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-heading font-bold text-sm text-foreground">Lead Pipeline</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Monthly lead generation trend</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-muted-foreground">Leads</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "hsl(220 55% 55%)" }} />
            <span className="text-muted-foreground">Site Visits</span>
          </div>
        </div>
      </div>
      <ChartContainer config={chartConfig} className="h-[260px] w-full aspect-auto">
        <AreaChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
          <defs>
            <linearGradient id="fillLeads" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(168 55% 38%)" stopOpacity={0.2} />
              <stop offset="100%" stopColor="hsl(168 55% 38%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="fillVisits" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(220 55% 55%)" stopOpacity={0.15} />
              <stop offset="100%" stopColor="hsl(220 55% 55%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 15% 92%)" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "hsl(210 10% 50%)" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "hsl(210 10% 50%)" }}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="leads"
            stroke="hsl(168 55% 38%)"
            strokeWidth={2}
            fill="url(#fillLeads)"
          />
          <Area
            type="monotone"
            dataKey="visits"
            stroke="hsl(220 55% 55%)"
            strokeWidth={2}
            fill="url(#fillVisits)"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
