import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { source: "Meta Ads", leads: 842, fill: "hsl(168 55% 38%)" },
  { source: "99acres", leads: 634, fill: "hsl(168 45% 48%)" },
  { source: "MagicBricks", leads: 521, fill: "hsl(168 35% 58%)" },
  { source: "Channel Partners", leads: 487, fill: "hsl(200 40% 55%)" },
  { source: "Walk-ins", leads: 363, fill: "hsl(210 25% 65%)" },
];

const chartConfig = {
  leads: {
    label: "Leads",
    color: "hsl(168 55% 38%)",
  },
} satisfies ChartConfig;

export function LeadSourcesChart() {
  return (
    <div className="bg-card rounded-2xl p-5 sm:p-6 shadow-soft">
      <div className="mb-6">
        <h3 className="font-heading font-bold text-sm text-foreground">Lead Sources</h3>
        <p className="text-xs text-muted-foreground mt-0.5">Where your leads are coming from</p>
      </div>
      <ChartContainer config={chartConfig} className="h-[240px] w-full aspect-auto">
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 4, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 15% 92%)" horizontal={false} />
          <XAxis
            type="number"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "hsl(210 10% 50%)" }}
          />
          <YAxis
            type="category"
            dataKey="source"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "hsl(210 10% 50%)" }}
            width={110}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="leads" radius={[0, 6, 6, 0]} barSize={28} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
