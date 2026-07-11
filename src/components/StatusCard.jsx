export default function StatusCard({
  id,
  title,
  value,
  trend,
  icon,
  className = "",
}) {
  const Icon = icon;

  return (
    <div className={`rounded-xl p-6 bg-card ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          {Icon && (
            <Icon className="h-6 w-6 text-foreground" />
          )}

          <div>
            {title && (
              <h2 className="text-lg font-semibold text-foreground">
                {title}
              </h2>
            )}

            {value !== undefined && (
              <p className="mt-2 text-3xl font-bold text-foreground">
                {value}
              </p>
            )}
          </div>
        </div>

        {trend && (
          <span className="text-sm font-medium text-green-400">
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}