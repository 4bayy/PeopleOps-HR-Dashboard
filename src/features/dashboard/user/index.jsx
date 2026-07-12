import EmployeeCard from "../../../components/EmployeeCard";
import Button from "../../../components/ui/Button";
import SearchBar from "../../../components/ui/Search";
import { departments } from "../../../data/employee";
import { useState } from "react";
import { Plus } from "lucide-react";
import { employee } from "../../../data/employee";
import EmployeList from "./pages/EmployeeList";
import EmployeeHeader from "./components/EmployeeHeader";
import EmployeeToolbar from "./components/EmployeeToolbar";
import EmployeeForm from "./pages/EmployeeForm";
import EmployeeList from "./pages/EmployeeList";

export default function UserPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const [isOpen, setIsOpen] = useState(false);

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex  min-h-screen flex-col ">
      {/*  mobile  */}
      <div className="mt-4 flex flex-wrap gap-2 md:hidden lg:hidden  ">
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
      {showForm ? (
        // <h1> Add Form Will Be Shown</h1>
        <EmployeeForm setShowForm={setShowForm} ></EmployeeForm>
      ) : (
        <div className="hidden md:block mt-4 rounded p-4 ">
          <EmployeeHeader
            showForm={showForm}
            setShowForm={setShowForm}
          ></EmployeeHeader>
          <EmployeeToolbar className="mb-4"></EmployeeToolbar>
          <EmployeeList employee={employee}></EmployeeList>
        </div>
      )}

      {/*  float add  btn */}

      <Button className="mb-20 right-6  h-14 w-14 rounded-full bg-primary p-0 shadow-lg z-50 hover:bg-primary/90">
        <Plus className="h-7 w-7 text-black"/>
      </Button>
    </div>
  );
}
