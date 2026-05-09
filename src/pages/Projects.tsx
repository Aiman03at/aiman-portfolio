import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCards from "../components/ProjectCards";
import PageWrapper from "../components/PageWrapper";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";

/* ── Animation variants ───────────────────────────────── */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
  exit:   { opacity: 0, y: 10, transition: { duration: 0.2 } },
};

/* ── Derive unique tech filters from project data ─────── */
function getFilters(projectList: typeof projects): string[] {
  const all = projectList.flatMap(p => p.tech ?? []);
  const unique = Array.from(new Set(all)).slice(0, 6); // cap at 6 tags
  return unique;
}

/* ── Component ────────────────────────────────────────── */
export default function Projects() {
  const [active, setActive] = useState<string | null>(null);

  const filters   = getFilters(projects);
  const displayed = active
    ? projects.filter(p => p.tech?.includes(active))
    : projects;

  return (
    <PageWrapper>
      <Helmet>
        <title>Work — Aiman</title>
        <meta
          name="description"
          content="Full-stack projects by Aiman — React, TypeScript, Node.js, PostgreSQL, and AI-integrated applications."
        />
      </Helmet>

      <div
        style={{
          maxWidth:      "var(--max-w-content)",
          marginInline:  "auto",
        }}
      >
        {/* ── Header ─────────────────────────────────── */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          style={{
            paddingInline: "clamp(1.25rem, 5vw, 3rem)",
            paddingTop:    "clamp(4rem, 8vw, 7rem)",
            paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
            borderBottom:  "1px solid var(--color-parchment)",
            display:       "grid",
            gridTemplateColumns: "1fr auto",
            gap:           "2rem",
            alignItems:    "end",
          }}
        >
          <div>
            <motion.p variants={fadeUp} className="section-label">
              Selected work
            </motion.p>

            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily:    "var(--font-display)",
                fontSize:      "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight:    700,
                lineHeight:    1.1,
                letterSpacing: "-0.03em",
                color:         "var(--color-ink)",
                marginBottom:  "1.25rem",
              }}
            >
              Projects
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize:   "1.0625rem",
                lineHeight: 1.75,
                color:      "var(--color-ink-muted)",
                maxWidth:   "52ch",
              }}
            >
              Full-stack and frontend projects spanning enterprise applications,
              developer tools, and AI-integrated products.
            </motion.p>
          </div>

          {/* Project count */}
          <motion.div
            variants={fadeUp}
            className="hidden md:flex"
            style={{ flexDirection: "column", alignItems: "flex-end", gap: "0.25rem" }}
          >
            <span
              style={{
                fontFamily:    "var(--font-display)",
                fontSize:      "3rem",
                fontWeight:    700,
                lineHeight:    1,
                color:         "var(--color-ink)",
                letterSpacing: "-0.04em",
              }}
            >
              {String(projects.length).padStart(2, "0")}
            </span>
            <span
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color:         "var(--color-ink-faint)",
              }}
            >
              projects
            </span>
          </motion.div>
        </motion.section>

        {/* ── Filter Bar ─────────────────────────────── */}
        {filters.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            style={{
              paddingInline:  "clamp(1.25rem, 5vw, 3rem)",
              paddingBlock:   "1.25rem",
              borderBottom:   "1px solid var(--color-parchment)",
              display:        "flex",
              alignItems:     "center",
              gap:            "0.625rem",
              flexWrap:       "wrap",
              overflowX:      "auto",
            }}
          >
            <span
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "0.6875rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color:         "var(--color-ink-faint)",
                marginRight:   "0.25rem",
                flexShrink:    0,
              }}
            >
              Filter
            </span>

            {/* All */}
            <FilterChip
              label="All"
              active={active === null}
              onClick={() => setActive(null)}
            />

            {filters.map(tag => (
              <FilterChip
                key={tag}
                label={tag}
                active={active === tag}
                onClick={() => setActive(prev => prev === tag ? null : tag)}
              />
            ))}

            {/* Result count */}
            {active && (
              <span
                style={{
                  marginLeft:    "auto",
                  fontFamily:    "var(--font-mono)",
                  fontSize:      "0.75rem",
                  color:         "var(--color-ink-faint)",
                  letterSpacing: "0.04em",
                  flexShrink:    0,
                }}
              >
                {displayed.length} result{displayed.length !== 1 ? "s" : ""}
              </span>
            )}
          </motion.div>
        )}

        {/* ── Project Grid ───────────────────────────── */}
        <section
          style={{
            paddingInline: "clamp(1.25rem, 5vw, 3rem)",
            paddingBlock:  "clamp(2.5rem, 5vw, 4.5rem)",
            borderBottom:  "1px solid var(--color-parchment)",
          }}
        >
          <AnimatePresence mode="wait">
            {displayed.length > 0 ? (
              <motion.div
                key={active ?? "all"}
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
                style={{
                  display:             "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
                  gap:                 "1px",
                  background:          "var(--color-parchment)",
                  border:              "1px solid var(--color-parchment)",
                  borderRadius:        "var(--radius-lg)",
                  overflow:            "hidden",
                }}
              >
                {displayed.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={cardAnim}
                    style={{ background: "var(--color-beige)" }}
                  >
                    <ProjectCards
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      tech={project.tech}
                      image={project.image}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  paddingBlock:  "4rem",
                  textAlign:     "center",
                  color:         "var(--color-ink-faint)",
                  fontFamily:    "var(--font-mono)",
                  fontSize:      "0.875rem",
                  letterSpacing: "0.04em",
                }}
              >
                No projects match this filter.
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ── GitHub CTA ─────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          style={{
            paddingInline:   "clamp(1.25rem, 5vw, 3rem)",
            paddingBlock:    "clamp(2.5rem, 5vw, 4rem)",
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "space-between",
            flexWrap:        "wrap",
            gap:             "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily:    "var(--font-display)",
                fontSize:      "clamp(1.25rem, 3vw, 1.75rem)",
                fontWeight:    600,
                letterSpacing: "-0.025em",
                color:         "var(--color-ink)",
                marginBottom:  "0.375rem",
              }}
            >
              See everything on GitHub
            </p>
            <p style={{ fontSize: "0.9375rem", color: "var(--color-ink-muted)" }}>
              Open-source contributions, experiments, and work-in-progress builds.
            </p>
          </div>

          <a
            href="https://github.com/Aiman03at"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "0.625rem",
              fontFamily:     "var(--font-body)",
              fontSize:       "0.8125rem",
              fontWeight:     500,
              letterSpacing:  "0.06em",
              textTransform:  "uppercase",
              textDecoration: "none",
              padding:        "0.75rem 1.75rem",
              borderRadius:   "var(--radius-sm)",
              background:     "var(--color-ink)",
              color:          "var(--color-beige)",
              border:         "1px solid var(--color-ink)",
              transition:     "all 200ms ease",
              flexShrink:     0,
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background  = "transparent";
              el.style.color       = "var(--color-ink)";
              el.style.transform   = "translateY(-1px)";
              el.style.boxShadow   = "var(--shadow-card)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background  = "var(--color-ink)";
              el.style.color       = "var(--color-beige)";
              el.style.transform   = "translateY(0)";
              el.style.boxShadow   = "none";
            }}
          >
            {/* GitHub icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            github.com/Aiman03at
          </a>
        </motion.section>
      </div>
    </PageWrapper>
  );
}

/* ── FilterChip sub-component ─────────────────────────── */
function FilterChip({
  label,
  active,
  onClick,
}: {
  label:   string;
  active:  boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily:    "var(--font-mono)",
        fontSize:      "0.75rem",
        fontWeight:    active ? 500 : 400,
        letterSpacing: "0.04em",
        padding:       "0.3125rem 0.75rem",
        borderRadius:  "var(--radius-sm)",
        border:        `1px solid ${active ? "var(--color-ink)" : "var(--color-parchment)"}`,
        background:    active ? "var(--color-ink)" : "transparent",
        color:         active ? "var(--color-beige)" : "var(--color-ink-muted)",
        cursor:        "pointer",
        transition:    "all 150ms ease",
        flexShrink:    0,
      }}
      onMouseEnter={e => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-sand)";
          (e.currentTarget as HTMLButtonElement).style.color       = "var(--color-ink)";
        }
      }}
      onMouseLeave={e => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-parchment)";
          (e.currentTarget as HTMLButtonElement).style.color       = "var(--color-ink-muted)";
        }
      }}
    >
      {label}
    </button>
  );
}