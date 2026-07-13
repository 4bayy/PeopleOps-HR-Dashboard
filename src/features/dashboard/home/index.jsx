import { stats, quickActions } from "../../../data/employee";
import StatusCard from "../../../components/StatusCard";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import DepartmentDistribution from "./components/DepartmentDistribution";
import { Plus } from "lucide-react";
import HeadcountTrend from "./components/HeadCount";

import MobileDashboard from "./MobileDashboard";
import DesktopDashboard from "./DesktopDashboard";
import { useState } from "react";

export default function Home() {

  return (
    <section id="home">
      {/* Stats */}

        <div className="block md:hidden">
        <MobileDashboard />
      </div>

      <div className="hidden md:block">
        <DesktopDashboard />
      </div>
    </section>
  );
}
