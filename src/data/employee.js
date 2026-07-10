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
    "location": "San Francisco, CA"
  },
  {
    "id": 2,
    "name": "Michael Ross",
    "designation": "Product Designer",
    "department": "Design",
    "status": "Active",
    "email": "m.ross@peopleops.com",
    "phone": "+1 (555) 234-5678",
    "location": "New York, NY"
  },
  {
    "id": 3,
    "name": "Elena Gilbert",
    "designation": "HR Specialist",
    "department": "HR",
    "status": "Active",
    "email": "e.gilbert@peopleops.com",
    "phone": "+1 (555) 345-6789",
    "location": "Austin, TX"
  },
  {
    "id": 4,
    "name": "James Wilson",
    "designation": "Frontend Developer",
    "department": "Engineering",
    "status": "Inactive",
    "email": "j.wilson@peopleops.com",
    "phone": "+1 (555) 456-7890",
    "location": "Seattle, WA"
  },
  {
    "id": 5,
    "name": "Emma Watson",
    "designation": "Marketing Manager",
    "department": "Marketing",
    "status": "Active",
    "email": "e.watson@peopleops.com",
    "phone": "+1 (555) 567-8901",
    "location": "Chicago, IL"
  },
  {
    "id": 6,
    "name": "David Miller",
    "designation": "Backend Engineer",
    "department": "Engineering",
    "status": "Active",
    "email": "d.miller@peopleops.com",
    "phone": "+1 (555) 678-9012",
    "location": "Boston, MA"
  }
]


// department distribution 

export const departmentDistribution = [
  { id: 1, value: 90, label: "Engineering", color: "#4FD1C5" },
  { id: 2, value: 0, label: "Design", color: "#A78BFA" },

  { id: 3, value: 0, label: "Marketing", color: "#FBBF24" },
];