import { useState } from "react";
import { Outlet } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";
import navigationItems from "./navigation.js";
import Header from "./Header.js";
import Sidebar from "./Sidebar.jsx";
import { useLocation } from "react-router-dom";


export default function AppLayout() {

  const [collapsed, setCollapsed] = useState(false);
  const currentPage = useLocation();

  const hideHeader = ["/user", "/employee/id"].includes(location.pathname) || location.pathname.startsWith("/employee/");

  
  
  return (
    <div className="min-h-screen">


      {!hideHeader && <Header />}
      <div className="flex">

        {/* Desktop Sidebar */}
        <Sidebar navItems={navigationItems} />

        {/* Main Content */}
        <main className="flex-1 pt-16 pb-16 md:ml-24 lg:ml-64 lg:pb-0">
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>

      {/*  mobile view */}
      <BottomNavigation navItems={navigationItems} />
    </div>
  );
}
