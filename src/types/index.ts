export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  link?: string;
  year: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  summary: string;
  accomplishments: string[];
  impact: string;
  learnings: string;
}
