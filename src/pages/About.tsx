import PageWrapper from "../components/PageWrapper";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

/* ── Animation variants ───────────────────────────────── */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren:   0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

/* ── Data ─────────────────────────────────────────────── */
const SKILLS = [
  { group: "Frontend",   items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { group: "Backend",    items: ["Node.js", "Express", "FastAPI", "Python", "REST APIs"] },
  { group: "Data",       items: ["PostgreSQL", "Prisma", "SQL", "Redis"] },
  { group: "Tooling",    items: ["Docker", "Git", "Jest", "Cypress", "Vite"] },
];

const TIMELINE = [
  {
    period: "2026 — Present",
    role:   "Re-entering Tech",
    org:    "Ottawa, Canada",
    note:   "Building AI-integrated full-stack projects, pursuing CCA certification, and targeting full-stack roles in Ottawa and remote.",
  },
  {
    period: "2024",
    role:   "Web Development Bootcamp",
    org:    "Canada",
    note:   "Intensive full-stack training covering modern React, Node.js, databases, and deployment workflows.",
  },
  {
    period: "2021 — 2023",
    role:   "Full-Stack Developer",
    org:    "Connect Smart Consulting · Hyderabad",
    note:   "Built production applications serving 5,000+ users — Smart School platform and a Factory Management System using React, Node.js, and PostgreSQL.",
  },
  {
    period: "Earlier",
    role:   "M.Sc. Computer Science",
    org:    "University",
    note:   "Graduate-level foundation in algorithms, systems, and software engineering.",
  },
];

/* ── Component ────────────────────────────────────────── */
export default function About() {
  return (
    <PageWrapper>
      <Helmet>
        <title>About — Aiman</title>
        <meta
          name="description"
          content="Aiman is a full-stack developer with 3+ years of professional experience building React, TypeScript, and Node.js applications."
        />
      </Helmet>

      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        style={{ maxWidth: "var(--max-w-content)", marginInline: "auto" }}
      >
        {/* ── Hero ─────────────────────────────────────── */}
        <section
          style={{
            paddingInline: "clamp(1.25rem, 5vw, 3rem)",
            paddingTop:    "clamp(4rem, 8vw, 7rem)",
            paddingBottom: "clamp(3rem, 6vw, 5rem)",
            borderBottom:  "1px solid var(--color-parchment)",
            display:       "grid",
            gridTemplateColumns: "1fr auto",
            gap:           "2rem",
            alignItems:    "end",
          }}
        >
          <div>
            <motion.p variants={fadeUp} className="section-label">
              About
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
                marginBottom:  "1.75rem",
                maxWidth:      "14ch",
              }}
            >
              Developer.<br />
              <span style={{ color: "var(--color-accent-warm)", fontStyle: "italic" }}>
                Problem solver.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize:   "1.125rem",
                lineHeight: 1.8,
                color:      "var(--color-ink-soft)",
                maxWidth:   "58ch",
              }}
            >
              Full-stack developer with 3+ years of professional experience
              building production web applications. I care about how users
              experience products — not just how they look, but how they feel.
            </motion.p>
          </div>

          {/* Status badge */}
          <motion.div
            variants={fadeUp}
            style={{ alignSelf: "start", flexShrink: 0 }}
            className="hidden md:block"
          >
            <div
              style={{
                display:       "inline-flex",
                alignItems:    "center",
                gap:           "0.5rem",
                padding:       "0.5rem 1rem",
                borderRadius:  "var(--radius-sm)",
                border:        "1px solid var(--color-parchment)",
                background:    "var(--color-cream)",
                fontFamily:    "var(--font-mono)",
                fontSize:      "0.75rem",
                letterSpacing: "0.04em",
                color:         "var(--color-ink-muted)",
                whiteSpace:    "nowrap",
              }}
            >
              <span
                style={{
                  width:           "6px",
                  height:          "6px",
                  borderRadius:    "50%",
                  background:      "#4ade80",
                  flexShrink:      0,
                  boxShadow:       "0 0 0 3px rgba(74, 222, 128, 0.2)",
                  animation:       "pulse 2s ease-in-out infinite",
                }}
              />
              Available for hire · Ottawa / Remote
            </div>
          </motion.div>
        </section>

        {/* ── Main Content Grid ─────────────────────────── */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr",
            gap:                 0,
          }}
        >
          {/* ── Story ──────────────────────────────────── */}
          <section
            style={{
              paddingInline: "clamp(1.25rem, 5vw, 3rem)",
              paddingBlock:  "clamp(3rem, 6vw, 5rem)",
              borderBottom:  "1px solid var(--color-parchment)",
              display:       "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
              gap:           "clamp(2rem, 5vw, 5rem)",
            }}
          >
            <motion.div variants={fadeUp}>
              <p
                style={{
                  fontFamily:    "var(--font-mono)",
                  fontSize:      "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color:         "var(--color-ink-faint)",
                  marginBottom:  "1.25rem",
                }}
              >
                01 / Background
              </p>
              <p
                style={{
                  fontSize:      "1rem",
                  lineHeight:    1.8,
                  color:         "var(--color-ink-soft)",
                  marginBottom:  "1rem",
                }}
              >
                I built production applications at Connect Smart Consulting in
                Hyderabad — a school platform serving 5,000+ users and a
                factory management system, both on a React / Node.js /
                PostgreSQL stack.
              </p>
              <p
                style={{
                  fontSize:   "1rem",
                  lineHeight: 1.8,
                  color:      "var(--color-ink-soft)",
                }}
              >
                After relocating to Canada I completed an intensive web
                development bootcamp and have been building AI-integrated
                projects to stay sharp on what's current.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p
                style={{
                  fontFamily:    "var(--font-mono)",
                  fontSize:      "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color:         "var(--color-ink-faint)",
                  marginBottom:  "1.25rem",
                }}
              >
                02 / Now
              </p>
              <p
                style={{
                  fontSize:   "1rem",
                  lineHeight: 1.8,
                  color:      "var(--color-ink-soft)",
                  marginBottom: "1rem",
                }}
              >
                I'm targeting full-stack and frontend roles in Ottawa and
                remotely — both private sector (startups, product companies)
                and Government of Canada CS positions starting September 2026.
              </p>
              <p
                style={{
                  fontSize:   "1rem",
                  lineHeight: 1.8,
                  color:      "var(--color-ink-soft)",
                }}
              >
                I hold an M.Sc. in Computer Science and am currently pursuing
                the Claude Certified Architect certification alongside active
                portfolio work.
              </p>
            </motion.div>
          </section>

          {/* ── Skills ─────────────────────────────────── */}
          <section
            style={{
              paddingInline: "clamp(1.25rem, 5vw, 3rem)",
              paddingBlock:  "clamp(3rem, 6vw, 5rem)",
              borderBottom:  "1px solid var(--color-parchment)",
            }}
          >
            <motion.p variants={fadeUp} className="section-label">
              Skills
            </motion.p>

            <motion.div
              variants={container}
              style={{
                display:             "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
                gap:                 "1px",
                background:          "var(--color-parchment)",
                border:              "1px solid var(--color-parchment)",
                borderRadius:        "var(--radius-lg)",
                overflow:            "hidden",
              }}
            >
              {SKILLS.map(({ group, items }) => (
                <motion.div
                  key={group}
                  variants={fadeUp}
                  style={{
                    padding:    "1.75rem",
                    background: "var(--color-cream)",
                  }}
                >
                  <p
                    style={{
                      fontFamily:    "var(--font-mono)",
                      fontSize:      "0.6875rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color:         "var(--color-accent-warm)",
                      marginBottom:  "1rem",
                    }}
                  >
                    {group}
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {items.map(item => (
                      <li
                        key={item}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize:   "0.9375rem",
                          color:      "var(--color-ink-soft)",
                          fontWeight: 400,
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ── Timeline ───────────────────────────────── */}
          <section
            style={{
              paddingInline: "clamp(1.25rem, 5vw, 3rem)",
              paddingBlock:  "clamp(3rem, 6vw, 5rem)",
              borderBottom:  "1px solid var(--color-parchment)",
            }}
          >
            <motion.p variants={fadeUp} className="section-label">
              Experience
            </motion.p>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {TIMELINE.map(({ period, role, org, note }, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    display:       "grid",
                    gridTemplateColumns: "clamp(7rem, 18%, 11rem) 1fr",
                    gap:           "2rem",
                    paddingBlock:  "1.75rem",
                    borderBottom:  i < TIMELINE.length - 1
                      ? "1px solid var(--color-parchment)"
                      : "none",
                    alignItems:    "start",
                  }}
                >
                  {/* Period */}
                  <p
                    style={{
                      fontFamily:    "var(--font-mono)",
                      fontSize:      "0.75rem",
                      letterSpacing: "0.04em",
                      color:         "var(--color-ink-faint)",
                      paddingTop:    "0.2rem",
                      lineHeight:    1.4,
                    }}
                  >
                    {period}
                  </p>

                  {/* Content */}
                  <div>
                    <p
                      style={{
                        fontFamily:  "var(--font-body)",
                        fontWeight:  600,
                        fontSize:    "1rem",
                        color:       "var(--color-ink)",
                        marginBottom:"0.25rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {role}
                    </p>
                    <p
                      style={{
                        fontFamily:    "var(--font-mono)",
                        fontSize:      "0.8125rem",
                        color:         "var(--color-accent-warm)",
                        letterSpacing: "0.02em",
                        marginBottom:  "0.625rem",
                      }}
                    >
                      {org}
                    </p>
                    <p
                      style={{
                        fontSize:   "0.9375rem",
                        lineHeight: 1.7,
                        color:      "var(--color-ink-muted)",
                      }}
                    >
                      {note}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── CTA ────────────────────────────────────── */}
          <section
            style={{
              paddingInline: "clamp(1.25rem, 5vw, 3rem)",
              paddingBlock:  "clamp(3rem, 6vw, 5rem)",
              display:       "flex",
              alignItems:    "center",
              justifyContent:"space-between",
              flexWrap:      "wrap",
              gap:           "1.5rem",
            }}
          >
            <motion.div variants={fadeUp}>
              <p
                style={{
                  fontFamily:    "var(--font-display)",
                  fontSize:      "clamp(1.5rem, 4vw, 2.25rem)",
                  fontWeight:    600,
                  letterSpacing: "-0.025em",
                  color:         "var(--color-ink)",
                  marginBottom:  "0.5rem",
                }}
              >
                Let's work together.
              </p>
              <p
                style={{
                  fontSize:  "0.9375rem",
                  color:     "var(--color-ink-muted)",
                }}
              >
                Open to full-stack and frontend roles — Ottawa or remote.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
            >
              <a
                href="/resume.pdf"
                download
                className="btn btn-primary"
                style={{
                  display:        "inline-flex",
                  alignItems:     "center",
                  gap:            "0.5rem",
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
                  cursor:         "pointer",
                  transition:     "all 200ms ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translateY(-1px)";
                  el.style.boxShadow = "var(--shadow-card)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Résumé
              </a>

              <a
                href="/contact"
                style={{
                  display:        "inline-flex",
                  alignItems:     "center",
                  gap:            "0.5rem",
                  fontFamily:     "var(--font-body)",
                  fontSize:       "0.8125rem",
                  fontWeight:     500,
                  letterSpacing:  "0.06em",
                  textTransform:  "uppercase",
                  textDecoration: "none",
                  padding:        "0.75rem 1.75rem",
                  borderRadius:   "var(--radius-sm)",
                  background:     "transparent",
                  color:          "var(--color-ink)",
                  border:         "1px solid var(--color-sand)",
                  cursor:         "pointer",
                  transition:     "all 200ms ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--color-ink)";
                  el.style.transform   = "translateY(-1px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--color-sand)";
                  el.style.transform   = "translateY(0)";
                }}
              >
                Get in touch
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </motion.div>
          </section>
        </div>
      </motion.main>

      {/* Pulse animation for availability dot */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }
      `}</style>
    </PageWrapper>
  );
}
