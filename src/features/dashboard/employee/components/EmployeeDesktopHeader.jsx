import Button from "../../../../components/ui/Button";
import EmployeeProfileActions from "./EmployeeProfileActions";

export default function EmployeeDesktopHeader({ employee }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-6">
          <div className="h-24 w-24 rounded-full bg-profile" />

          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {employee.name}
            </h1>

            <p className="mt-1 text-muted">
              {employee.designation}
            </p>

            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-profile px-3 py-1 text-sm text-foreground">
                {employee.department}
              </span>

              <span className="rounded-full bg-[#264E4B] px-3 py-1 text-sm font-medium text-[#46E3D4]">
                {employee.status}
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex gap-3">
          <EmployeeProfileActions orientation="horizontal" ></EmployeeProfileActions>
        </div>
      </div>
    </div>
  );
}