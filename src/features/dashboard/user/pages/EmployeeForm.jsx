import PersonalInformationForm from "../components/PersonalInformationForm";
import EmployementDetailsForm from "../components/EmployementDetailsForm";
import ProfilePhotoUpload from "../components/ProfilePhotoUpload";
import Button from "../../../../components/ui/Button";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { employeeSchema } from "../../../../schemas/employeeSchema";

export default function EmployeeForm(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    department: "",
    role: "",
    employmentType: "",
    manager: "",
    startDate: "",
    salaryBand: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //validate

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.department) {
      newErrors.department = "Please select a department";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log(formData);
    props.setShowForm(false);

    // API call
  };

  console.log(errors);
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold text-foreground">Add New Employee</h1>
      <PersonalInformationForm
        formData={formData}
        errors={errors}
        onChange={handleChange}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 ">
        <div className="lg:col-span-2">
          <EmployementDetailsForm
            formData={formData}
            errors={errors}
            onChange={handleChange}
          />
        </div>
        <ProfilePhotoUpload />
      </div>

      {/* form actions */}
      <div>
        <div className="flex justify-end gap-4">
          <Button
            className="flex h-10 flex-col items-center justify-center gap-2 rounded-2xl bg-card text-foreground hover:bg-[#3d3d3d]"
            onClick={() => props.setShowForm(false)}
          >
            Cancel
          </Button>
          <Button className="flex h-10 flex-col items-center justify-center rounded-2xl bg-primary text-black">
            Save Employee
          </Button>
        </div>
      </div>
    </form>
  );
}
