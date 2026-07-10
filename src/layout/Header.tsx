import { Menu, Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 lg:hidden md:hidden">
      <button>
        {" "}
        <Menu />{" "}
      </button>
      <h1>PeopleOps</h1>
      <button>
        {" "}
        <Bell />{" "}
      </button>
      <button>
        <User />
      </button>
    </header>
  );
}
