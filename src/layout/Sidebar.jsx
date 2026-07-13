import {
  LayoutDashboard,
  Users,
  Building2,
  CalendarDays,
  Wallet,
  BarChart3,
  Settings,
  ChevronDown,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Employees", icon: Users, path: "/employee" },
  { name: "Departments", icon: Building2, path: "/departments" },
  { name: "Leave Mgmt", icon: CalendarDays, path: "/leave" },
  { name: "Payroll", icon: Wallet, path: "/payroll" },
  { name: "Reports", icon: BarChart3, path: "/reports" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:sticky top-0 left-0 z-50
          flex h-screen flex-col
          border-r border-border
          bg-[#222222]

          w-64 md:w-20 lg:w-64

          transition-transform duration-300

          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }

          md:translate-x-0
        `}
      >
        {/* Mobile Close */}
        <div className="flex items-center justify-end p-4 md:hidden">
          <button onClick={() => setIsOpen(false)}>
            <X className="text-white" />
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-3 border-b border-border px-6 py-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-bold text-black">
            P
          </div>

          <h1 className="text-xl font-semibold text-white md:hidden lg:block">
            PeopleOps
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                        isActive
                          ? "bg-primary text-black"
                          : "text-muted hover:bg-card hover:text-white"
                      }`
                    }
                  >
                    <Icon size={18} />

                    <span className="md:hidden lg:block text-foreground">
                      {item.name}
                    </span>
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
              <div className="h-10 w-10 rounded-full bg-card" />

              <div className="text-left md:hidden lg:block">
                <p className="text-sm font-semibold text-white">
                  Alex Rivera
                </p>

                <p className="text-xs text-muted">
                  Admin
                </p>
              </div>
            </div>

            <ChevronDown
              size={18}
              className="text-muted"
            />
          </button>
        </div>
      </aside>
    </>
  );
}