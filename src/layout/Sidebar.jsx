import {
  LayoutDashboard,
  Users,
  Building2,
  CalendarDays,
  Wallet,
  BarChart3,
  Settings,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Employees", icon: Users, path: "/user" },
  { name: "Departments", icon: Building2, path: "/departments" },
  { name: "Leave Mgmt", icon: CalendarDays, path: "/leave" },
  { name: "Payroll", icon: Wallet, path: "/payroll" },
  { name: "Reports", icon: BarChart3, path: "/reports" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className=" hidden md:flex  lg:w-64 md:w-20 h-screen flex-col md:flex border-r border-border bg-[#222222] lg:flex">
      {/* Logo */}
      <div className="flex items-center gap-3 border-b border-border px-6 py-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-bold text-black">
          P
        </div>
        <h1 className="text-xl   md:hidden lg:flex font-semibold text-foreground">
          PeopleOps
        </h1>
      </div>

      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                      isActive
                        ? "bg-primary text-black"
                        : "text-muted hover:bg-card hover:text-foreground"
                    }`
                  }
                >
                  <Icon size={18} />
                  <span className="md:hidden lg:flex  text-foreground">{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Profile */}
      <div className="border-t border-border p-4">
        <button className="flex w-full items-center justify-between rounded-xl p-3 hover:bg-card">
          <div className="flex items-center gap-3">
            <div className=" h-10 w-10 rounded-full bg-card" />

            <div className="text-left md:hidden lg:block">
              <p className="text-sm font-semibold text-foreground">
                Alex Rivera
              </p>
              <p className="text-xs text-muted">Admin</p>
            </div>
          </div>

          <ChevronDown size={18} className="text-muted" />
        </button>
      </div>
    </aside>
  );
}
