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
    summary:
      "Owned the product vision and delivery for a 0-to-1 agentic AI platform that automated marketplace launches across Amazon's international e-commerce business, working at the intersection of LLMs, supply chain, and global operations.",
    accomplishments: [
      "Built and shipped an agentic AI platform that automated cross-functional workflows across engineering, supply chain, operations, and finance",
      "Shipped a purpose-built LLM-agent for supply chain and logistics, owning the full cycle from PRD through evaluation metrics and guardrails to MVP",
      "Designed and ran A/B experiments on international customer shopping experiences across 6 countries",
    ],
    impact:
      "Reduced marketplace launch cycle time by 70% (6 months), cut LLM hallucinations by 30% through guardrail design, and increased checkout conversion ~15% internationally.",
    learnings:
      "Learned how to scope and ship AI products under extreme ambiguity at massive scale. Developed a framework for designing evaluation metrics and guardrails for LLM-based systems. Strengthened cross-functional influence — aligning engineering, supply chain, and finance teams with different incentives toward a shared product outcome.",
  },
  {
    role: "Sr. Technical Product Manager — AI & Advanced Analytics",
    company: "Koch Industries",
    period: "Dec 2022 — Aug 2024",
    summary:
      "Led AI product strategy for the 2nd largest private company in America, launching enterprise ML products for manufacturing, forecasting, and Gen AI adoption across Koch's portfolio of subsidiaries.",
    accomplishments: [
      "Launched 5 enterprise ML products after conducting 50+ executive interviews (VPs, Presidents) to translate business priorities into AI use cases",
      "Architected end-to-end AI services — data pipelines, MLOps workflows, and model APIs — for the largest U.S. glass manufacturer",
      "Formulated go-to-market strategy for 3 patented ML forecasting algorithms, developing the venture pitch, MVP, roadmap, and pricing",
      "Built an internal Gen AI marketplace of LLM architectures, prompt templates, and accelerators; delivered workshops for executives and engineers",
    ],
    impact:
      "Created ~$120M in projected NPV across 5 ML products. Improved gross margins ~30% across 25 manufacturing plants. Positioned $20M in patented algorithms for commercialization. Accelerated Gen AI experimentation ~60% across 7+ subsidiaries.",
    learnings:
      "Learned to sell AI to skeptical business leaders by anchoring every conversation in their P&L. Built deep expertise in MLOps and production ML systems. Gained experience navigating complex stakeholder dynamics across a massive conglomerate — where each subsidiary operates as its own business with distinct priorities.",
  },
  {
    role: "Technical Product Manager — AI & Advanced Analytics",
    company: "Koch Industries",
    period: "Jul 2021 — Dec 2022",
    summary:
      "First PM hire on Koch's central AI team, responsible for building ML-powered products across HR, supply chain, and real estate — taking each from problem discovery through launch and adoption.",
    accomplishments: [
      "Led a cross-functional team of 7 data scientists, engineers, and economists to build an HR analytics platform predicting employee attrition",
      "Designed a supply chain optimization app end-to-end, defining ~75 product requirements and UX flows for 5 personas",
      "Defined requirements for an ML-driven real estate asset valuation platform, piloting the MVP across 3 regions",
      "Analyzed a $125M AI startup portfolio to assess product-market fit and surface investment insights",
    ],
    impact:
      "Predicted attrition with ~80% accuracy, saving $2M annually in turnover costs and driving adoption by 50+ recruiters across 4 business units. Increased annual revenue $200K through supply chain efficiency. Reduced property tax exposure by $4M.",
    learnings:
      "Learned how to be a founding PM — defining processes, earning trust, and establishing product thinking in an engineering-led org. Developed strong instincts for translating ambiguous business problems into concrete ML product requirements. Built experience managing data science teams and understanding the unique iteration cycles of ML development.",
  },
  {
    role: "Chemical Engineer",
    company: "WEC Energy Group",
    period: "Jan 2017 — Jul 2021",
    summary:
      "Transitioned from traditional engineering into technology by leading a $50M digital transformation for a Midwestern energy conglomerate, digitizing operations and building custom software to modernize utility infrastructure.",
    accomplishments: [
      "Spearheaded digital transformation across 3 utility companies in 2 states — digitizing operations, automating processes, and modernizing reporting",
      "Built and deployed a custom mobile application for tracking gas pipeline project execution across 4 districts in Chicago",
    ],
    impact:
      "Generated $15M in annual benefits across the energy portfolio. The mobile app alone delivered ~$75K in annual savings through optimized resource utilization and reduced regulatory fines.",
    learnings:
      "This is where I discovered my passion for building products. Learned that the hardest part of digital transformation isn't the technology — it's change management and getting field operators to trust new tools. Built the operational mindset and systems thinking that I carry into every PM role.",
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
    link: "https://braiv.tech/",
    year: "2026",
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
    link: "https://github.com/rabeesr/rabeesr",
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
    link: "https://github.com/rabeesr/rabeesr",
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
    link: "https://github.com/rabeesr/rabeesr",
    year: "2023",
  },
];
