import Card from "../../../../components/ui/Card";
import Input from "../../../../components/ui/Input";
import Dropdown from "../../../../components/ui/DropDown";
import {
  departmentOptions,
  employmentTypeOptions,
  managerOptions,
  salaryBandOptions,
} from "../../../../data/employee";

export default function EmployementDetailsForm({
  formData,
  errors,
  onChange,
}) {
  return (
    <Card className="rounded border border-border bg-card p-6">
      <h2 className="mb-8 text-xl font-semibold text-foreground">
        Employment Details
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Dropdown
          name="department"
          label="Department"
          value={formData.department}
          onChange={onChange}
          options={departmentOptions}
          error={errors.department}
        />

        <Input
          name="role"
          label="Role / Position"
          value={formData.role}
          onChange={onChange}
          placeholder="e.g. Software Engineer"
          error={errors.role}
        />

        <Dropdown
          name="employmentType"
          label="Employment Type"
          value={formData.employmentType}
          onChange={onChange}
          options={employmentTypeOptions}
          error={errors.employmentType}
        />

        <Dropdown
          name="manager"
          label="Manager"
          value={formData.manager}
          onChange={onChange}
          options={managerOptions}
          error={errors.manager}
        />

        <Input
          name="startDate"
          label="Start Date"
          type="date"
          value={formData.startDate}
          onChange={onChange}
          error={errors.startDate}
        />

        <Dropdown
          name="salaryBand"
          label="Salary Band"
          value={formData.salaryBand}
          onChange={onChange}
          options={salaryBandOptions}
          error={errors.salaryBand}
        />
      </div>
    </Card>
  );
}