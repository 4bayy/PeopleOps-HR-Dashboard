import { Icon } from "lucide-react";
import { NavLink } from "react-router-dom";
import NavList from "./components/NavList";

export default function BottomNavigation({ navItems }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-lg lg:hidden md:hidden">
      <NavList navItems={navItems} variant="bottom" />
    </nav>
  );
}
