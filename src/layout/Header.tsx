import { Menu, Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 lg:hidden md:hidden">
      <button>
        {" "}
        <Menu className=" text-foreground" />{" "}
      </button>
      <h1 className=" text-foreground">PeopleOps</h1>
      <button>
        {" "}
        <Bell className=" text-foreground" />{" "}
      </button>
      <button>
        <User className=" text-foreground" />
      </button>
    </header>
  );
}
