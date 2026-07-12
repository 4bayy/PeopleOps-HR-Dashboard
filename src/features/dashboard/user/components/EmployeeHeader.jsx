import { useState } from "react";
import Button from "../../../../components/ui/Button";
import EmployeeForm from "../pages/EmployeeForm";

export default function EmployeeHeader(props) {
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-foreground">Employees</h1>

          <span className="rounded-full bg-card px-2 py-1 text-xs text-muted">
            248
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Button className="flex h-10 flex-col items-center justify-center gap-2 rounded-2xl bg-card text-foreground hover:bg-[#3d3d3d]">
            Bulk Delete
          </Button>

          <Button className="flex h-10 flex-col items-center justify-center gap-2 rounded-2xl bg-card text-foreground hover:bg-[#3d3d3d]">
            Export CSV
          </Button>

          <Button
            className="flex h-10 flex-col items-center justify-center rounded-2xl bg-primary text-black"
            onClick={() => props.setShowForm(true)}
          >
            + Add Employee
          </Button>
        </div>
      </div>
    </>
  );
}
