import { NavLink } from "react-router-dom";

export default function NavList({ navItems, variant = "bottom" }) {
  return (
    <div
      className={
        variant === "sidebar"
          ? "flex flex-col gap-2 px-3"
          : "flex h-16"
      }
    >
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={
              variant === "sidebar"
                ? "flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100"
                : "flex flex-1 flex-col items-center justify-center gap-1 text-xs text-gray-600"
            }
          >
            <Icon className="h-5 w-5 flex-shrink-0" />
            
            <span className="md:hidden lg:block">{item.label}</span>
          </NavLink>
        );
      })}
    </div>
  );
}