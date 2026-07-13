import { BarChart3, Calendar, ChartNoAxesColumn, Settings, UserPlus } from "lucide-react";
import { Users } from "lucide-react";


export const stats = [
  {
    title: "Employees",
    value: 248,
    trend: "+12%",
   icon:Users,
    screens: ["mobile", "tablet", "desktop"],
  },
  {
    title: "Active",
    value: 231,
    trend: "+12%",
    icon:Users,
    screens: ["mobile", "tablet", "desktop"],
  },
  // {
  //   title: "On Leave",
  //   value: 12,
  //   screens: ["tablet", "desktop"],
  // },
  // {
  //   title: "New This Month",
  //   value: 5,
  //   screens: ["tablet", "desktop"],
  // },
];

export   const activities = [
  {
    id: 1,
    name: "Sarah Chen",
    action: "joined Engineering",
    time: "2 hours ago",
    badge: "Joined",
    badgeColor: "bg-teal-900 text-teal-400",
  },
  {
    id: 2,
    name: "James Wilson",
    action: "promoted to Tech Lead",
    time: "5 hours ago",
    badge: "Promoted",
    badgeColor: "bg-yellow-900 text-yellow-400",
  },
];

export const  desktopStats = [
  ...stats ,
  {
    title: "On Leave",
    value: 12,
    screens: ["tablet", "desktop"],
  },
  {
    title: "New This Month",
    value: 5,
    screens: ["tablet", "desktop"],
  },
]

export const quickActions = [

  {
    title: "Reports",
    icon: BarChart3,
    variant: "secondary",
  },
  {
    title: "Leave",
    icon: Calendar,
    variant: "secondary",
  },
  {
    title: "Settings",
    icon: Settings,
    variant: "secondary",
  },
];



export const departments = [
   {
    id :1000,
    title: "ALL",
    
  },
   {
    id :1002,
    title: "Engineering",
    
  },
   {
    id :1003,
    title: "Marketing",
    
  },
   {
    id :1004,
    title: "Sales",
    
  }
];


export const employee= [
  {
    "id": 1,
    "name": "Sarah Chen",
    "designation": "Senior Software Engineer",
    "department": "Engineering",
    "status": "Active",
    "email": "s.chen@peopleops.com",
    "phone": "+1 (555) 012-3456",
    "location": "San Francisco, CA",
    "joindate":"Jan 12 2022"
  },
  {
    "id": 2,
    "name": "Michael Ross",
    "designation": "Product Designer",
    "department": "Design",
    "status": "Active",
    "email": "m.ross@peopleops.com",
    "phone": "+1 (555) 234-5678",
    "location": "New York, NY",
        "joindate":"Jan 12 2023"

  },
  {
    "id": 3,
    "name": "Elena Gilbert",
    "designation": "HR Specialist",
    "department": "HR",
    "status": "Active",
    "email": "e.gilbert@peopleops.com",
    "phone": "+1 (555) 345-6789",
    "location": "Austin, TX",
        "joindate":"Jan  01 2022"

  },
  {
    "id": 4,
    "name": "James Wilson",
    "designation": "Frontend Developer",
    "department": "Engineering",
    "status": "Inactive",
    "email": "j.wilson@peopleops.com",
    "phone": "+1 (555) 456-7890",
    "location": "Seattle, WA",
        "joindate":"Jan 12 2018"

  },
  {
    "id": 5,
    "name": "Emma Watson",
    "designation": "Marketing Manager",
    "department": "Marketing",
    "status": "Active",
    "email": "e.watson@peopleops.com",
    "phone": "+1 (555) 567-8901",
    "location": "Chicago, IL",
    "joindate":"Jan 12 2024"

  },
  {
    "id": 6,
    "name": "David Miller",
    "designation": "Backend Engineer",
    "department": "Engineering",
    "status": "Active",
    "email": "d.miller@peopleops.com",
    "phone": "+1 (555) 678-9012",
    "location": "Boston, MA",
        "joindate":"Jan 12 2026"

  }
]


// department distribution 

export const departmentDistribution = [
  { id: 1, value: 42, label: "Engineering", color: "#4FD1C5" },
  { id: 2, value: 18, label: "Design", color: "#A78BFA" },
  { id: 3, value: 15, label: "Marketing", color: "#FBBF24" },
  { id: 4, value: 12, label: "Sales", color: "#FF6B57" },
  { id: 5, value: 8, label: "HR", color: "#6B7280" },
];

export const departmentOptions = [
  { value: "engineering", label: "Engineering" },
  { value: "marketing", label: "Marketing" },
  { value: "hr", label: "HR" },
];

export const employmentTypeOptions = [
  { value: "full-time", label: "Full Time" },
  { value: "part-time", label: "Part Time" },
  { value: "contract", label: "Contract" },
];

export const managerOptions = [
  { value: "sarah-chen", label: "Sarah Chen" },
  { value: "michael-ross", label: "Michael Ross" },
];

export const salaryBandOptions = [
  { value: "l1", label: "L1" },
  { value: "l2", label: "L2" },
  { value: "l3", label: "L3" },
];

