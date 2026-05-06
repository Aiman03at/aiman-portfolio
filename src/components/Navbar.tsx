import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* ── Types ────────────────────────────────────────────── */
interface NavItem {
  label: string;
  path:  string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Projects",    path: "/projects" },
  { label: "About",   path: "/about"    },
  { label: "Writing", path: "/blog"     },
  { label: "Contact", path: "/contact"  },
];

/* ── Dark mode hook ───────────────────────────────────── */
function useDarkMode() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return [dark, setDark] as const;
}

/* ── Navbar ───────────────────────────────────────────── */
export default function Navbar() {
  const [dark, setDark]       = useDarkMode();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location                = useLocation();
  const menuRef                 = useRef<HTMLDivElement>(null);

  /* Close mobile menu on route change */
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  /* Scroll shadow */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Close menu on outside click */
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position:        "fixed",
          top:             0,
          left:            0,
          right:           0,
          height:          "var(--nav-height)",
          zIndex:          100,
          backgroundColor: scrolled
            ? "rgba(245,240,232,0.92)"
            : "rgba(245,240,232,0.7)",
          backdropFilter:  "blur(16px) saturate(140%)",
          WebkitBackdropFilter: "blur(16px) saturate(140%)",
          borderBottom:    scrolled
            ? "1px solid var(--color-parchment)"
            : "1px solid transparent",
          transition:      "background-color 300ms ease, border-color 300ms ease, box-shadow 300ms ease",
          boxShadow:       scrolled ? "var(--shadow-subtle)" : "none",
        }}
        className="dark:[background-color:rgba(15,14,12,0.92)]"
      >
        <div className="nav-inner">

          {/* ── Logo ──────────────────────────────────── */}
          <NavLink
            to="/"
            aria-label="Home"
            style={{
              fontFamily:    "var(--font-display)",
              fontSize:      "1.125rem",
              fontWeight:    700,
              color:         "var(--color-ink)",
              letterSpacing: "-0.03em",
              textDecoration: "none",
              display:       "flex",
              alignItems:    "center",
              gap:           "0.5rem",
            }}
          >
            {/* Monogram mark */}
            <span
              style={{
                display:         "inline-flex",
                alignItems:      "center",
                justifyContent:  "center",
                width:           "2rem",
                height:          "2rem",
                borderRadius:    "var(--radius-sm)",
                background:      "var(--color-ink)",
                color:           "var(--color-beige)",
                fontFamily:      "var(--font-display)",
                fontSize:        "0.875rem",
                fontWeight:      700,
                letterSpacing:   "-0.02em",
                flexShrink:      0,
              }}
              aria-hidden="true"
            >
              A
            </span>
            <span>Aiman</span>
          </NavLink>

          {/* ── Desktop Nav Links ──────────────────────── */}
          <nav aria-label="Main navigation">
            <ul
              style={{
                display:    "flex",
                alignItems: "center",
                gap:        "2.25rem",
                listStyle:  "none",
                margin:     0,
                padding:    0,
              }}
              className="hidden md:flex"
            >
              {NAV_ITEMS.map(({ label, path }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    style={({ isActive }) => ({
                      fontFamily:    "var(--font-body)",
                      fontSize:      "0.8125rem",
                      fontWeight:    500,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase" as const,
                      textDecoration: "none",
                      color:         isActive
                        ? "var(--color-ink)"
                        : "var(--color-ink-muted)",
                      position:      "relative",
                      paddingBottom: "2px",
                      transition:    "color 150ms ease",
                    })}
                    className="nav-link-item"
                  >
                    {({ isActive }) => (
                      <>
                        {label}
                        {isActive && (
                          <motion.span
                            layoutId="nav-underline"
                            style={{
                              position:   "absolute",
                              bottom:     0,
                              left:       0,
                              right:      0,
                              height:     "1px",
                              background: "var(--color-ink)",
                              borderRadius: "1px",
                            }}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Controls ──────────────────────────────── */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(d => !d)}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                display:         "inline-flex",
                alignItems:      "center",
                justifyContent:  "center",
                width:           "2rem",
                height:          "2rem",
                borderRadius:    "var(--radius-sm)",
                border:          "1px solid var(--color-parchment)",
                background:      "transparent",
                color:           "var(--color-ink-muted)",
                cursor:          "pointer",
                transition:      "all 200ms ease",
                flexShrink:      0,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-sand)";
                (e.currentTarget as HTMLButtonElement).style.color       = "var(--color-ink)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-parchment)";
                (e.currentTarget as HTMLButtonElement).style.color       = "var(--color-ink-muted)";
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {dark ? (
                  <motion.svg
                    key="sun"
                    width="14" height="14" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{    opacity: 0, rotate:  90 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1"  x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1"  y1="12" x2="3"  y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78"  x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="moon"
                    width="13" height="13" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{    opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>

            {/* Resume CTA — desktop only */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex"
              style={{
                fontFamily:    "var(--font-body)",
                fontSize:      "0.8125rem",
                fontWeight:    500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding:       "0.5rem 1.125rem",
                borderRadius:  "var(--radius-sm)",
                border:        "1px solid var(--color-ink)",
                background:    "var(--color-ink)",
                color:         "var(--color-beige)",
                transition:    "all 200ms ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.color      = "var(--color-ink)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "var(--color-ink)";
                el.style.color      = "var(--color-beige)";
              }}
            >
              Résumé
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex md:hidden"
              style={{
                display:         "inline-flex",
                flexDirection:   "column",
                alignItems:      "center",
                justifyContent:  "center",
                gap:             "5px",
                width:           "2rem",
                height:          "2rem",
                background:      "transparent",
                border:          "none",
                cursor:          "pointer",
                padding:         "4px",
              }}
            >
              <motion.span
                animate={menuOpen
                  ? { rotate: 45,  y: 7,  scaleX: 1 }
                  : { rotate: 0,   y: 0,  scaleX: 1 }}
                style={{
                  display:      "block",
                  width:        "20px",
                  height:       "1.5px",
                  background:   "var(--color-ink)",
                  borderRadius: "1px",
                  transformOrigin: "center",
                }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                style={{
                  display:      "block",
                  width:        "14px",
                  height:       "1.5px",
                  background:   "var(--color-ink)",
                  borderRadius: "1px",
                  alignSelf:    "flex-end",
                }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                animate={menuOpen
                  ? { rotate: -45, y: -7, scaleX: 1 }
                  : { rotate: 0,   y: 0,  scaleX: 1 }}
                style={{
                  display:      "block",
                  width:        "20px",
                  height:       "1.5px",
                  background:   "var(--color-ink)",
                  borderRadius: "1px",
                  transformOrigin: "center",
                }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ─────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{    opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position:   "fixed",
                inset:      0,
                zIndex:     98,
                background: "rgba(17, 17, 17, 0.3)",
                backdropFilter: "blur(2px)",
              }}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              ref={menuRef}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: "0%"   }}
              exit={{    opacity: 0, x: "100%"  }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position:        "fixed",
                top:             0,
                right:           0,
                bottom:          0,
                width:           "min(80vw, 320px)",
                zIndex:          99,
                backgroundColor: "var(--color-cream)",
                borderLeft:      "1px solid var(--color-parchment)",
                display:         "flex",
                flexDirection:   "column",
                padding:         "calc(var(--nav-height) + 2rem) 2rem 2rem",
                gap:             "0.25rem",
              }}
            >
              {NAV_ITEMS.map(({ label, path }, i) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0  }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                >
                  <NavLink
                    to={path}
                    style={({ isActive }) => ({
                      display:       "flex",
                      alignItems:    "center",
                      justifyContent:"space-between",
                      fontFamily:    "var(--font-display)",
                      fontSize:      "1.75rem",
                      fontWeight:    600,
                      letterSpacing: "-0.025em",
                      color:         isActive
                        ? "var(--color-ink)"
                        : "var(--color-ink-faint)",
                      textDecoration: "none",
                      paddingBlock:  "0.625rem",
                      borderBottom:  "1px solid var(--color-parchment)",
                      transition:    "color 150ms ease",
                    })}
                  >
                    {label}
                    <svg
                      width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </NavLink>
                </motion.div>
              ))}

              {/* Resume in mobile drawer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                style={{ marginTop: "auto" }}
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:        "block",
                    textAlign:      "center",
                    fontFamily:     "var(--font-body)",
                    fontSize:       "0.875rem",
                    fontWeight:     500,
                    letterSpacing:  "0.06em",
                    textTransform:  "uppercase",
                    textDecoration: "none",
                    padding:        "0.875rem",
                    borderRadius:   "var(--radius-sm)",
                    border:         "1px solid var(--color-ink)",
                    background:     "var(--color-ink)",
                    color:          "var(--color-beige)",
                  }}
                >
                  Download Résumé
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Inline hover style for desktop nav links ──── */}
      <style>{`
        .nav-link-item:hover {
          color: var(--color-ink) !important;
        }
      `}</style>
    </>
  );
}