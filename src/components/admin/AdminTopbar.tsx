import { Bell, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AdminTopbar() {
  return (
    <header className="h-[60px] border-b border-border/50 bg-card flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="lg:hidden" />
        <div>
          <h1 className="font-heading font-extrabold text-[17px] text-foreground leading-tight tracking-tight">
            Dashboard
          </h1>
          <p className="text-[11px] text-muted-foreground hidden sm:block mt-0.5">
            Welcome back — here's your overview for today.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <button className="hidden md:flex items-center gap-2 h-9 px-3.5 rounded-xl border border-border/60 bg-muted/30 text-muted-foreground text-[13px] hover:bg-muted/60 transition-colors w-52">
          <Search className="h-3.5 w-3.5 flex-shrink-0" />
          <span>Search leads, projects…</span>
        </button>

        <button className="relative h-9 w-9 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-muted/60 hover:text-foreground transition-colors">
          <Bell className="h-[17px] w-[17px]" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary ring-2 ring-card" />
        </button>

        <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center ml-0.5">
          <span className="font-heading font-bold text-[11px] text-primary">AK</span>
        </div>

        <Button size="sm" className="hidden sm:flex h-9 rounded-xl gap-1.5 font-heading text-[12px] font-semibold shadow-card ml-1.5">
          <Plus className="h-3.5 w-3.5" />
          Create Campaign
        </Button>
      </div>
    </header>
  );
}
