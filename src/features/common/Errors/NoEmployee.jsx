import { FolderOpen } from "lucide-react";
import EmptyState from "./EmptyState";

export default function NoEmployees({setSearchTerm}) {

  const clearFilter=()=>{
    console.log("clear filter clicked"); 
    setSearchTerm("");
    window.location.reload();
  }

  return (
    <EmptyState
      icon={<FolderOpen size={36} />}
      title="No Employees Found"
      description="There are no employees matching your current filters. Try adjusting your search or filter criteria."
      primaryAction={{
        label: "Clear Filters",
        onClick:clearFilter
      }}
    />
  );
}