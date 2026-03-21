import { Plus, UserPlus, UserCheck, FileText, Download, Phone } from "lucide-react";

const actions = [
  { label: "Create Campaign", icon: Plus, primary: true },
  { label: "Add Lead", icon: UserPlus },
  { label: "Assign Lead", icon: UserCheck },
  { label: "Generate Report", icon: FileText },
  { label: "Download Leads", icon: Download },
  { label: "Log a Call", icon: Phone },
];

export function QuickActions() {
  return (
    <div className="bg-card rounded-2xl p-5 sm:p-6 shadow-card h-full flex flex-col">
      <div className="mb-4">
        <h3 className="font-heading font-bold text-[14px] text-foreground tracking-tight">Quick Actions</h3>
        <p className="text-[11px] text-muted-foreground mt-0.5">Common tasks at a glance</p>
      </div>
      <div className="grid grid-cols-2 gap-2 flex-1">
        {actions.map((action) => (
          <button
            key={action.label}
            className={`flex flex-col items-center justify-center gap-2 p-3.5 rounded-xl transition-all duration-150 active:scale-[0.97] ${
              action.primary
                ? "bg-primary text-primary-foreground shadow-card hover:shadow-elevated"
                : "bg-muted/40 text-foreground hover:bg-muted/70 ring-1 ring-border/40 hover:ring-border/60"
            }`}
          >
            <action.icon className="h-[18px] w-[18px]" />
            <span className="text-[11px] font-semibold leading-tight text-center">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
