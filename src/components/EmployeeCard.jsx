import { useNavigate } from "react-router-dom";

export default function EmployeeCard({ className, setIsOpen, employeeName , designation , employeeId }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`
        flex items-center justify-between
        rounded-xl border border-gray-700
        p-4 
         ${className ?? ""}
      `}
        onClick={() => navigate(`/employee/${employeeId}`)}
      >
        {/* Avatar */}
        <div className="h-12 w-12 rounded-full border" />

        {/* Employee Info */}
        <div className="ml-4 flex-1">
          <h3 className="font-semibold text-white">{employeeName}</h3>
          <p className="text-sm text-gray-400">{designation}</p>
        </div>

        {/* Action */}
        <div className="rounded-lg bg-primary px-3 py-2 text-black hover:bg-primary-hover">
          View
        </div>
      </div>
    </>
  );
}
