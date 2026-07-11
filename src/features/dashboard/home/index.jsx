import { stats, quickActions } from "../../../data/employee";
import StatusCard from "../../../components/StatusCard";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/card";
import DepartmentDistribution from "../../../components/DepartmentDistribution";
import { Plus } from "lucide-react";
import HeadcountTrend from "./components/HeadCount";
export default function Home() {
  return (
    <section id="home">
      {/* Stats */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats
          .filter((item) => item.screens.includes("mobile"))
          .map((item) => (
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

      {/*  department distribtion */}

      <div>
        <Card className="rounded-xl border border-gray-200  bg-card p-6">
          <DepartmentDistribution title="Department Distribution"></DepartmentDistribution>
        </Card>
      </div>

      {/*  Headcunt   */}
      <div className="mt-4">
        <Card className="rounded-xl border border-gray-200 bg-card  p-6">
          <HeadcountTrend title="Department Distribution"></HeadcountTrend>
        </Card>
      </div>

      {/* Quick Actions */}
      <h2 className="mb-4  mt-8 text-lg font-semibold md:hidden text-foreground ">
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-4 md:hidden bg-background">
        <Button
          className=" bg-[#FBBF24] text-black
          flex flex-col items-center justify-center
         font-medium transition-colors px-6 py-3 rounded 
        disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus></Plus>
          Add User
        </Button>
        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <Button
              className=" bg-card
    text-foreground
    flex flex-col items-center justify-center
    gap-2
    h-28
    rounded-2xl
    shadow-sm
    hover:bg-[#3d3d3d]
    transition-colors"
            >
              {Icon && <Icon size={22} />}
              <span>{action.title}</span>
            </Button>
          );
        })}
      </div>
    </section>
  );
}
