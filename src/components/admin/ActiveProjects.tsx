import { MapPin, TrendingUp, TrendingDown } from "lucide-react";

const projects = [
  {
    name: "Godrej Horizon",
    location: "Wadala, Mumbai",
    leads: 342,
    status: "Active",
    change: "+18%",
    positive: true,
  },
  {
    name: "Lodha Palava Phase 3",
    location: "Dombivli, Mumbai",
    leads: 287,
    status: "Active",
    change: "+12%",
    positive: true,
  },
  {
    name: "Prestige Lakeside",
    location: "Whitefield, Bengaluru",
    leads: 198,
    status: "Active",
    change: "+9%",
    positive: true,
  },
  {
    name: "DLF The Camellias",
    location: "Golf Course Road, Gurugram",
    leads: 156,
    status: "Paused",
    change: "-3%",
    positive: false,
  },
];

export function ActiveProjects() {
  return (
    <div className="bg-card rounded-2xl p-5 sm:p-6 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-heading font-bold text-[14px] text-foreground tracking-tight">Active Projects</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">Your current campaigns</p>
        </div>
        <button className="text-[12px] text-primary font-semibold hover:underline">View all</button>
      </div>
      <div className="space-y-1">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/30 transition-colors group cursor-default"
          >
            <div className="h-10 w-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 ring-1 ring-primary/10">
              <span className="font-heading font-bold text-primary text-[14px]">
                {project.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-foreground truncate">{project.name}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <MapPin className="h-3 w-3 text-muted-foreground" />
                <span className="text-[11px] text-muted-foreground truncate">{project.location}</span>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-[14px] font-heading font-bold text-foreground tabular-nums">
                {project.leads}
              </p>
              <div className="flex items-center gap-0.5 justify-end">
                {project.positive ? (
                  <TrendingUp className="h-3 w-3 text-emerald-600" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500" />
                )}
                <span className={`text-[10px] font-semibold ${project.positive ? "text-emerald-600" : "text-red-500"}`}>
                  {project.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
