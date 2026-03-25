import { bio, skills, experiences } from "@/data/content";
import SkillBadge from "./SkillBadge";

export default function About() {
  return (
    <div className="space-y-16">
      {/* Bio */}
      <section>
        <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
          {bio.summary}
        </p>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-8">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2 stagger-children">
                {group.items.map((item) => (
                  <SkillBadge key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-8">
          Experience
        </h2>
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative pl-8 pb-10 last:pb-0 border-l-2 border-border last:border-transparent"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent" />

              <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/20 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-medium text-muted bg-gray-100 px-3 py-1 rounded-full shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-accent mb-3">
                  {exp.company}
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
