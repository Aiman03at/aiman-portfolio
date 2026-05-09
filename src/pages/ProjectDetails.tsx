import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { Helmet } from "react-helmet-async";

/* ── Types inferred from actual data shape ────────────── */
type Project = (typeof projects)[number];

/* ── Animation variants ───────────────────────────────── */
const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

/* ── Sub-components ───────────────────────────────────── */
function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "1rem" }}>
      <span style={{
        fontFamily: "var(--font-mono)", fontSize: "0.6875rem",
        letterSpacing: "0.1em", textTransform: "uppercase" as const,
        color: "var(--color-ink-faint)", flexShrink: 0,
      }}>
        {index}
      </span>
      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
        fontWeight: 600, letterSpacing: "-0.025em",
        color: "var(--color-ink)", lineHeight: 1.2, margin: 0,
      }}>
        {children}
      </h2>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
      {items.map((item, i) => (
        <li key={i} style={{
          display: "flex", alignItems: "flex-start", gap: "0.75rem",
          fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--color-ink-soft)",
        }}>
          <span style={{
            width: "5px", height: "5px", borderRadius: "50%",
            background: "var(--color-accent-warm)", flexShrink: 0, marginTop: "0.6em",
          }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Block({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <motion.div
      variants={fadeUp}
      style={{
        paddingInline: "clamp(1.25rem, 5vw, 3rem)",
        paddingBlock: "clamp(2rem, 4vw, 3.5rem)",
        borderBottom: "1px solid var(--color-parchment)",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── Related project card ─────────────────────────────── */
function RelatedCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      style={{ textDecoration: "none", display: "block" }}
    >
      <motion.div
        whileHover={{ backgroundColor: "var(--color-parchment)" }}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "1rem", padding: "1.25rem clamp(1rem, 3vw, 1.75rem)",
          background: "var(--color-cream)",
          border: "1px solid var(--color-parchment)",
          borderRadius: "var(--radius-lg)",
          transition: "background 150ms ease",
        }}
      >
        <div>
          <p style={{
            fontFamily: "var(--font-display)", fontSize: "1.0625rem",
            fontWeight: 600, letterSpacing: "-0.02em",
            color: "var(--color-ink)", marginBottom: "0.375rem",
          }}>
            {project.title}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
            {project.tech.slice(0, 3).map(t => (
              <span key={t} style={{
                fontFamily: "var(--font-mono)", fontSize: "0.6875rem",
                letterSpacing: "0.05em", textTransform: "uppercase",
                color: "var(--color-ink-faint)",
                background: "var(--color-parchment)",
                borderRadius: "var(--radius-sm)", padding: "0.15rem 0.4rem",
              }}>{t}</span>
            ))}
          </div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.75"
          strokeLinecap="round" strokeLinejoin="round"
          style={{ color: "var(--color-ink-faint)", flexShrink: 0 }} aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.div>
    </Link>
  );
}

/* ── Main component ───────────────────────────────────── */
export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const related  = projects.filter(p => p.id !== id).slice(0, 2);

  /* ── 404 ──────────────────────────────────────────── */
  if (!project) {
    return (
      <PageWrapper>
        <Helmet><title>Project Not Found — Aiman</title></Helmet>
        <div style={{
          maxWidth: "var(--max-w-content)", marginInline: "auto",
          paddingInline: "clamp(1.25rem, 5vw, 3rem)",
          paddingBlock: "clamp(5rem, 12vw, 10rem)", textAlign: "center",
        }}>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: "0.75rem",
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "var(--color-ink-faint)", marginBottom: "1rem",
          }}>404</p>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700, letterSpacing: "-0.03em",
            color: "var(--color-ink)", marginBottom: "1rem",
          }}>Project not found</h1>
          <p style={{ fontSize: "1rem", color: "var(--color-ink-muted)", marginBottom: "2.5rem" }}>
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/projects" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            fontFamily: "var(--font-body)", fontSize: "0.8125rem",
            fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase",
            textDecoration: "none", padding: "0.75rem 1.75rem",
            borderRadius: "var(--radius-sm)",
            background: "var(--color-ink)", color: "var(--color-beige)",
            border: "1px solid var(--color-ink)",
          }}>← Back to projects</Link>
        </div>
      </PageWrapper>
    );
  }

  /* ── Full page ────────────────────────────────────── */
  return (
    <PageWrapper>
      <Helmet>
        <title>{project.title} — Aiman</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ maxWidth: "var(--max-w-content)", marginInline: "auto" }}
      >

        {/* ── Hero ─────────────────────────────────── */}
        <Block>
          <Link
            to="/projects"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.375rem",
              fontFamily: "var(--font-mono)", fontSize: "0.75rem",
              letterSpacing: "0.06em", textTransform: "uppercase",
              textDecoration: "none", color: "var(--color-ink-faint)",
              marginBottom: "2rem", transition: "color 150ms ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-faint)")}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All projects
          </Link>

          <motion.p variants={fadeUp} className="section-label">Case study</motion.p>

          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700, lineHeight: 1.1,
              letterSpacing: "-0.03em", color: "var(--color-ink)",
              marginBottom: "1.25rem",
            }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "1.0625rem", lineHeight: 1.8,
              color: "var(--color-ink-soft)", maxWidth: "60ch",
              marginBottom: "1.75rem",
            }}
          >
            {project.description}
          </motion.p>

          {/* Tech tags */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.tech.map(item => (
              <span key={item} style={{
                fontFamily: "var(--font-mono)", fontSize: "0.75rem",
                letterSpacing: "0.05em", textTransform: "uppercase",
                color: "var(--color-ink-muted)", background: "var(--color-parchment)",
                borderRadius: "var(--radius-sm)", padding: "0.3rem 0.625rem",
              }}>{item}</span>
            ))}
          </motion.div>
        </Block>

        {/* ── Hero image ───────────────────────────── */}
        {project.image && (
          <motion.div
            variants={fadeUp}
            style={{
              overflow: "hidden",
              borderBottom: "1px solid var(--color-parchment)",
              background: "var(--color-parchment)",
              aspectRatio: "16 / 7",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </motion.div>
        )}

        {/* ── Problem / Solution ───────────────────── */}
        <Block>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(2rem, 5vw, 4rem)",
          }}>
            <div>
              <SectionLabel index="01">Problem</SectionLabel>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "var(--color-ink-soft)" }}>
                {project.caseStudy.problem}
              </p>
            </div>
            <div>
              <SectionLabel index="02">Solution</SectionLabel>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "var(--color-ink-soft)" }}>
                {project.caseStudy.solution}
              </p>
            </div>
          </div>
        </Block>

        {/* ── Features ─────────────────────────────── */}
        {project.features?.length > 0 && (
          <Block>
            <SectionLabel index="03">Key features</SectionLabel>
            <BulletList items={project.features} />
          </Block>
        )}

        {/* ── Challenges / Trade-offs ───────────────── */}
        {(project.caseStudy.challenges?.length > 0 || project.caseStudy.tradeoffs?.length > 0) && (
          <Block>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "clamp(2rem, 5vw, 4rem)",
            }}>
              {project.caseStudy.challenges?.length > 0 && (
                <div>
                  <SectionLabel index="04">Challenges</SectionLabel>
                  <BulletList items={project.caseStudy.challenges} />
                </div>
              )}
              {project.caseStudy.tradeoffs?.length > 0 && (
                <div>
                  <SectionLabel index="05">Trade-offs</SectionLabel>
                  <BulletList items={project.caseStudy.tradeoffs} />
                </div>
              )}
            </div>
          </Block>
        )}

        {/* ── Results & Impact ─────────────────────── */}
        {project.caseStudy.ai && (
          <Block>
            <SectionLabel index="06">Results & impact</SectionLabel>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "var(--color-ink-soft)", maxWidth: "68ch" }}>
              {project.caseStudy.ai}
            </p>
          </Block>
        )}

        {/* ── Learnings ────────────────────────────── */}
        {project.caseStudy.learnings && (
          <Block>
            <SectionLabel index="07">Learnings</SectionLabel>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "var(--color-ink-soft)", maxWidth: "68ch" }}>
              {project.caseStudy.learnings}
            </p>
          </Block>
        )}

        {/* ── Future improvements ───────────────────── */}
        {project.improvements?.length > 0 && (
          <Block>
            <SectionLabel index="08">Future improvements</SectionLabel>
            <BulletList items={project.improvements} />
          </Block>
        )}

        {/* ── Screenshots ──────────────────────────── */}
        {project.screenshots?.length > 0 && (
          <Block>
            <SectionLabel index="09">Screenshots</SectionLabel>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
              gap: "1rem",
            }}>
              {project.screenshots.map((img, i) => (
                <div key={img} style={{
                  borderRadius: "var(--radius-lg)", overflow: "hidden",
                  border: "1px solid var(--color-parchment)",
                  background: "var(--color-parchment)", aspectRatio: "16 / 10",
                }}>
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
              ))}
            </div>
          </Block>
        )}

        {/* ── Links ────────────────────────────────── */}
        <Block>
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem",
          }}>
            <div>
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                fontWeight: 600, letterSpacing: "-0.025em",
                color: "var(--color-ink)", marginBottom: "0.25rem",
              }}>See it live</p>
              <p style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)" }}>
                Explore the project or review the source code.
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                    fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase",
                    textDecoration: "none", padding: "0.75rem 1.75rem",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--color-ink)", color: "var(--color-beige)",
                    border: "1px solid var(--color-ink)", transition: "all 200ms ease",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "transparent";
                    el.style.color = "var(--color-ink)";
                    el.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "var(--color-ink)";
                    el.style.color = "var(--color-beige)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                    fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase",
                    textDecoration: "none", padding: "0.75rem 1.75rem",
                    borderRadius: "var(--radius-sm)",
                    background: "transparent", color: "var(--color-ink)",
                    border: "1px solid var(--color-sand)", transition: "all 200ms ease",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "var(--color-ink)";
                    el.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "var(--color-sand)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Source code
                </a>
              )}
            </div>
          </div>
        </Block>

        {/* ── Related projects ─────────────────────── */}
        {related.length > 0 && (
          <Block style={{ borderBottom: "none" }}>
            <p className="section-label" style={{ marginBottom: "1.5rem" }}>More projects</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {related.map(p => <RelatedCard key={p.id} project={p} />)}
            </div>
          </Block>
        )}

      </motion.div>
    </PageWrapper>
  );
}
