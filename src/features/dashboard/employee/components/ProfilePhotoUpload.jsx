import { UserPlus } from "lucide-react";
import Card from "../../../../components/ui/Card";

export default function ProfilePhotoUpload() {
  return (
    <Card className="bg-card  border border-border p-6 rounded">
      <h2 className="mb-6 text-xl font-semibold text-foreground">
        Profile Photo
      </h2>

      <label
        className="
      flex
      h-72
      cursor-pointer
      flex-col
      items-center
      justify-center
      rounded-xl
      border-2
      border-dashed
      border-border
      hover:border-primary
    "
      >
        <UserPlus className="mb-4 text-primary" />
        <p className="text-center text-muted">Drag & drop or click to upload</p>
        <input type="file" className="hidden" />
      </label>
    </Card>
  );
}
