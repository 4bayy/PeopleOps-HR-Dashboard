export default function Card({ children, className = "" }) {
  return (
    <>
      <div
        className={`rounded-xl border border-border bg-card p-4 ${className}`}
      >
        {children}
      </div>
    </>
  );
}
