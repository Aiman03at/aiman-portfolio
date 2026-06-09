import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { projects } from '../data/projects';

const skills = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion', 'React Router', 'Vite', 'Axios'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io', 'JWT Auth', 'bcryptjs', 'Python', 'FastAPI'] },
  { title: 'Database & Infra', items: ['PostgreSQL', 'Docker', 'GitHub Actions', 'Vercel', 'Railway', 'CI/CD'] },
  { title: 'AI & Other', items: ['Claude API', 'OpenAI API', 'MCP', 'Prompt Engineering', 'Technical Writing', 'Git', 'Jest'] },
];

const experience = [
  {
    role: 'Software Engineer',
    company: 'Connect Smart Consulting',
    location: 'Hyderabad',
    period: '2020 – 2023',
    bullets: [
      { text: 'Shipped RESTful APIs serving', metric: '10,000+ users', rest: ' across production client applications.' },
      { text: 'Cut API response time ', metric: '40%', rest: ' through query optimization, indexing, and payload reduction.' },
      { text: 'Reduced React page load time ', metric: '35%', rest: ' via code splitting and component refactors.' },
      { text: 'Maintained ', metric: '80%+', rest: ' Jest test coverage on client-facing applications.' },
      { text: 'Owned full delivery cycle from requirements through deployment and post-launch support.', metric: '', rest: '' },
    ],
  },
];

const education = [
  { degree: 'Full-Stack Web Development', school: 'Lighthouse Labs', location: 'Ottawa', year: '2024' },
  { degree: 'M.Sc., Computer Science', school: 'JNTU Hyderabad', location: 'Hyderabad', year: '2014' },
  { degree: 'B.Sc., Computer Science & IT', school: 'Osmania University', location: 'Hyderabad', year: '2011' },
];

const certifications = [
  {
    issuer: 'Anthropic',
    color: 'purple',
    certs: [
      { name: 'Claude 101', status: 'done' },
      { name: 'Claude Code 101', status: 'done' },
      { name: 'AI Fluency Framework & Foundations', status: 'done' },
      { name: 'AI Capabilities & Limitations', status: 'done' },
      { name: 'Model Context Protocol', status: 'done' },
      { name: 'Agent Skills', status: 'done' },
      { name: 'Claude Certified Practitioner', status: 'progress' },
    ],
  },
  {
    issuer: 'Other',
    color: 'blue',
    certs: [
      { name: 'ISTQB Foundation Level 4.0', status: 'done' },
      { name: 'Microsoft Azure Fundamentals (AZ-900)', status: 'done' },
    ],
  },
];

const aboutFacts = [
  { icon: '📍', label: 'Location', value: 'Ottawa, Ontario, Canada' },
  { icon: '🎯', label: 'Looking for', value: 'Software Developer roles · Ottawa, remote, or Gov. of Canada CS-01/02' },
  { icon: '🏆', label: 'Recent achievement', value: '2nd place — Scaled Without Borders AI Hackathon, May 2026' },
  { icon: '✍️', label: 'Also writes', value: 'Technical articles on Hashnode' },
  { icon: '🌐', label: 'Languages', value: 'English · Arabic' },
  { icon: '🇨🇦', label: 'Status', value: 'Canadian Permanent Resident · No restrictions' },
];

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll<Element>('[data-animate]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav variant="home" />

      {/* ── HERO ── */}
      <section className="hero" id="top">
        <div className="hero-left">
          <div className="hero-eyebrow">Full Stack Developer · AI Integration · Ottawa, Canada</div>
          <h1 className="hero-title">Production-grade apps.<br />AI that <em>actually</em><br />works.</h1>
          <p className="hero-subtitle">
            I'm Aiman, a full-stack developer with 3+ years of production experience and an AI specialization. I build real applications: AI tools, management systems, real-time platforms, and everything in between.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-ghost">Get in touch</a>
            <a className="btn-resume" href="/Aiman_Mushtaq_Resume.pdf" target="_blank" rel="noreferrer" download>
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
      <section id="projects" className="section-alt">
        <div className="section-header" data-animate>
          <span className="section-num">01</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              data-animate
              data-delay={String(index + 1)}
              className="project-card"
              key={project.id}
            >
              <div className="project-header project-header--static">
                <div>
                  <div className="project-num">{project.number}</div>
                  <div className="project-name">{project.name}</div>
                  <div className="project-tagline">{project.tagline}</div>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag.label} className={`tag tag-${tag.tone}`}>{tag.label}</span>
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
                      <a key={link.label} className="project-link" href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                  <Link to={`/projects/${project.id}`} className="project-view-btn">
                    View Project →
                  </Link>
                </div>
              </div>
            </article>
          ))}
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
      <section id="experience" className="section-alt">
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
                    <span key={c.name} className={`cert-pill${c.status === 'progress' ? ' cert-pill--progress' : ''}`}>
                      {c.name}
                      {c.status === 'progress' && <span className="cert-progress-tag">in progress</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 ABOUT ── */}
      <section id="about" className="section-alt">
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
              I also write technical content on <strong><a href="https://aimanbuilds.hashnode.dev/" target="_blank" rel="noreferrer" className="about-link">Hashnode</a></strong> — developer-facing articles on topics like REST vs WebSockets. Writing forces clarity of thought, which makes me a better engineer.
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
            <a data-animate data-delay="4" className="contact-link" href="https://aimanbuilds.hashnode.dev/" target="_blank" rel="noreferrer">
              <span className="contact-link-icon">✍</span>
              <span className="contact-link-label">Hashnode</span>

            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Aiman Mushtaq · Full-Stack Developer · Ottawa</p>
        <p>Canadian PR · Open to opportunities</p>
      </footer>
    </>
  );
}
