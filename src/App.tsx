import { useState, useEffect } from "react";

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
  screenshots: string[];
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
    screenshots: [
      "/Screeenshots/safehire/Screenshot 1.png",
      "/Screeenshots/safehire/Screenshot 2.png",
      "/Screeenshots/safehire/Screenshot 3.png",
      "/Screeenshots/safehire/Screenshot 4.png",
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
    screenshots: [],
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
    screenshots: [],
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
    screenshots: [],
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
    items: ["Claude API", "OpenAI API", "MCP", "Prompt Engineering", "Technical Writing", "Git", "Jest"],
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Connect Smart Consulting",
    location: "Hyderabad",
    period: "2020 – 2023",
    bullets: [
      { text: "Shipped RESTful APIs serving", metric: "10,000+ users", rest: " across production client applications." },
      { text: "Cut API response time ", metric: "40%", rest: " through query optimization, indexing, and payload reduction." },
      { text: "Reduced React page load time ", metric: "35%", rest: " via code splitting and component refactors." },
      { text: "Maintained ", metric: "80%+", rest: " Jest test coverage on client-facing applications." },
      { text: "Owned full delivery cycle from requirements through deployment and post-launch support.", metric: "", rest: "" },
    ],
  },
];

const education = [
  { degree: "Full-Stack Web Development", school: "Lighthouse Labs", location: "Ottawa", year: "2024" },
  { degree: "M.Sc., Computer Science", school: "JNTU Hyderabad", location: "Hyderabad", year: "2014" },
  { degree: "B.Sc., Computer Science & IT", school: "Osmania University", location: "Hyderabad", year: "2011" },
];

const certifications = [
  {
    issuer: "Anthropic",
    color: "purple",
    certs: [
      { name: "Claude 101", status: "done" },
      { name: "Claude Code 101", status: "done" },
      { name: "AI Fluency Framework & Foundations", status: "done" },
      { name: "AI Capabilities & Limitations", status: "done" },
      { name: "Model Context Protocol", status: "done" },
      { name: "Agent Skills", status: "done" },
      { name: "Claude Certified Practitioner", status: "progress" },
    ],
  },
  {
    issuer: "Other",
    color: "blue",
    certs: [
      { name: "ISTQB Foundation Level 4.0", status: "done" },
      { name: "Microsoft Azure Fundamentals (AZ-900)", status: "done" },
    ],
  },
];

const aboutFacts = [
  { icon: "📍", label: "Location", value: "Ottawa, Ontario, Canada" },
  { icon: "🎯", label: "Looking for", value: "Software Developer roles · Ottawa, remote, or Gov. of Canada CS-01/02" },
  { icon: "🏆", label: "Recent achievement", value: "2nd place — Scaled Without Borders AI Hackathon, May 2026" },
  { icon: "✍️", label: "Also writes", value: "Technical articles on Dev.to and Hashnode" },
  { icon: "🌐", label: "Languages", value: "English · Arabic" },
  { icon: "🇨🇦", label: "Status", value: "Canadian Permanent Resident · No restrictions" },
];

function App() {
  const [openProject, setOpenProject] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const els = document.querySelectorAll<Element>("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div className="portfolio-shell">
      <nav>
        <a href="#top" className="nav-logo">Aiman Mushtaq</a>
        <ul className="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a
          className="nav-resume"
          href="/Aiman_Mushtaq_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          download
        >
          Resume ↓
        </a>
      </nav>

      <section className="hero" id="top" style={{ borderTop: "none" }}>
        <div className="hero-left">
          <div className="hero-eyebrow">Full-Stack Developer · AI Integration · Ottawa, Canada</div>
          <h1 className="hero-title">Building things<br />that <em>actually</em><br />work.</h1>
          <p className="hero-subtitle">
            I'm Aiman,a full-stack developer with 3+ years of production experience and an AI specialization. I build real applications: AI tools, management systems, real-time platforms, and everything in between.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-ghost">Get in touch</a>
            <a
              className="btn-resume"
              href="/Aiman_Mushtaq_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              download
            >
              Resume ↓
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <div>
              <div className="stat-label">Latest Win</div>
              <div className="stat-value">SafeHire — 2nd place, Scale Without Borders 2026</div>
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
            <div className="stat-icon">🤖</div>
            <div>
              <div className="stat-label">AI Credentials</div>
              <div className="stat-value">6 Anthropic certs · Claude Certified Practitioner in progress</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📍</div>
            <div>
              <div className="stat-label">Status</div>
              <div className="stat-value">Canadian PR · Open to Ottawa & remote roles</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 01 PROJECTS ── */}
      <section id="projects">
        <div className="section-header" data-animate>
          <span className="section-num">01</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const isOpen = openProject === index;
            return (
              <article
                data-animate
                data-delay={String(index + 1)}
                className={`project-card${isOpen ? " open" : ""}`}
                key={project.name}
              >
                <button
                  type="button"
                  className="project-header"
                  onClick={() => setOpenProject(isOpen ? -1 : index)}
                >
                  <div>
                    <div className="project-num">{project.number}</div>
                    <div className="project-name">{project.name}</div>
                    <div className="project-tagline">{project.tagline}</div>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={`${project.name}-${tag.label}`} className={`tag tag-${tag.tone}`}>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="project-right">
                    <span
                      className="project-badge"
                      style={{
                        color: project.badgeColor,
                        border: `1px solid ${project.badgeBorder}`,
                        background: project.badgeBackground,
                      }}
                    >
                      {project.badge}
                    </span>
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a
                          key={`${project.name}-${link.label}`}
                          className="project-link"
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                    <div className="expand-icon">+</div>
                  </div>
                </button>

                {isOpen && (
                  <div className="project-body">
                    <p className="project-desc">{project.description}</p>
                    <div className="highlights">
                      {project.highlights.map((h) => (
                        <div key={`${project.name}-${h.title}`} className="highlight">
                          <strong>{h.title}</strong>
                          {h.body}
                        </div>
                      ))}
                    </div>
                    {project.screenshots.length > 0 && (
                      <div className="screenshots-section">
                        <div className="screenshots-label">SCREENSHOTS</div>
                        <div className="screenshots-strip">
                          {project.screenshots.map((src, i) => (
                            <button
                              key={i}
                              type="button"
                              className="screenshot-thumb"
                              onClick={(e) => { e.stopPropagation(); setLightbox(src); }}
                            >
                              <img src={src} alt={`${project.name} screenshot ${i + 1}`} loading="lazy" />
                              <div className="screenshot-overlay"><span>View</span></div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* ── 02 SKILLS ── */}
      <section id="skills">
        <div className="section-header" data-animate>
          <span className="section-num">02</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </div>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <div data-animate data-delay={String(i + 1)} className="skill-group" key={group.title}>
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

      {/* ── 03 EXPERIENCE ── */}
      <section id="experience">
        <div className="section-header" data-animate>
          <span className="section-num">03</span>
          <h2 className="section-title">Experience</h2>
          <div className="section-line" />
        </div>

        <div className="experience-list">
          {experience.map((job, i) => (
            <div data-animate data-delay={String(i + 1)} className="exp-entry" key={job.company}>
              <div className="exp-header">
                <div className="exp-header-left">
                  <div className="exp-role">{job.role}</div>
                  <div className="exp-company">{job.company} <span className="exp-location">· {job.location}</span></div>
                </div>
                <div className="exp-period">{job.period}</div>
              </div>
              <ul className="exp-bullets">
                {job.bullets.map((b, bi) => (
                  <li key={bi} className="exp-bullet">
                    {b.text}
                    {b.metric && <strong className="exp-metric">{b.metric}</strong>}
                    {b.rest}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── 04 EDUCATION & CERTIFICATIONS ── */}
      <section id="education">
        <div className="section-header" data-animate>
          <span className="section-num">04</span>
          <h2 className="section-title">Education & Certifications</h2>
          <div className="section-line" />
        </div>

        <div className="edu-certs-grid">
          <div className="edu-col">
            <div className="edu-col-label">Education</div>
            {education.map((item, i) => (
              <div data-animate data-delay={String(i + 1)} className="edu-item" key={item.degree}>
                <div className="edu-year">{item.year}</div>
                <div>
                  <div className="edu-degree">{item.degree}</div>
                  <div className="edu-school">{item.school} · {item.location}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="cert-col">
            <div className="edu-col-label">Certifications</div>
            {certifications.map((group) => (
              <div data-animate className="cert-group" key={group.issuer}>
                <div className={`cert-issuer cert-issuer--${group.color}`}>{group.issuer}</div>
                <div className="cert-pills">
                  {group.certs.map((c) => (
                    <span
                      key={c.name}
                      className={`cert-pill${c.status === "progress" ? " cert-pill--progress" : ""}`}
                    >
                      {c.name}
                      {c.status === "progress" && <span className="cert-progress-tag">in progress</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 ABOUT ── */}
      <section id="about">
        <div className="section-header" data-animate>
          <span className="section-num">05</span>
          <h2 className="section-title">About</h2>
          <div className="section-line" />
        </div>

        <div className="about-grid">
          <div className="about-text" data-animate>
            <p>
              I'm a <strong>full-stack developer based in Ottawa</strong> with 3+ years of production engineering experience and a working AI specialization. That mix — shipping real software at scale and understanding how LLMs actually behave — is what I bring to every project.
            </p>
            <p>
              My work ranges from <strong>hackathon-winning AI tools</strong> (SafeHire, 2nd place among 100 builders) to <strong>production microservices platforms</strong> with Docker, CI/CD, and Python ML services. Six completed Anthropic credentials, Claude Certified Practitioner in progress.
            </p>
            <p>
              I care about writing code that's organized, readable, and maintainable — proper layered architecture, meaningful commits, and thinking about the next developer who touches the codebase.
            </p>
            <p>
              I also write technical content on <strong>Dev.to and Hashnode</strong> — developer-facing articles on topics like REST vs WebSockets. Writing forces clarity of thought, which makes me a better engineer.
            </p>
          </div>

          <div className="about-facts">
            {aboutFacts.map((fact, i) => (
              <div data-animate data-delay={String(i + 1)} className="fact" key={fact.label}>
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

      {/* ── 06 CONTACT ── */}
      <section id="contact">
        <div className="section-header" data-animate>
          <span className="section-num">06</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line" />
        </div>

        <div className="contact-inner">
          <p className="contact-text" data-animate>
            I'm actively looking for software developer roles in Ottawa and open to remote and Government of Canada opportunities. If you're working on something interesting or want to talk about one of my projects, I'd love to hear from you.
          </p>

          <div className="contact-links">
            <a data-animate data-delay="1" className="contact-link" href="mailto:aimanmushtaq5028@gmail.com">
              <span className="contact-link-icon">✉</span>
              <span className="contact-link-label">Email</span>
              
            </a>
            <a data-animate data-delay="2" className="contact-link" href="https://linkedin.com/in/aimanmushtaq89" target="_blank" rel="noreferrer">
              <span className="contact-link-icon">in</span>
              <span className="contact-link-label">LinkedIn</span>
              
            </a>
            <a data-animate data-delay="3" className="contact-link" href="https://github.com/Aiman03at" target="_blank" rel="noreferrer">
              <span className="contact-link-icon">⌥</span>
              <span className="contact-link-label">GitHub</span>
              
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Aiman Mushtaq · Full-Stack Developer · Ottawa</p>
        <p>Canadian PR · Open to opportunities</p>
      </footer>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button type="button" className="lightbox-close" onClick={() => setLightbox(null)}>×</button>
          <img src={lightbox} alt="Screenshot" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}

export default App;
