import { FileText, UserPlus } from "lucide-react";
import Button from "../../../../components/ui/Button";
import Card from "../../../../components/ui/Card";

export default function QuickActionsCard() {
  return (
    <Card className="rounded-xl border border-border bg-card p-6">
      <h2 className="mb-5 text-sm font-semibold text-foreground">
        Quick Actions
      </h2>

      <div className="space-y-3">
        <Button className="flex w-full items-center justify-start gap-3 rounded-lg bg-primary py-3 text-black">
          <UserPlus size={18} />
          Add Employee
        </Button>

        <Button className="flex w-full items-center justify-start gap-3 rounded-lg bg-background py-3 text-foreground hover:bg-[#3d3d3d]">
          <FileText size={18} />
          Generate Report
        </Button>
      </div>
    </Card>
  );
}