import { Plus } from "lucide-react";

import { stats, quickActions } from "../../../data/employee";
import StatusCard from "../../../components/StatusCard";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import DepartmentDistribution from "./components/DepartmentDistribution";
import HeadcountTrend from "./components/HeadCount";

export default function MobileDashboard() {
  return (
    <section className=" pb-24">
      {/* Stats */}
      <div className="grid grid-cols-1 gap-4">
        {stats.map((item) => (
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
      <Card className="rounded-xl mt-4 border border-border bg-card p-6">
        <DepartmentDistribution title="Department Distribution" />
      </Card>

      {/* Headcount Trend */}
      <Card className="hidden rounded-xl border border-border bg-card p-6">
        <HeadcountTrend title="Headcount Trend" />
      </Card>

      {/* Quick Actions */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <Button className="flex h-28 flex-col items-center justify-center rounded-2xl bg-primary text-black">
            <Plus size={24} />
            <span>Add User</span>
          </Button>

          {quickActions.map((action) => {
            const Icon = action.icon;

            return (
              <Button
                key={action.id}
                className="flex h-28 flex-col items-center justify-center gap-2 rounded-2xl bg-card text-foreground hover:bg-[#3d3d3d]"
              >
                <Icon size={22} />
                <span>{action.title}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}