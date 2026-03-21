import { MapPin, TrendingUp } from "lucide-react";

const projects = [
  {
    name: "Godrej Horizon",
    location: "Wadala, Mumbai",
    leads: 342,
    status: "Active",
    change: "+18%",
  },
  {
    name: "Lodha Palava Phase 3",
    location: "Dombivli, Mumbai",
    leads: 287,
    status: "Active",
    change: "+12%",
  },
  {
    name: "Prestige Lakeside",
    location: "Whitefield, Bengaluru",
    leads: 198,
    status: "Active",
    change: "+9%",
  },
  {
    name: "DLF The Camellias",
    location: "Golf Course Road, Gurugram",
    leads: 156,
    status: "Paused",
    change: "-3%",
  },
];

export function ActiveProjects() {
  return (
    <div className="bg-card rounded-2xl p-5 sm:p-6 shadow-soft">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-heading font-bold text-sm text-foreground">Active Projects</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Your current campaigns</p>
        </div>
        <button className="text-xs text-primary font-medium hover:underline">View all</button>
      </div>
      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/40 transition-colors group"
          >
            <div className="h-11 w-11 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
              <span className="font-heading font-bold text-primary text-sm">
                {project.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{project.name}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <MapPin className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground truncate">{project.location}</span>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-sm font-heading font-bold text-foreground tabular-nums">
                {project.leads}
              </p>
              <div className="flex items-center gap-0.5 justify-end">
                <TrendingUp className="h-3 w-3 text-emerald-600" />
                <span className="text-[10px] text-emerald-600 font-medium">{project.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
