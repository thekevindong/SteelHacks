import { ReactNode } from "react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger 
} from "@/components/ui/sidebar";
import { 
  Home, 
  BarChart3, 
  Users, 
  Settings, 
  FileText, 
  Bell 
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

// Navigation items
const navigationItems = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Analytics", 
    url: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Users",
    url: "/dashboard/users", 
    icon: Users,
  },
  {
    title: "Reports",
    url: "/dashboard/reports",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

interface DashboardSidebarProps {
  className?: string;
}

function DashboardSidebar({ className }: DashboardSidebarProps) {
  const [location] = useLocation();

  return (
    <Sidebar className={className}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const isActive = location === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild data-active={isActive}>
                      <Link href={item.url} data-testid={`sidebar-link-${item.title.toLowerCase()}`}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const sidebarStyle = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <SidebarProvider style={sidebarStyle as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <DashboardSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Header */}
          <header className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur">
            <div className="flex items-center gap-4">
              <SidebarTrigger data-testid="button-sidebar-toggle" />
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover-elevate"
                data-testid="button-notifications"
              >
                <Bell className="h-4 w-4" />
              </Button>
              <ThemeToggle />
            </div>
          </header>
          
          {/* Main content */}
          <main className="flex-1 overflow-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}