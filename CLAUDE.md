@AGENTS.md

# Portfolio Website

Next.js 16 + React 19 + Tailwind v4 + TypeScript. Static site, no API/DB.

## Architecture

```
src/
├── app/                    # App Router pages (all server components)
│   ├── layout.tsx          # Root: Navbar + {children} + Footer, Geist fonts
│   ├── page.tsx            # / → Hero
│   ├── about/page.tsx      # /about → About (bio, skills, experience timeline)
│   ├── pm-projects/page.tsx# /pm-projects → ProjectGrid(pmProjects)
│   ├── dev-projects/page.tsx# /dev-projects → ProjectGrid(devProjects)
│   ├── resume/page.tsx     # /resume → ResumeViewer (iframe of /resume.pdf)
│   └── globals.css         # CSS vars (theme), keyframes, stagger animations
├── components/
│   ├── Navbar.tsx          # "use client" — only client component (usePathname)
│   ├── Hero.tsx            # Landing: gradient bg, animated orbs, 2 CTAs
│   ├── About.tsx           # Bio + Skills grid (4 categories) + Experience timeline
│   ├── ProjectGrid.tsx     # Grid wrapper, takes projects: Project[]
│   ├── ProjectCard.tsx     # Card: title, year, description, highlights, tags, link?
│   ├── SectionHeading.tsx  # Reusable h1 + subtitle + accent bar
│   ├── SkillBadge.tsx      # Tag badge, variant: "default" | "accent"
│   ├── ResumeViewer.tsx    # Download btn + iframe PDF viewer
│   └── Footer.tsx          # Copyright + LinkedIn/GitHub/Email links
├── data/
│   └── content.ts          # ALL content lives here — single source of truth
└── types/
    └── index.ts            # Project, Skill, Experience interfaces
```

## Content editing

All text content is in `src/data/content.ts`. Exports:

| Export | Type | Used by |
|--------|------|---------|
| `bio` | object | Hero, About, Footer |
| `skills` | `Skill[]` | About |
| `experiences` | `Experience[]` | About |
| `pmProjects` | `Project[]` | pm-projects page |
| `devProjects` | `Project[]` | dev-projects page |

Types in `src/types/index.ts`:
```ts
Project { id, title, description, highlights: string[], tags: string[], link?, year }
Skill { category, items: string[] }
Experience { role, company, period, summary, accomplishments: string[], impact, learnings }
```

## Styling

- Tailwind v4 via `@tailwindcss/postcss`
- Theme: CSS vars in `globals.css` :root — white bg, indigo accent (#6366f1)
- Animations: `animate-fade-in-up`, `animate-pulse-glow`, `.stagger-children`
- Responsive: mobile-first, `md:` breakpoint for grid columns and nav

## Commands

```
npm run dev    # local dev server
npm run build  # production build
npm run lint   # eslint
```
