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
    <div className="bg-card rounded-2xl p-5 sm:p-6 shadow-soft h-full">
      <div className="mb-5">
        <h3 className="font-heading font-bold text-sm text-foreground">Quick Actions</h3>
        <p className="text-xs text-muted-foreground mt-0.5">Common tasks at a glance</p>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {actions.map((action) => (
          <button
            key={action.label}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-150 active:scale-[0.97] ${
              action.primary
                ? "bg-primary text-primary-foreground shadow-soft hover:shadow-card"
                : "bg-muted/50 text-foreground hover:bg-muted hover:shadow-soft"
            }`}
          >
            <action.icon className="h-5 w-5" />
            <span className="text-[11px] font-medium leading-tight text-center">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
