import Button from "../../../../components/ui/Button";
import Card from "../../../../components/ui/Card";
import { activities } from "../../../../data/employee";

export default function RecentActivities() {
  return (
    <Card className="bg-card border border-border rounded-xl p-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">
          Recent Activities
        </h2>

        <button className="text-sm text-primary hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200" />

              <div>
                <p className="text-sm text-foreground">
                  <span className="font-semibold">
                    {activity.name}
                  </span>{" "}
                  {activity.action}
                </p>

                <p className="text-xs text-muted">
                  {activity.time}
                </p>
              </div>
            </div>

            <span
              className={`rounded-md px-2 py-1 text-xs font-medium ${activity.badgeColor}`}
            >
              {activity.badge}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}