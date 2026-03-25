import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ResumeViewer from "@/components/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume — Rabees Rafiq",
};

export default function ResumePage() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto animate-fade-in-up">
      <SectionHeading
        title="Resume"
        subtitle="A snapshot of my professional journey and qualifications."
      />
      <ResumeViewer />
    </div>
  );
}
