import { LineChart } from "@mui/x-charts/LineChart";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const headcount = [20, 28, 36, 45, 54, 62];

export default function HeadcountTrend({
    title
}) {
  return (
    <div className="rounded-2xl  bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold text-white">
        {title}
      </h2>

      <LineChart
        xAxis={[
          {
            data: months,
            scaleType: "point",
          },
        ]}
        series={[
          {
            data: headcount,
            color: "#42D9D5",
            showMark: false,
            curve: "linear",
          },
        ]}
        height={220}
        grid={{ horizontal: false, vertical: false }}
        leftAxis={null}
        bottomAxis={null}
        margin={{
          top: 10,
          right: 10,
          bottom: 10,
          left: 10,
        }}
        sx={{
          "& .MuiChartsAxis-root": {
            display: "none",
          },
          "& .MuiChartsGrid-root": {
            display: "none",
          },
        }}
      />
    </div>
  );
}