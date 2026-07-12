import React, { useState } from "react";
import SearchBar from "../../../../components/ui/Search";
import Dropdown from "../../../../components/ui/DropDown";
// import { departments } from "../../../../data/employee";

function EmployeeToolbar({className}) {
  
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState(null);

  return (
    <div className={`hidden md:flex items-center gap-4 ${className}`}>
      <div className="flex-1">
        <SearchBar
          className="w-full border"
          placeholder="Search employees..."
        />
      </div>

      <Dropdown
        className="w-48"
        label="Departments"
        value={department}
        onChange={setDepartment}
        options={[
          { value: "engineering", label: "Engineering" },
          { value: "marketing", label: "Marketing" },
          { value: "hr", label: "HR" },
        ]}
      />

      <Dropdown
        className="w-40"
        label="Statuses"
        value={status}
        onChange={setStatus}
        options={[
          { value: "active", label: "Active" },
          { value: "inactive", label: "Inactive" },
        ]}
      />
    </div>
  );
}

export default EmployeeToolbar;
