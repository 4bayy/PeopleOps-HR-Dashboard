export default function TextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  error,
  className = "",
  ...props
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full
          rounded-lg
          border
          px-4
          py-3
          resize-none
          bg-card
          text-foreground
          placeholder:text-muted
          outline-none
          transition-colors
          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-border focus:border-primary"
          }
        `}
        {...props}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
