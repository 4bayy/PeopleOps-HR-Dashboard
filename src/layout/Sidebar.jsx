import { NavLink } from "react-router-dom";
import NavList from "./components/NavList";
import { useState } from "react";
export default function Sidebar({ navItems }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <section className="hidden fixed left-0 top-0  h-screen w-64 flex-col border-r bg-white md:flex lg:flex md:w-24 lg:w-64">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-gray-200 px-6">
        <h1 className="text-xl font-bold text-blue-600">Logo</h1>
      </div>
    
      {/* Navigation */}
      <nav className="flex flex-1  gap-2  flex-col overflow-y-auto py-4">
        <NavList navItems={navItems} variant="sidebar" />
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 p-4">
        <button className="w-full rounded-lg bg-red-50 px-4 py-2 text-left text-red-600 hover:bg-red-100">
          Logout
        </button>
      </div>
    </section>
  );
}
