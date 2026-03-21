import {
  LayoutDashboard,
  Megaphone,
  Users,
  Handshake,
  MapPin,
  BarChart3,
  Settings,
  ChevronLeft,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, active: true },
  { title: "Campaigns", icon: Megaphone },
  { title: "Leads", icon: Users },
  { title: "Channel Partners", icon: Handshake },
  { title: "Site Visits", icon: MapPin },
  { title: "Reports", icon: BarChart3 },
  { title: "Settings", icon: Settings },
];

export function AdminSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-border/40 bg-[hsl(210_20%_99%)]">
      <SidebarHeader className="p-4 pb-3">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-soft">
            <span className="text-primary-foreground font-heading font-extrabold text-sm tracking-tight">R</span>
          </div>
          {!collapsed && (
            <div className="flex flex-col min-w-0">
              <span className="font-heading font-bold text-[13px] text-foreground truncate tracking-tight">
                Realty Connect
              </span>
              <span className="text-[10px] text-muted-foreground leading-tight">by Devascend</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 pt-1">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-0.5">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={`h-10 rounded-xl transition-all duration-200 ${
                      item.active
                        ? "bg-primary text-primary-foreground font-semibold shadow-soft"
                        : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    }`}
                    tooltip={item.title}
                  >
                    <item.icon className="h-[17px] w-[17px] flex-shrink-0" />
                    {!collapsed && <span className="text-[13px]">{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        <button
          onClick={toggleSidebar}
          className="w-full h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors"
        >
          <ChevronLeft
            className={`h-4 w-4 transition-transform duration-200 ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
