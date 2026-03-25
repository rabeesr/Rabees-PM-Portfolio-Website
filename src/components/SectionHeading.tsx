interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg text-muted max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-6 h-1 w-16 bg-gradient-to-r from-accent to-accent-light rounded-full" />
    </div>
  );
}
