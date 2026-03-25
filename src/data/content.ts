import { Project, Skill, Experience } from "@/types";

export const bio = {
  name: "Rabees Rafiq",
  headline: "Technical Product Manager",
  tagline:
    "Building AI-powered products at the intersection of strategy, engineering, and machine learning.",
  summary:
    "I'm a Technical Product Manager with an MBA from Chicago Booth and an MS in Computer Science from UChicago. I specialize in launching AI and ML products that drive measurable business impact — from agentic AI platforms at Amazon to enterprise ML products at Koch Industries that created ~$120M in projected NPV. I combine deep technical fluency in machine learning, cloud architecture, and distributed systems with strong product instincts shaped by 50+ user interviews with senior executives and hands-on experience shipping products across healthcare, e-commerce, energy, and industrial domains.",
  email: "rabees44@gmail.com",
  linkedin: "https://www.linkedin.com/in/rabeesr",
  github: "https://github.com/rabeesr",
};

export const skills: Skill[] = [
  {
    category: "Product",
    items: [
      "Product Strategy & Roadmapping",
      "AI-Agent Design (Multi-Agent Systems)",
      "User Research & Interviews",
      "A/B Testing & Experimentation",
      "PRDs & Requirements Definition",
      "Go-to-Market Strategy",
      "Metrics & Observability",
      "Stakeholder Management",
    ],
  },
  {
    category: "AI/ML & Data",
    items: [
      "Python (pandas, PySpark, Flask)",
      "SQL",
      "Bash/UNIX",
      "C++",
      "Scikit-learn",
      "LangChain",
      "PyTorch",
      "Graph Databases",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Git",
      "MLOps",
      "Data Pipelines",
    ],
  },
  {
    category: "Tools",
    items: [
      "Figma",
      "Jira",
      "Tableau",
      "Notion",
      "Linear",
      "GitHub",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Sr. Technical Product Manager Intern",
    company: "Amazon",
    period: "Jun 2025 — Aug 2025",
    description:
      "Launched a 0-to-1 agentic AI platform for Amazon's flagship international e-commerce marketplaces, reducing launch cycle time by 70%. Shipped a new LLM-agent for supply chain and logistics, reducing hallucinations by 30%. Drove A/B experimentation on international shopping experiences, increasing checkout conversion ~15% across 6 countries.",
  },
  {
    role: "Sr. Technical Product Manager — AI & Advanced Analytics",
    company: "Koch Industries",
    period: "Dec 2022 — Aug 2024",
    description:
      "Launched 5 enterprise ML products creating ~$120M in projected NPV. Architected AI services for the largest U.S. glass manufacturer, deploying across 25 plants and improving gross margins by ~30%. Formulated go-to-market strategy for 3 patented ML forecasting algorithms valued at $20M. Scaled Gen AI adoption across 7+ subsidiaries by building an internal marketplace of LLM architectures and accelerators.",
  },
  {
    role: "Technical Product Manager — AI & Advanced Analytics",
    company: "Koch Industries",
    period: "Jul 2021 — Dec 2022",
    description:
      "Led a cross-functional team of 7 to build an HR analytics platform predicting attrition with ~80% accuracy, reducing turnover costs by $2M annually. Designed a supply chain optimization app from concept to launch, increasing annual revenue $200K. Defined requirements for an ML-driven real estate asset valuation platform, reducing property tax exposure by $4M.",
  },
  {
    role: "Chemical Engineer",
    company: "WEC Energy Group",
    period: "Jan 2017 — Jul 2021",
    description:
      "Spearheaded a $50M digital transformation for an energy conglomerate, generating $15M in annual benefits for 3 utility companies across 2 states. Built and deployed a custom mobile application to track gas pipeline projects across 4 districts in Chicago, resulting in ~$75K annual savings.",
  },
];

export const pmProjects: Project[] = [
  {
    id: "agentic-ai-platform",
    title: "Agentic AI Platform for International E-Commerce",
    description:
      "Launched a 0-to-1 agentic AI platform for Amazon's flagship international e-commerce marketplaces. Automated cross-functional workflows spanning engineering, supply chain & operations, and finance to drastically accelerate marketplace launches.",
    highlights: [
      "Reduced launch cycle time by 70% (6 months)",
      "Shipped LLM-agent for supply chain/logistics, reducing hallucinations by 30%",
      "Owned PRD, evaluation metrics/guardrails, and MVP development",
      "Drove A/B tests increasing checkout conversion ~15% across 6 countries",
    ],
    tags: ["Agentic AI", "E-Commerce", "LLM", "0-to-1"],
    year: "2025",
  },
  {
    id: "enterprise-ml-products",
    title: "Enterprise Machine Learning Products",
    description:
      "Launched 5 new enterprise ML products at Koch Industries, conducting 50+ user interviews with senior executives (VPs, Presidents) to translate business priorities into AI use cases and product roadmaps. Architected end-to-end AI services including data pipelines, MLOps workflows, and model APIs.",
    highlights: [
      "Created ~$120M in projected NPV across 5 ML products",
      "Deployed AI services across 25 manufacturing plants, improving gross margins ~30%",
      "Formulated GTM strategy for 3 patented ML algorithms valued at $20M",
      "Scaled Gen AI adoption across 7+ subsidiaries, accelerating experimentation ~60%",
    ],
    tags: ["Enterprise AI", "MLOps", "Manufacturing", "Go-to-Market"],
    year: "2023",
  },
  {
    id: "hr-analytics-platform",
    title: "HR Analytics & Attrition Prediction Platform",
    description:
      "Led a cross-functional team of 7 data scientists, engineers, and economists to build an HR analytics platform that predicts employee attrition. Drove adoption across multiple business units and integrated the solution into recruiter workflows.",
    highlights: [
      "Predicted attrition with ~80% accuracy",
      "Reduced turnover costs by $2M annually",
      "Adopted by 50+ recruiters across 4 business units",
      "Led team of 7 data scientists, engineers, and economists",
    ],
    tags: ["Machine Learning", "HR Tech", "Analytics", "Cross-Functional"],
    year: "2022",
  },
  {
    id: "supply-chain-optimization",
    title: "Supply Chain Optimization Application",
    description:
      "Designed a new supply chain optimization app from concept to launch, defining product requirements and UX flows for multiple personas. Improved manufacturing efficiency and drove measurable revenue impact.",
    highlights: [
      "Defined ~75 product requirements and UX flows for 5 personas",
      "Increased annual revenue by $200K through manufacturing efficiency",
      "Concept-to-launch product ownership",
      "Defined requirements for ML-driven real estate valuation platform, reducing tax exposure by $4M",
    ],
    tags: ["Supply Chain", "Manufacturing", "UX", "0-to-1"],
    year: "2021",
  },
  {
    id: "digital-transformation",
    title: "$50M Digital Transformation — Energy Sector",
    description:
      "Spearheaded a large-scale digital transformation for a Midwestern energy conglomerate, digitizing operations, automating processes, and modernizing reporting across multiple utility companies and states.",
    highlights: [
      "Generated $15M in annual benefits for 3 utility companies across 2 states",
      "Built and deployed custom mobile app for gas pipeline project tracking",
      "Implemented solution across 4 districts in Chicago",
      "Resulted in ~$75K annual savings through optimized resource utilization",
    ],
    tags: ["Digital Transformation", "Energy", "Mobile App", "Operations"],
    year: "2019",
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
