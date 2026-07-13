import { ChevronLeft, MapPin, Mail, Phone } from "lucide-react";
import Button from "../../../../components/ui/Button";
import { useParams } from "react-router-dom";
import { employee } from "../../../../data/employee";
import EmployeeProfileActions from "../components/EmployeeProfileActions";
import EmployeeDesktopHeader from "../components/EmployeeDesktopHeader";
import EmployeeSkillsCard from "../components/EmployeeSkillsCard";

export default function EmployeeProfile() {
  const { id } = useParams();

  const emp = employee.find((emp) => emp.id === Number(id));

  console.log(id); // "1"
  console.log(emp); // Employee object

  // if (!employees) {
  //   return (
  //     <div>
  //       <h1>Employee Not Found </h1>
  //     </div>
  //   );
  // }

  console.log(id, emp);
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Profile */}
      <section className="border-b border-border px-6 py-8 text-center md:hidden">
        <div className="mx-auto h-24 w-24 rounded-full bg-[oklch(55.1%_0.027_264.364)]  " />

        <h2 className="mt-6 text-3xl font-semibold">{emp.name}</h2>

        <p className="mt-2 text-gray-400">{emp.designation}</p>

        <div className="mt-4 flex justify-center gap-2">
          <span className="rounded-full bg-[oklch(55.1%_0.027_264.364)] px-3 py-1 text-xs text-white">
            {emp.department}
          </span>

          <span className="rounded-full bg-[oklch(55.1%_0.027_264.364)] px-3 py-1 text-xs text-green-400">
            {emp.status}
          </span>
        </div>
      </section>
      <div className="hidden md:block">
        <EmployeeDesktopHeader employee={emp} />
      </div>
      {/* Tabs */}
      <div className="flex gap-6 border-b border-border px-4">
        <button className="border-b-2 border-primary py-4 font-medium text-active-text">
          Profile
        </button>

        <button className="py-4 text-gray-400">Projects</button>

        <button className="py-4 text-gray-400">Leave</button>

        <button className="py-4 text-gray-400">Docs</button>
      </div>

      {/*  need to split below section to components  in future */}

      <div className="md:grid grid-cols-2">
        {/* Personal Information */}
        <div className="p-4  mt-4 rounded ">
          <div className="rounded-2xl bg-card p-5">
            <h3 className="mb-6 text-lg font-semibold">Personal Information</h3>

            <div className="space-y-6">
              <div>
                <p className="mb-1 text-sm text-gray-400">Email</p>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span className="text-gray-400">{emp.email}</span>
                </div>
              </div>

              <div>
                <p className="mb-1 text-sm text-gray-400">Phone</p>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span className="text-gray-400">{emp.phone}</span>
                </div>
              </div>

              <div>
                <p className="mb-1 text-sm text-gray-400">Location</p>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span className="text-gray-400">{emp.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  employment info */}
        <div className="p-4  mt-4 rounded hidden md:block ">
          <div className="rounded-2xl bg-card p-5">
            <h3 className="mb-6 text-lg font-semibold">
              Employment Information
            </h3>
            <div className="space-y-6">
              <div>
                <p className="mb-1 text-sm text-gray-400">Emp Id</p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">{emp.email}</span>
                </div>
              </div>

              <div>
                <p className="mb-1 text-sm text-gray-400">Role</p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Role</span>
                </div>
              </div>

              <div>
                <p className="mb-1 text-sm text-gray-400">Manager</p>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span className="text-gray-400">{emp.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  skills card  */}
      <div className="hidden md:block">
        <EmployeeSkillsCard />
      </div>

      {/* Bottom Buttons */}
      <div className="md:hidden">
        <EmployeeProfileActions></EmployeeProfileActions>
      </div>
    </div>
  );
}
