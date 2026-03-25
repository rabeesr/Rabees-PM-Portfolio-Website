import { Project } from "@/types";
import SkillBadge from "./SkillBadge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
              {project.title}
            </h3>
          </div>
          <span className="inline-block text-xs font-medium text-muted bg-gray-100 px-2.5 py-0.5 rounded-full">
            {project.year}
          </span>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors shrink-0 ml-4"
            aria-label={`View ${project.title}`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        )}
      </div>

      <p className="text-sm text-muted leading-relaxed mb-4">
        {project.description}
      </p>

      <ul className="space-y-2 mb-5">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
            <span className="text-accent mt-1.5 shrink-0">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
                <circle cx="6" cy="6" r="2.5" />
              </svg>
            </span>
            {highlight}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <SkillBadge key={tag} label={tag} variant="accent" />
        ))}
      </div>
    </div>
  );
}
