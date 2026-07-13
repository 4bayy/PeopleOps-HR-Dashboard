import {Search} from "lucide-react"

export default function SearchBar({ className = "", value, onChange , placeholder }) {
  return (
    <div
      className={`
        flex items-center gap-3
        rounded-xl border border-gray-700
   
        px-4 py-3
        ${className}
      `}
    >
      <Search  />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-white placeholder:text-black focus:outline-none"
      />
    </div>
  );
}

