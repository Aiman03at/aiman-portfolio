import { useState } from "react";

type Project = {
  number: string;
  badge: string;
  badgeColor: string;
  badgeBorder: string;
  badgeBackground: string;
  name: string;
  tagline: string;
  tags: { label: string; tone: string }[];
  links: { label: string; href: string }[];
  description: string;
  highlights: { title: string; body: string }[];
};

const projects: Project[] = [
  {
    number: "01 — FEATURED",
    badge: "🏆 Hackathon · Scale Without Borders 2026",
    badgeColor: "#f59e0b",
    badgeBorder: "rgba(245,158,11,0.3)",
    badgeBackground: "rgba(245,158,11,0.08)",
    name: "SafeHire",
    tagline:
      "AI-powered job scam detector and remote job finder. Paste any job posting and get a legitimacy score, red flag analysis, and live job matches — built with the Claude API.",
    tags: [
      { label: "React", tone: "blue" },
      { label: "TypeScript", tone: "blue" },
      { label: "Claude API", tone: "purple" },
      { label: "Vite", tone: "green" },
      { label: "Vercel", tone: "amber" },
    ],
    links: [
      { label: "Live ↗", href: "https://safe-hire-delta.vercel.app" },
      { label: "GitHub ↗", href: "https://github.com/Aiman03at/safe-hire" },
    ],
    description:
      "I built SafeHire because I experienced job scam fatigue firsthand — vague postings, wasted applications, companies with no real presence. SafeHire is a three-mode AI tool that solves this. Mode A analyzes any job posting across 8 risk signals (salary transparency, payment requests, company verifiability, contact methods) and returns a 0–100 legitimacy score in about 3 seconds. Mode B finds real remote jobs matching your skills by searching Greenhouse, Lever, and LinkedIn live — no stale databases. Mode C is a recruiter audit tool: paste a job posting before it goes live, get an 8-dimension quality audit, then hit AI Rewrite and Claude rewrites the entire thing.",
    highlights: [
      {
        title: "PROMPT ENGINEERING",
        body: "Structured JSON output across 3 different AI modes — iterated system prompts with concrete examples to guarantee consistent parsing.",
      },
      {
        title: "PRODUCTION DEPLOY",
        body: "Vite dev proxy doesn't carry to Vercel — built a serverless proxy function at api/proxy.ts to handle CORS in production.",
      },
      {
        title: "LIVE JOB SEARCH",
        body: "Uses Claude's web search tool to query job boards in real time. Prompt tuning was critical to avoid stale aggregator links.",
      },
      {
        title: "FULL STACK",
        body: "React + TypeScript frontend, Vercel serverless backend, Claude API — deployed and live.",
      },
    ],
  },
  {
    number: "02 — ADVANCED",
    badge: "Microservices · CI/CD · ML",
    badgeColor: "#a78bfa",
    badgeBorder: "rgba(167,139,250,0.3)",
    badgeBackground: "rgba(167,139,250,0.08)",
    name: "SupplySync",
    tagline:
      "Real-time supply chain management platform with WebSocket inventory tracking, AI-driven demand forecasting, and a full CI/CD pipeline. Inspired by Kinaxis RapidResponse.",
    tags: [
      { label: "React", tone: "blue" },
      { label: "Node.js", tone: "green" },
      { label: "Socket.io", tone: "green" },
      { label: "PostgreSQL", tone: "blue" },
      { label: "Python · FastAPI", tone: "purple" },
      { label: "Docker", tone: "rose" },
      { label: "GitHub Actions", tone: "amber" },
    ],
    links: [{ label: "GitHub ↗", href: "https://github.com/Aiman03at/SupplySync" }],
    description:
      "SupplySync is a microservices platform with four independently deployed services: a React dashboard, a Node/Express REST API with Socket.io for real-time inventory events, a PostgreSQL database, and a Python FastAPI service handling demand forecasting and anomaly detection. All four services run locally with a single docker compose up command. In production, the backend and ML service deploy to Railway, the frontend to Vercel — all triggered automatically on merge to master.",
    highlights: [
      {
        title: "REAL-TIME WEBSOCKETS",
        body: "Socket.io broadcasts inventory change events to all connected clients instantly. Managed reconnect logic and deduplication of events on reconnect.",
      },
      {
        title: "CI/CD PIPELINE",
        body: "GitHub Actions runs Node tests, React tests, and Python ML unit tests on every PR. On merge to master: Docker build → push to Docker Hub → deploy to Railway + Vercel.",
      },
      {
        title: "ML MICROSERVICE",
        body: "Python FastAPI service with demand forecasting and anomaly detection. Separated from Node backend to use Python's richer ML ecosystem (scikit-learn, pandas, numpy).",
      },
      {
        title: "ARCHITECTURE",
        body: "Feature branches → dev → master. Protected master branch. Conventional commit messages. Makefile shortcuts for common operations.",
      },
    ],
  },
  {
    number: "03 — FULL-STACK",
    badge: "REST API · Auth · File Uploads",
    badgeColor: "#4ade80",
    badgeBorder: "rgba(74,222,128,0.3)",
    badgeBackground: "rgba(74,222,128,0.08)",
    name: "Little Haven",
    tagline:
      "Full-stack daycare management system with child profiles, real-time attendance, meal tracking with photo uploads, health records, and role-based access for admins, educators, and parents.",
    tags: [
      { label: "React 19", tone: "blue" },
      { label: "TypeScript", tone: "blue" },
      { label: "Node.js · Express", tone: "green" },
      { label: "PostgreSQL", tone: "green" },
      { label: "JWT · RBAC", tone: "rose" },
      { label: "Tailwind", tone: "amber" },
    ],
    links: [
      { label: "Live ↗", href: "https://daycare-management-hn3m.vercel.app" },
      { label: "GitHub ↗", href: "https://github.com/Aiman03at/Daycare_Management" },
    ],
    description:
      "Little Haven is a production-grade management system for daycare centers, built full-stack from scratch. The backend is a layered Express/TypeScript API — routes handle HTTP, middleware enforces auth and permissions, service files contain business logic. Three user roles (Admin, Educator, Parent) are enforced at the middleware layer using JWT tokens and bcrypt password hashing. The React frontend uses React Router v7 with protected routes and Axios for API calls.",
    highlights: [
      {
        title: "ROLE-BASED AUTH",
        body: "JWT authentication + three permission levels. Admin can manage staff; Educators manage daily records; Parents have read-only access to their child's data.",
      },
      {
        title: "FILE UPLOADS",
        body: "Photo uploads for children, activities, and meals — stored in /uploads with separate subdirectories per entity type. Handled via multer middleware.",
      },
      {
        title: "DATA MODEL",
        body: "Many-to-many between activities and children. Auto-creating tables on first server start for frictionless dev setup. 10+ relational tables in PostgreSQL.",
      },
      {
        title: "SECURITY",
        body: "bcryptjs password hashing, CORS origin restriction, server-side input validation, comprehensive error middleware with typed error responses.",
      },
    ],
  },
  {
    number: "04 — COMPONENT LIBRARY",
    badge: "Design System",
    badgeColor: "#fb7185",
    badgeBorder: "rgba(251,113,133,0.3)",
    badgeBackground: "rgba(251,113,133,0.08)",
    name: "UI Templates",
    tagline:
      "A personal React component library — reusable, composable UI patterns built to eliminate rebuilding the same components across projects.",
    tags: [
      { label: "React", tone: "blue" },
      { label: "CSS", tone: "amber" },
      { label: "Component Design", tone: "green" },
    ],
    links: [{ label: "GitHub ↗", href: "https://github.com/Aiman03at/UI_Templates" }],
    description:
      "A personal library of composable React components — the kind of foundation you build before starting a larger project so you're not reinventing buttons and modals every time. Built with compound component patterns for flexibility: instead of a monolithic Card with 15 props, it's Card + CardHeader + CardBody + CardFooter, letting the caller decide the structure.",
    highlights: [
      {
        title: "COMPOUND PATTERN",
        body: "Composable over configurable — components are split so callers control structure, not a prop explosion.",
      },
      {
        title: "WHY I BUILT IT",
        body: "Noticed I was rebuilding the same 6 components across every project. The library enforces consistency and speeds up project starts.",
      },
    ],
  },
];

const skills = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "React Router", "Vite", "Axios"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT Auth", "bcryptjs", "Python", "FastAPI"],
  },
  {
    title: "Database & Infra",
    items: ["PostgreSQL", "Docker", "GitHub Actions", "Vercel", "Railway", "CI/CD"],
  },
  {
    title: "AI & Other",
    items: ["Claude API", "Prompt Engineering", "Technical Writing", "Git", "Markdown", "SEO / Accessibility"],
  },
];

const aboutFacts = [
  { icon: "📍", label: "Location", value: "Ottawa, Ontario, Canada" },
  { icon: "🎯", label: "Looking for", value: "Software Developer roles (1–3 yrs level) · Ottawa or remote" },
  { icon: "🏆", label: "Recent achievement", value: "Built SafeHire at Scale Without Borders AI Hackathon, May 2026" },
  { icon: "✍️", label: "Also writes", value: "Technical articles for developers on Hashnode" },
  { icon: "🌐", label: "Languages", value: "English · Arabic" },
];

function App() {
  const [openProject, setOpenProject] = useState(0);

  return (
    <div className="portfolio-shell">
      <nav>
        <a href="#top" className="nav-logo">Aiman.</a>
        <ul className="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero" id="top">
        <div className="hero-left">
          <div className="hero-eyebrow">Software Developer · Ottawa, Canada</div>
          <h1 className="hero-title">Building things<br />that <em>actually</em><br />work.</h1>
          <p className="hero-subtitle">
            I'm Aiman — a full-stack developer based in Ottawa with a background in technical writing. I build real applications: AI tools, management systems, real-time platforms, and everything in between.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-ghost">Get in touch</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <div>
              <div className="stat-label">Latest Project</div>
              <div className="stat-value">SafeHire — AI Hackathon · May 2026</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🛠️</div>
            <div>
              <div className="stat-label">Primary Stack</div>
              <div className="stat-value">React · TypeScript · Node.js · PostgreSQL</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏗️</div>
            <div>
              <div className="stat-label">What I build</div>
              <div className="stat-value">Full-stack apps · APIs · AI-powered tools</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📍</div>
            <div>
              <div className="stat-label">Status</div>
              <div className="stat-value">Open to opportunities in Ottawa & remote</div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="section-header">
          <span className="section-num">01</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const isOpen = openProject === index;

            return (
              <article className={`project-card${isOpen ? " open" : ""}`} key={project.name}>
                <button type="button" className="project-header" onClick={() => setOpenProject(isOpen ? -1 : index)}>
                  <div>
                    <div className="project-num">{project.number}</div>
                    <div className="project-name">{project.name}</div>
                    <div className="project-tagline">{project.tagline}</div>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={`${project.name}-${tag.label}`} className={`tag tag-${tag.tone}`}>{tag.label}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-right">
                    <span
                      className="project-badge"
                      style={{ color: project.badgeColor, border: `1px solid ${project.badgeBorder}`, background: project.badgeBackground }}
                    >
                      {project.badge}
                    </span>
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a key={`${project.name}-${link.label}`} className="project-link" href={link.href} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                    <div className="expand-icon">+</div>
                  </div>
                </button>

                {isOpen ? (
                  <div className="project-body">
                    <p className="project-desc">{project.description}</p>
                    <div className="highlights">
                      {project.highlights.map((highlight) => (
                        <div key={`${project.name}-${highlight.title}`} className="highlight">
                          <strong>{highlight.title}</strong>
                          {highlight.body}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section id="skills">
        <div className="section-header">
          <span className="section-num">02</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.title}>
              <div className="skill-group-title">{group.title}</div>
              <div className="skill-list">
                {group.items.map((skill) => (
                  <span className="skill-pill" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about">
        <div className="section-header">
          <span className="section-num">03</span>
          <h2 className="section-title">About</h2>
          <div className="section-line" />
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a <strong>software developer based in Ottawa</strong> with a background in technical writing and content for developers. That combination gives me something unusual: I can build the thing <em>and</em> explain how it works clearly — which matters more than people think.
            </p>
            <p>
              My projects span full-stack web apps, real-time systems, AI-powered tools, and microservices architectures. I've built everything from a <strong>hackathon-winning AI tool</strong> to a <strong>production-grade supply chain platform</strong> with Docker, CI/CD, and a Python ML service.
            </p>
            <p>
              I care about writing code that's organized, readable, and maintainable — not just code that works. That means proper layered architecture, meaningful commit messages, and thinking about the next developer who reads the code.
            </p>
            <p>
              I also write technical content on <strong>Hashnode</strong> — developer-facing articles on topics like REST vs WebSockets. Writing forces clarity of thought, which makes me a better developer.
            </p>
          </div>

          <div className="about-facts">
            {aboutFacts.map((fact) => (
              <div className="fact" key={fact.label}>
                <div className="fact-icon">{fact.icon}</div>
                <div>
                  <div className="fact-label">{fact.label}</div>
                  <div className="fact-value">{fact.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="section-header">
          <span className="section-num">04</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line" />
        </div>

        <div className="contact-inner">
          <p className="contact-text">
            I'm actively looking for software developer roles in Ottawa and open to remote opportunities. If you're working on something interesting or want to talk about one of my projects, I'd love to hear from you.
          </p>

          <div className="contact-links">
            <a className="contact-link" href="https://github.com/Aiman03at" target="_blank" rel="noreferrer">
              <span className="contact-link-icon">⌥</span>
              <span className="contact-link-label">GitHub</span>
              <span>github.com/Aiman03at</span>
            </a>
            <a className="contact-link" href="mailto:your-email@example.com">
              <span className="contact-link-icon">✉</span>
              <span className="contact-link-label">Email</span>
              <span>Add your email here</span>
            </a>
            <a className="contact-link" href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
              <span className="contact-link-icon">in</span>
              <span className="contact-link-label">LinkedIn</span>
              <span>Add your LinkedIn URL</span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Aiman · Built with React + TypeScript</p>
        <p>Ottawa, Canada · Open to opportunities</p>
      </footer>
    </div>
  );
}

export default App;
