import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About — Rabees Rafiq",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto animate-fade-in-up">
      <SectionHeading
        title="About Me"
        subtitle="Product leader with a technical edge — passionate about building impactful products from concept to scale."
      />
      <About />
    </div>
  );
}
