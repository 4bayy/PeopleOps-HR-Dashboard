import Card from "../../../../components/ui/Card";
import { ChevronLeft, MapPin, Mail, Phone } from "lucide-react";

export default function EmployeeInformationCard({ employee }) {
  return (
    <Card className="rounded-xl border border-border bg-card p-6">
         <div className="p-4  mt-4 rounded ">
        <div className="rounded-2xl bg-card p-5">
          <h3 className="mb-6 text-lg font-semibold">Personal Information</h3>

          <div className="space-y-6">
            <div>
              <p className="mb-1 text-sm text-gray-400">Email</p>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-gray-400">{employee.email}</span>
              </div>
            </div>

            <div>
              <p className="mb-1 text-sm text-gray-400">Phone</p>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-gray-400">{employee.phone}</span>
              </div>
            </div>

            <div>
              <p className="mb-1 text-sm text-gray-400">Location</p>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-gray-400">{employee.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}