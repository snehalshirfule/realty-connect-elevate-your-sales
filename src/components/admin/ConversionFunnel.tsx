const stages = [
  { label: "Total Leads", value: 2847, pct: 100, color: "hsl(168 55% 38%)" },
  { label: "Qualified", value: 1423, pct: 50, color: "hsl(168 50% 44%)" },
  { label: "Site Visits", value: 438, pct: 15.4, color: "hsl(168 45% 52%)" },
  { label: "Negotiations", value: 134, pct: 4.7, color: "hsl(200 50% 50%)" },
  { label: "Bookings", value: 67, pct: 2.4, color: "hsl(220 55% 55%)" },
];

export function ConversionFunnel() {
  return (
    <div className="bg-card rounded-2xl p-5 sm:p-6 shadow-soft h-full">
      <div className="mb-6">
        <h3 className="font-heading font-bold text-sm text-foreground">Conversion Funnel</h3>
        <p className="text-xs text-muted-foreground mt-0.5">Lead to booking journey</p>
      </div>
      <div className="space-y-3">
        {stages.map((stage, i) => (
          <div key={stage.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-foreground">{stage.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-heading font-bold text-foreground tabular-nums">
                  {stage.value.toLocaleString()}
                </span>
                <span className="text-[10px] text-muted-foreground tabular-nums w-10 text-right">
                  {stage.pct}%
                </span>
              </div>
            </div>
            <div className="h-2.5 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${stage.pct}%`,
                  backgroundColor: stage.color,
                  minWidth: stage.pct < 5 ? "20px" : undefined,
                }}
              />
            </div>
            {i < stages.length - 1 && (
              <div className="flex justify-center py-1">
                <div className="h-3 w-px bg-border" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
