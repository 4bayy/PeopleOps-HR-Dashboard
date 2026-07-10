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
    <div
      className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}
    >
      {(title || value || trend || icon) && (
        <div className="mb-4 flex items-start justify-between ">
          <div className="flex items-start gap-3">
            <div>
              {icon && <Icon className="" />}
              <div>
                {title && (
                  <h2 className="text-lg font-semibold text-gray-900">
                    {title}
                  </h2>
                )}

                {value && (
                  <p className="mt-1 text-2xl font-bold text-gray-900">
                    {value}
                  </p>
                )}
              </div>
            </div>
          </div>

          {trend && <div>{trend}</div>}
        </div>
      )}
    </div>
  );
}
