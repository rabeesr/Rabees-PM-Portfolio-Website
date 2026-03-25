import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectGrid from "@/components/ProjectGrid";
import { pmProjects } from "@/data/content";

export const metadata: Metadata = {
  title: "PM Projects — Rabees Rafiq",
};

export default function PMProjectsPage() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto animate-fade-in-up">
      <SectionHeading
        title="Product Management"
        subtitle="Strategic product initiatives I've led — from discovery and definition through launch and scaling."
      />
      <ProjectGrid projects={pmProjects} />
    </div>
  );
}
