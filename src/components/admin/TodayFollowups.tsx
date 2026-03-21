import { Phone, MessageSquare, Calendar } from "lucide-react";

const followups = [
  {
    name: "Priya Mehta",
    initials: "PM",
    action: "Call back — interested in 3 BHK",
    time: "10:30 AM",
    type: "call" as const,
    color: "hsl(168 55% 38%)",
    bg: "hsl(168 40% 96%)",
  },
  {
    name: "Rajesh Kumar",
    initials: "RK",
    action: "Site visit confirmation for Saturday",
    time: "11:00 AM",
    type: "visit" as const,
    color: "hsl(220 55% 50%)",
    bg: "hsl(220 40% 96%)",
  },
  {
    name: "Anita Sharma",
    initials: "AS",
    action: "WhatsApp brochure — Godrej Horizon",
    time: "12:15 PM",
    type: "message" as const,
    color: "hsl(150 50% 40%)",
    bg: "hsl(150 35% 96%)",
  },
  {
    name: "Vikram Singh",
    initials: "VS",
    action: "Negotiate pricing — ready to book",
    time: "2:00 PM",
    type: "call" as const,
    color: "hsl(30 65% 48%)",
    bg: "hsl(30 50% 96%)",
  },
  {
    name: "Deepika Patel",
    initials: "DP",
    action: "Schedule second visit — shortlisted unit",
    time: "3:30 PM",
    type: "visit" as const,
    color: "hsl(280 40% 52%)",
    bg: "hsl(280 30% 96%)",
  },
];

const iconMap = {
  call: Phone,
  visit: Calendar,
  message: MessageSquare,
};

export function TodayFollowups() {
  return (
    <div className="bg-card rounded-2xl p-5 sm:p-6 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-heading font-bold text-[14px] text-foreground tracking-tight">Today's Follow-ups</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">5 follow-ups scheduled</p>
        </div>
        <button className="text-[12px] text-primary font-semibold hover:underline">View all</button>
      </div>
      <div className="space-y-1">
        {followups.map((item) => {
          const Icon = iconMap[item.type];
          return (
            <div
              key={item.name}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/30 transition-colors cursor-default"
            >
              <div
                className="h-9 w-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: item.bg }}
              >
                <span className="font-heading font-bold text-[11px]" style={{ color: item.color }}>
                  {item.initials}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-foreground">{item.name}</p>
                <p className="text-[11px] text-muted-foreground truncate">{item.action}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[11px] text-muted-foreground tabular-nums font-medium">{item.time}</span>
                <div
                  className="h-7 w-7 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: item.bg }}
                >
                  <Icon className="h-3.5 w-3.5" style={{ color: item.color }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
