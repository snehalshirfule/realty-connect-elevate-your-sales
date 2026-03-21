import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";
import { DashboardKPIs } from "@/components/admin/DashboardKPIs";
import { LeadPipelineChart } from "@/components/admin/LeadPipelineChart";
import { LeadSourcesChart } from "@/components/admin/LeadSourcesChart";
import { ConversionFunnel } from "@/components/admin/ConversionFunnel";
import { ActiveProjects } from "@/components/admin/ActiveProjects";
import { TodayFollowups } from "@/components/admin/TodayFollowups";
import { QuickActions } from "@/components/admin/QuickActions";

const AdminDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[hsl(200_15%_97%)]">
        <AdminSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <AdminTopbar />
          <main className="flex-1 overflow-y-auto">
            <div className="p-4 sm:p-6 lg:p-8 max-w-[1440px] mx-auto space-y-5">
              <DashboardKPIs />

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2">
                  <LeadPipelineChart />
                </div>
                <div>
                  <ConversionFunnel />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2">
                  <LeadSourcesChart />
                </div>
                <div>
                  <QuickActions />
                </div>
              </div>

              {/* Operational Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <ActiveProjects />
                <TodayFollowups />
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
