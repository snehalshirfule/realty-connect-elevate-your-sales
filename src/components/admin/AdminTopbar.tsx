import { Bell, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AdminTopbar() {
  return (
    <header className="h-16 border-b border-border/60 bg-card/80 backdrop-blur-sm flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="lg:hidden" />
        <div>
          <h1 className="font-heading font-bold text-lg text-foreground leading-tight">
            Dashboard
          </h1>
          <p className="text-xs text-muted-foreground hidden sm:block">
            Welcome back — here's your overview for today.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Search */}
        <button className="hidden md:flex items-center gap-2 h-9 px-3 rounded-xl bg-muted/60 text-muted-foreground text-sm hover:bg-muted transition-colors w-56">
          <Search className="h-3.5 w-3.5" />
          <span>Search leads, projects…</span>
        </button>

        {/* Notifications */}
        <button className="relative h-9 w-9 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
        </button>

        {/* Profile */}
        <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center ml-1">
          <span className="font-heading font-bold text-xs text-primary">AK</span>
        </div>

        {/* CTA */}
        <Button size="sm" className="hidden sm:flex h-9 rounded-xl gap-1.5 font-heading text-xs shadow-soft ml-2">
          <Plus className="h-3.5 w-3.5" />
          Create Campaign
        </Button>
      </div>
    </header>
  );
}
