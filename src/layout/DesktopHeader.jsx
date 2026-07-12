import { Bell } from "lucide-react";
import SearchBar from "../components/ui/Search";

export default function DesktopHeader({
  title ,
  section = "Overview",
  rightContent,
}) {
  return (
    <header
      className="
        hidden md:flex
        items-center
        justify-between
        border-b
        border-border
        px-8
        py-4
        mb-4
      "
    >
      {/* Left */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted text-foreground">{section}</span>

        <span className="text-muted text-foreground">›</span>

        <span className="font-semibold text-foreground">
          {title}
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <SearchBar
          placeholder="Search anything..."
          className="w-72"
        />

        <button
          className="
            relative
            rounded-lg
            border
            border-border
            p-2
            hover:bg-background
          "
        >
          <Bell size={18} className="text-foreground" />

          <span
            className="
              absolute
              right-2
              top-2
              h-2
              w-2
              rounded-full
              bg-red-500
            "
          />
        </button>

        <div className="h-10 w-10 rounded-full bg-profile" />

        {rightContent}
      </div>
    </header>
  );
}