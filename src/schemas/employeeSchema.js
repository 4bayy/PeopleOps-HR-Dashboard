import z, { email } from "zod";

export const employeeSchema = z.object({
    firstName : z.string().min(2, "First Name is Requred"),
    lastName :z.string().min(2, "Last Name is required"),
    email : z.string().email(" email is invalid"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    dob: z.string().min(1, "Date of birth is required"),
    role:z.string().min(2, "Rolde is required"),
    address: z.string().min(5, "Address is required"),
    department: z.string().min(1, "Select department"),
    designation: z.string().min(2, "Role is required"),
})