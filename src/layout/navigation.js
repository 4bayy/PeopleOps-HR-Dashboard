import {
  Home,
  Users,
  Building2,
  CalendarDays,
  Ellipsis,
} from "lucide-react";

 const navigationItems = [
  {
    label: "Home",
    path: "/",
    icon: Home,
  },
  {
    label: "Users",
    path: "/user",
    icon: Users,
  },
  {
    label: "Departments",
    path: "/departments",
    icon: Building2,
  },
  {
    label: "Leave",
    path: "/leave",
    icon: CalendarDays,
  },
  {
    label: "More",
    path: "/more",
    icon: Ellipsis,
  },
];

export default navigationItems;