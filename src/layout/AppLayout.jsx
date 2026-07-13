import { useState } from "react";
import { Outlet } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";
import navigationItems from "./navigation.js";
import Header from "./Header";
import Sidebar from "./Sidebar.jsx";
import { useLocation } from "react-router-dom";
import DesktopHeader from "./DesktopHeader.jsx";

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPage = useLocation();

  const pathName = location.pathname.slice(1) || "Dashboard";
  const formatted = pathName.charAt(0).toUpperCase() + pathName.slice(1);

  const hideHeader =
    ["/employee", "/employee/id"].includes(location.pathname) ||
    location.pathname.startsWith("/employee/");

  return (
    <div className="min-h-screen bg-background">
      {!hideHeader && <Header setIsMenuOpen={setIsMenuOpen} />}

      <div className="flex bg-background">
        <Sidebar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            <DesktopHeader section="Overview" title={formatted} />
            <Outlet />
          </div>
        </main>
      </div>
      {/*  mobile view */}
      <BottomNavigation navItems={navigationItems} />
    </div>
  );
}
