import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { source: "Meta Ads", leads: 842, fill: "hsl(168 55% 38%)" },
  { source: "99acres", leads: 634, fill: "hsl(168 45% 46%)" },
  { source: "MagicBricks", leads: 521, fill: "hsl(168 38% 54%)" },
  { source: "Channel Partners", leads: 487, fill: "hsl(200 35% 58%)" },
  { source: "Walk-ins", leads: 363, fill: "hsl(210 25% 68%)" },
];

const chartConfig = {
  leads: {
    label: "Leads",
    color: "hsl(168 55% 38%)",
  },
} satisfies ChartConfig;

export function LeadSourcesChart() {
  return (
    <div className="bg-card rounded-2xl p-5 sm:p-6 shadow-card h-full">
      <div className="mb-5">
        <h3 className="font-heading font-bold text-[14px] text-foreground tracking-tight">Lead Sources</h3>
        <p className="text-[11px] text-muted-foreground mt-0.5">Where your leads are coming from</p>
      </div>
      <ChartContainer config={chartConfig} className="h-[240px] w-full aspect-auto">
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 4, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 15% 93%)" horizontal={false} />
          <XAxis
            type="number"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "hsl(210 10% 55%)", fontFamily: "Inter" }}
          />
          <YAxis
            type="category"
            dataKey="source"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "hsl(210 10% 45%)", fontFamily: "Inter", fontWeight: 500 }}
            width={115}
          />
          <ChartTooltip
            content={<ChartTooltipContent />}
            cursor={{ fill: "hsl(210 15% 96%)" }}
          />
          <Bar dataKey="leads" radius={[0, 8, 8, 0]} barSize={24} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
