import Button from "../../../../components/ui/Button";

export default function EmployeeProfileActions({
  orientation = "vertical",
  onEdit,
  onDeactivate,
}) {
  const layout =
    orientation === "horizontal"
      ? "flex items-center justify-end gap-4"
      : "flex flex-col gap-4 p-4";

  return (
    <div className={layout}>
      <Button
        onClick={onEdit}
        className="rounded-xl bg-active-text px-6 py-4 font-semibold text-black hover:bg-teal-500"
      >
        Edit Profile
      </Button>

      <Button
        onClick={onDeactivate}
        className="rounded-xl border border-red-500 px-6 py-4 font-semibold text-red-500 hover:bg-red-500/10"
      >
        Deactivate Account
      </Button>
    </div>
  );
}