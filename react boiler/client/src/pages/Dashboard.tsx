import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  ArrowUpRight,
  ArrowDownRight 
} from "lucide-react";

// Mock data - todo: remove mock functionality
const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+180.1%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "Page Views",
    value: "12,234",
    change: "+19%",
    changeType: "positive" as const,
    icon: Activity,
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "-4.3%",
    changeType: "negative" as const,
    icon: TrendingUp,
  },
];

const recentActivity = [
  {
    id: 1,
    title: "New user registered",
    description: "john.doe@example.com",
    time: "2 minutes ago",
    status: "success" as const,
  },
  {
    id: 2,
    title: "Payment received",
    description: "$299.00 from Jane Smith",
    time: "5 minutes ago",
    status: "success" as const,
  },
  {
    id: 3,
    title: "Server maintenance",
    description: "Scheduled downtime completed",
    time: "1 hour ago",
    status: "info" as const,
  },
  {
    id: 4,
    title: "Failed login attempt",
    description: "admin@example.com",
    time: "2 hours ago",
    status: "warning" as const,
  },
];

export function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your application today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} data-testid={`card-stat-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    {stat.changeType === "positive" ? (
                      <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                    )}
                    <span className={stat.changeType === "positive" ? "text-green-500" : "text-red-500"}>
                      {stat.change}
                    </span>
                    <span className="ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Activity */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest actions and events in your application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity) => (
                <div 
                  key={activity.id} 
                  className="flex items-start space-x-3 p-3 rounded-lg hover-elevate transition-colors"
                  data-testid={`activity-item-${activity.id}`}
                >
                  <Badge 
                    variant={
                      activity.status === "success" 
                        ? "default" 
                        : activity.status === "warning" 
                        ? "destructive" 
                        : "secondary"
                    }
                    className="mt-0.5"
                  >
                    {activity.status}
                  </Badge>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
              <Button 
                variant="outline" 
                className="w-full hover-elevate active-elevate-2"
                data-testid="button-view-all-activity"
              >
                View All Activity
              </Button>
            </CardContent>
          </Card>

          {/* Performance Overview */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>
                Key metrics for your application performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Server Response Time</span>
                  <span className="text-sm text-muted-foreground">120ms</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Memory Usage</span>
                  <span className="text-sm text-muted-foreground">67%</span>
                </div>
                <Progress value={67} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">API Success Rate</span>
                  <span className="text-sm text-muted-foreground">99.2%</span>
                </div>
                <Progress value={99} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">User Satisfaction</span>
                  <span className="text-sm text-muted-foreground">4.8/5</span>
                </div>
                <Progress value={96} className="h-2" />
              </div>
              
              <Button 
                className="w-full hover-elevate active-elevate-2"
                data-testid="button-view-detailed-metrics"
              >
                View Detailed Metrics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}