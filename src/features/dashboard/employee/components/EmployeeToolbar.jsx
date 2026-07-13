import React, { useState } from "react";
import SearchBar from "../../../../components/ui/Search";
import Dropdown from "../../../../components/ui/Dropdown";
// import { departments } from "../../../../data/employee";

function EmployeeToolbar({ className ,setStatus, setSearchTerm , department, setDepartment }) {

  return (
    <div className={`hidden md:flex items-center gap-4 ${className}`}>
      <div className="flex-1">
        <SearchBar
          className="w-full border"
          placeholder="Search employees..."
          onChange={setSearchTerm}
        />
      </div>

      <Dropdown
        className="w-48"
        label="Departments"
        value={department}
        onChange={(e)=>setDepartment(e.target.value)}
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
        onChange={(e)=>setStatus(e.target.value)}
        options={[
          { value: "active", label: "Active" },
          { value: "inactive", label: "Inactive" },
        ]}
      />
    </div>
  );
}

export default EmployeeToolbar;
