import Card from "../../../../components/ui/Card";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "AWS Certified",
  "Agile",
  "Scrum Master",
  "System Design",
  "Kubernetes",
];

export default function EmployeeSkillsCard() {
  return (
    <div className="mt-4 rounded p-4">
      <Card className="rounded-2xl bg-card p-5">
        <h3 className="mb-6 text-lg font-semibold text-foreground">
          Skills & Certifications
        </h3>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-lg
                border
                border-active-text
                px-4
                py-2
                text-sm
                font-medium
                text-active-text
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}