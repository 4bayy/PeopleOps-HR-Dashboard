import { departmentDistribution } from "../../../../data/employee";
import { PieChart } from "@mui/x-charts/PieChart";

export default function DepartmentDistribution({ title }) {
  const data = departmentDistribution;

  return (
    <div className="rounded-2xl bg-card p-6  ">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>

      <div className="grid grid-cols-2 ">
        {/* Chart */}
        <div className="flex justify-center">
          <PieChart
            width={140}
            height={140}
            series={[
              {
                data,
                innerRadius: 35,
                outerRadius: 55,
                paddingAngle: 3,
                cornerRadius: 4,
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
        <div className="hidden md:flex flex-col">
          {data.map((item) => (
            <div className="inline-flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-sm "
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-black">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
