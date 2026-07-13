import { departmentDistribution } from "../../../../data/employee";
import { PieChart } from "@mui/x-charts/PieChart";
import { useState } from "react";

export default function DepartmentDistribution({ title }) {
 
  const legendData = departmentDistribution;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  console.log(isMobile);

  const   chartData = isMobile ? 
      departmentDistribution.filter((item)=> item.label === "Engineering"): departmentDistribution;

  return (
    <div className="rounded-2xl bg-card p-6  ">
      <h2 className="mb-4 text-xl font-semibold text-foreground">{title}</h2>

      <div className="grid grid-cols-2 ">
        {/* Chart */}
        <div className="flex justify-center">
          <PieChart
            width={140}
            height={140}
            series={[
              {
                data: chartData,
                innerRadius: 35,
                outerRadius: 55,
                paddingAngle: 3,
                cornerRadius: 4,
                startAngle: -225,
                endAngle: 45,
                cx: 70,
                cy: 70,
              },
            ]}
            slotProps={{
              legend: {
                hidden: true,
              },
            }}
          />
        </div>

        {/* distribution department  hide on mobile */}
        <div className="hidden md:flex flex-col gap-2">
          {legendData.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
