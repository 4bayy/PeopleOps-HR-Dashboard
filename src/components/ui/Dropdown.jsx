import { ChevronDown } from "lucide-react";

export default function Dropdown({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="
            w-full
            appearance-none
            rounded-lg
            border border-border
            bg-card
            px-4
            py-3
            pr-10
            text-sm
            text-foreground
            outline-none
            focus:border-primary
          "
        >
          <option value="">Select {label}</option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="
            pointer-events-none
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-muted
          "
        />
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}