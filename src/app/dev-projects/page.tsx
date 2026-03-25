import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectGrid from "@/components/ProjectGrid";
import { devProjects } from "@/data/content";

export const metadata: Metadata = {
  title: "Dev Projects — Rabees Rafiq",
};

export default function DevProjectsPage() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto animate-fade-in-up">
      <SectionHeading
        title="Development Projects"
        subtitle="Hands-on projects where I've designed and built software end-to-end."
      />
      <ProjectGrid projects={devProjects} />
    </div>
  );
}
