import Card from "../../../../components/ui/Card";
import Input from "../../../../components/ui/Input";
import TextArea from "../../../../components/ui/TextArea";

export default function PersonalInformationForm({
  formData,
  errors,
  onChange,
}) {
  return (
    <Card className="rounded border border-border bg-card p-6">
      <h2 className="mb-8 text-xl font-semibold text-foreground">
        Personal Information
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={onChange}
          placeholder="e.g. John"
          error={errors.firstName}
        />

        <Input
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={onChange}
          placeholder="e.g. Doe"
          error={errors.lastName}
        />

        <Input
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="john@gmail.com"
          error={errors.email}
        />

        <Input
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          placeholder="+91 000-0000"
          error={errors.phone}
        />

        <Input
          label="Date of Birth"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={onChange}
          className="md:w-60"
          error={errors.dob}
        />
      </div>

      <div className="mt-6">
        <TextArea
          label="Residential Address"
          name="address"
          value={formData.address}
          onChange={onChange}
          rows={4}
          placeholder="Enter full address"
          error={errors.address}
        />
      </div>
    </Card>
  );
}