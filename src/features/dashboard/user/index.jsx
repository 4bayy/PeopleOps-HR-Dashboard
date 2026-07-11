import EmployeeCard from "../../../components/EmployeeCard";
import Button from "../../../components/ui/Button";
import SearchBar from "../../../components/ui/Search";
import { departments } from "../../../data/employee";
import { useState } from "react";
import { Plus } from "lucide-react";
import { employee } from "../../../data/employee";
import EmployeeTabletTable from "./components/TabletUserTable";

export default function UserPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex  h-screen flex-col ">
      {/*  mobile  */}
      <SearchBar className="border md:hidden" placeholder="Search employees..." />
      <div className="mt-4 flex flex-wrap gap-2  ">
        {departments.map((item) => {
          const isSelected = selectedDepartment === item.title;
          return (
            <Button
              key={item.id}
              onClick={() => setSelectedDepartment(item.title)}
              className={`
          rounded px-4 py-2 transition-colors mt-2
          ${
            isSelected
              ? "bg-primary text-black"
              : "bg-card text-foreground hover:bg-gray-100"
          }
        `}
            >
              {item.title}
            </Button>
          );
        })}
      </div>
      {/* Employee  Mobile List */}
      <div className="flex-1 overflow-y-auto px-4 md:hidden">
        {employee.map((emp) => (
          <EmployeeCard
            className="mt-[20px] bg-card"
            setIsOpen={setIsOpen}
            employeeName={emp.name}
            employeeId={emp.id}
            designation={emp.designation}
          />
        ))}
      </div>

      {/* Tablet & Desktop */}
      <div className="  hidden md:block mt-4 rounded ">
        {/* {employee.map((emp)=>(
        <EmployeeCard  className="mt-[20px]"  setIsOpen={setIsOpen} employeeName={emp.name}
        employeeId = {emp.id} designation={emp.designati on}
        />
        ))} */}
        <EmployeeTabletTable employee={employee}></EmployeeTabletTable>
      </div>

      <Button
        className="
    mb-20
    right-6
    h-14
    w-14
    rounded-full
    bg-primary
    p-0
    shadow-lg
    z-50
    hover:bg-primary/90
  "
      >
        <Plus className="h-7 w-7 text-black" />
      </Button>
    </div>
  );
}
