import { Project, Skill, Experience } from "@/types";

export const bio = {
  name: "Rabees Rafiq",
  headline: "Technical Product Manager",
  tagline: "Building products at the intersection of strategy, design, and engineering.",
  summary:
    "I'm a Technical Product Manager with a passion for turning complex problems into elegant, user-centric solutions. With a background spanning product strategy, cross-functional leadership, and hands-on development, I bridge the gap between what's technically possible and what customers truly need. I thrive in ambiguous environments where I can combine data-driven decision making with deep technical understanding to ship products that matter.",
  email: "rabee@example.com",
  linkedin: "https://linkedin.com/in/rabeesr",
  github: "https://github.com/rabeesr",
};

export const skills: Skill[] = [
  {
    category: "Product",
    items: [
      "Product Strategy",
      "Roadmapping",
      "User Research",
      "A/B Testing",
      "PRDs & Specs",
      "Go-to-Market",
      "OKRs & KPIs",
      "Stakeholder Management",
    ],
  },
  {
    category: "Technical",
    items: [
      "System Design",
      "API Design",
      "SQL & Data Modeling",
      "Python",
      "TypeScript",
      "React / Next.js",
      "Cloud Architecture (AWS)",
      "Machine Learning Fundamentals",
    ],
  },
  {
    category: "Tools",
    items: [
      "Jira",
      "Figma",
      "Amplitude",
      "Mixpanel",
      "Tableau",
      "Notion",
      "Linear",
      "GitHub",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Senior Technical Product Manager",
    company: "Nexus Health Technologies",
    period: "2023 — Present",
    description:
      "Leading a cross-functional team of 12 engineers and designers to build an AI-powered clinical decision support platform. Drove a 40% reduction in clinician documentation time through intelligent automation features. Managed a $2.4M annual product budget and established the company's first ML product lifecycle framework.",
  },
  {
    role: "Technical Product Manager",
    company: "DataBridge Analytics",
    period: "2021 — 2023",
    description:
      "Owned the core data pipeline product serving 200+ enterprise customers. Led the migration from batch processing to real-time streaming, reducing data latency from hours to seconds. Shipped 3 major platform releases that grew ARR by 65%.",
  },
  {
    role: "Associate Product Manager",
    company: "CloudScale Systems",
    period: "2019 — 2021",
    description:
      "Launched the company's developer API platform from 0 to 1, acquiring 5,000+ developers in the first year. Designed the tiered pricing model that became the primary revenue driver. Collaborated with engineering to build self-serve onboarding that reduced time-to-first-API-call by 80%.",
  },
];

export const pmProjects: Project[] = [
  {
    id: "clinical-ai",
    title: "AI Clinical Decision Support Platform",
    description:
      "Led the end-to-end product development of an ML-powered platform that assists psychiatrists with treatment planning. Defined the product vision, conducted 50+ clinician interviews, and translated complex clinical workflows into intuitive software.",
    highlights: [
      "Reduced clinician documentation time by 40%",
      "Achieved 92% user satisfaction score in beta program",
      "Managed integration with 3 major EHR systems via FHIR API",
      "Coordinated FDA regulatory review process for SaMD classification",
    ],
    tags: ["Healthcare", "AI/ML", "B2B SaaS", "Regulatory"],
    year: "2024",
  },
  {
    id: "realtime-pipeline",
    title: "Real-Time Data Pipeline Migration",
    description:
      "Drove the strategic migration of a legacy batch processing system to a real-time streaming architecture. Managed competing priorities across 4 engineering squads while maintaining 99.99% uptime for 200+ enterprise customers.",
    highlights: [
      "Reduced data latency from 4 hours to <5 seconds",
      "Zero-downtime migration with no customer-facing incidents",
      "Grew ARR by 65% through new real-time analytics capabilities",
      "Designed backward-compatible API to prevent breaking changes",
    ],
    tags: ["Data Infrastructure", "Enterprise", "Platform", "Migration"],
    year: "2022",
  },
  {
    id: "developer-api",
    title: "Developer API Platform Launch",
    description:
      "Took the developer API platform from concept to launch, defining the developer experience strategy, API design principles, and go-to-market plan. Built a developer community from scratch and established the self-serve revenue model.",
    highlights: [
      "Acquired 5,000+ developers in first year post-launch",
      "Reduced time-to-first-API-call from 45 min to 8 min",
      "Designed tiered pricing model generating $1.2M ARR",
      "Created comprehensive API documentation and SDK libraries",
    ],
    tags: ["Developer Experience", "API Platform", "0-to-1", "Go-to-Market"],
    year: "2020",
  },
  {
    id: "predictive-churn",
    title: "Predictive Churn Prevention System",
    description:
      "Identified a customer churn pattern through data analysis and championed a predictive intervention system. Partnered with data science to build an ML model and designed the customer success team's intervention workflows.",
    highlights: [
      "Reduced enterprise churn rate from 18% to 9% annually",
      "Built ML model with 85% precision for churn prediction",
      "Designed automated alert system for customer success team",
      "Generated $3.2M in retained revenue in first year",
    ],
    tags: ["Machine Learning", "Customer Success", "Data Science", "B2B"],
    year: "2021",
  },
];

export const devProjects: Project[] = [
  {
    id: "braiv-ai",
    title: "BRAIV.AI — Psychiatric Treatment Platform",
    description:
      "Full-stack web application for psychiatrists that integrates with EHR systems via FHIR API and uses a classification ML algorithm to predict optimal medication for patients. Built with Next.js, featuring a clean clinical interface.",
    highlights: [
      "Built with Next.js App Router and TypeScript",
      "FHIR R4 API integration for patient data ingestion",
      "ML classification pipeline for medication prediction",
      "Responsive clinical UI designed for psychiatrist workflows",
    ],
    tags: ["Next.js", "FHIR", "Machine Learning", "Healthcare"],
    link: "https://github.com/rabee/braiv-ai",
    year: "2025",
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    description:
      "This very website — a polished, multi-page portfolio built with Next.js and Tailwind CSS. Designed to showcase both product management expertise and technical development skills with a premium, recruiter-friendly UI.",
    highlights: [
      "Next.js App Router with TypeScript",
      "Tailwind CSS with custom animations",
      "Responsive design with mobile-first approach",
      "Embedded PDF resume viewer",
    ],
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Portfolio"],
    link: "https://github.com/rabee/portfolio",
    year: "2026",
  },
  {
    id: "data-dashboard",
    title: "Real-Time Analytics Dashboard",
    description:
      "An interactive analytics dashboard built to visualize streaming data in real time. Features customizable chart widgets, WebSocket-powered live updates, and a drag-and-drop layout system.",
    highlights: [
      "React with D3.js for custom data visualizations",
      "WebSocket integration for live data streaming",
      "Drag-and-drop dashboard layout with persistent state",
      "Dark mode with system preference detection",
    ],
    tags: ["React", "D3.js", "WebSocket", "Data Visualization"],
    link: "https://github.com/rabee/analytics-dashboard",
    year: "2024",
  },
  {
    id: "cli-task-manager",
    title: "TaskFlow CLI",
    description:
      "A command-line task management tool built in Python with SQLite for persistence. Features natural language date parsing, priority-based sorting, and project-based organization with export capabilities.",
    highlights: [
      "Built with Python and Click framework",
      "SQLite backend with migration support",
      "Natural language date parsing via dateutil",
      "JSON/CSV export for integration with other tools",
    ],
    tags: ["Python", "SQLite", "CLI", "Developer Tools"],
    link: "https://github.com/rabee/taskflow-cli",
    year: "2023",
  },
];
