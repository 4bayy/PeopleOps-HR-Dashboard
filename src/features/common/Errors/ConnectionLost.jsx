import { WifiOff } from "lucide-react";
import EmptyState from "./EmptyState";

export default function NetworkError() {
  return (
    <EmptyState
      color="red"
      icon={<WifiOff size={36} />}
      title="Connection Lost"
      description="Unable to reach the server. Please check your internet connection and try again."
      primaryAction={{
        label: "Retry",
        onClick: () => window.location.reload(),
      }}
      secondaryAction={{
        label: "Go Offline",
        onClick: () => console.log("Offline"),
      }}
    />
  );
}