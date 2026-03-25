interface SkillBadgeProps {
  label: string;
  variant?: "default" | "accent";
}

export default function SkillBadge({ label, variant = "default" }: SkillBadgeProps) {
  const styles =
    variant === "accent"
      ? "bg-accent/10 text-accent border-accent/20"
      : "bg-gray-100 text-muted border-gray-200";

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full border transition-colors ${styles}`}
    >
      {label}
    </span>
  );
}
