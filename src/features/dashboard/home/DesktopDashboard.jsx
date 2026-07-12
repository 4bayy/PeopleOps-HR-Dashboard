import { Plus } from "lucide-react";

import { stats, quickActions, desktopStats } from "../../../data/employee";
import StatusCard from "../../../components/StatusCard";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import DepartmentDistribution from "./components/DepartmentDistribution";
import HeadcountTrend from "./components/HeadCount";
import RecentActivities from "./components/RecentActivities";
import QuickActionsCard from "./components/QuickActionsCard";

export default function DesktopDashboard(
  props
) {
  return (
    <section className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {desktopStats.map((item) => (
          <StatusCard
            key={item.title}
            title={item.title}
            value={item.value}
            trend={item.trend}
            icon={item.icon}
            className="bg-card"
          />
        ))}
      </div>

      {/* Department Distribution */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card className="rounded-xl border border-border bg-card p-6">
          <DepartmentDistribution title="Department Distribution" />
        </Card>

        <Card className="rounded-xl border border-border bg-card p-6">
          <HeadcountTrend title="Headcount Trend" />
        </Card>
      </div>

      {/* bottom nav */}
      <div className="mt-6 grid grid-cols-3 gap-6 hidden  lg:grid">
        <div className="col-span-2">
          <RecentActivities />
        </div>

        <QuickActionsCard />
      </div>
    </section>
  );
}
