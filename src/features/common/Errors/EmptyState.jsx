import React from "react";

const colors = {
  cyan: {
    outer: "bg-cyan-500/10",
    inner: "bg-cyan-500/15",
    border: "border-cyan-400/20",
    icon: "text-cyan-400",
    button: "bg-cyan-400 hover:bg-cyan-500 text-black",
  },
  red: {
    outer: "bg-red-500/10",
    inner: "bg-red-500/15",
    border: "border-red-400/20",
    icon: "text-red-400",
    button: "bg-yellow-300 hover:bg-yellow-400 text-black",
  },
};

export default function EmptyState({
  icon,
  title,
  description,
  primaryAction,
  secondaryAction,
  color = "cyan",
}) {
  const theme = colors[color];

  return (
    <div className="flex flex-col items-center justify-center h-full py-16 text-center">
      <div
        className={`w-28 h-28 rounded-full flex items-center justify-center ${theme.outer}`}
      >
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center border ${theme.border} ${theme.inner} ${theme.icon}`}
        >
          {icon}
        </div>
      </div>


      <h2 className="mt-8 text-3xl font-semibold text-white">{title}</h2>


      <p className="mt-3 max-w-md text-sm text-gray-400">
        {description}
      </p>


      <div className="flex gap-3 mt-8">
        {primaryAction && (
          <button
            onClick={primaryAction.onClick}
            className={`px-6 py-2 rounded-md font-medium transition ${theme.button}`}
          >
            {primaryAction.label}
          </button>
        )}

        {secondaryAction && (
          <button
            onClick={secondaryAction.onClick}
            className="px-6 py-2 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            {secondaryAction.label}
          </button>
        )}
      </div>
    </div>
  );
}