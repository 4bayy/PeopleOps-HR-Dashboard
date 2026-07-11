import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function EmployeeCard({
  className,
  setIsOpen,
  employeeName,
  designation,
  employeeId,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`
    flex items-center justify-between
    rounded-xl
    border border-border
    bg-card
    p-4
    ${className ?? ""}
  `}
        onClick={() => navigate(`/employee/${employeeId}`)}
      >
        <div className="h-12 w-12 rounded-full border border-border bg-profile" />

        <div className="ml-4 flex-1">
          <h3 className="font-semibold text-foreground">{employeeName}</h3>
          <p className="text-sm text-muted">{designation}</p>
        </div>

        {/* <div className="rounded-lg bg-primary px-3 py-2 text-black hover:bg-primary-hover">
          View
        </div> */}
        <ChevronRight size={40} strokeWidth={1.75} className="text-gray-400" />
      </div>
    </>
  );
}
