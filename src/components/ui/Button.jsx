export default function Button({
  children,
  onClick,
  className = "",
  ...props
}) {
  return (
    <button
    onClick={onClick}
      className={`
       inline-flex items-center justify-center
       px-4 py-2
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}