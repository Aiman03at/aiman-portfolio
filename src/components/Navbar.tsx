import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

interface NavItem {
  label: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "My work", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

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

export default function Navbar() {
  const [dark, setDark] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="nav"
        style={{
          backgroundColor: "rgba(245,240,232,0.88)",
          borderBottom: "1px solid var(--color-parchment)",
          boxShadow: "var(--shadow-subtle)",
        }}
      >
        <div className="nav-inner">
          <NavLink
            to="/"
            aria-label="Home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              fontFamily: "var(--font-display)",
              fontSize: "1.125rem",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              textDecoration: "none",
              color: "var(--color-ink)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "2rem",
                height: "2rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "var(--radius-sm)",
                background: "var(--color-ink)",
                color: "var(--color-beige)",
                fontSize: "0.875rem",
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              A
            </span>
            <span>Aiman</span>
          </NavLink>

          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="nav-links">
              {NAV_ITEMS.map(({ label, path }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button
              onClick={() => setDark((value) => !value)}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--color-parchment)",
                background: "transparent",
                color: "var(--color-ink-muted)",
                cursor: "pointer",
                transition: "all var(--dur-base) var(--ease-smooth)",
                flexShrink: 0,
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {dark ? (
                  <motion.svg
                    key="sun"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="moon"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>

            <button
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex md:hidden"
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                width: "2rem",
                height: "2rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "4px",
              }}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "var(--color-ink)",
                  borderRadius: "1px",
                }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                style={{
                  display: "block",
                  width: "14px",
                  height: "1.5px",
                  background: "var(--color-ink)",
                  borderRadius: "1px",
                  alignSelf: "flex-end",
                }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "var(--color-ink)",
                  borderRadius: "1px",
                }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 98,
                background: "rgba(17, 17, 17, 0.3)",
                backdropFilter: "blur(2px)",
              }}
            />

            <motion.div
              key="drawer"
              ref={menuRef}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(80vw, 320px)",
                zIndex: 99,
                backgroundColor: "var(--color-cream)",
                borderLeft: "1px solid var(--color-parchment)",
                display: "flex",
                flexDirection: "column",
                padding: "calc(var(--nav-height) + 2rem) 2rem 2rem",
                gap: "0.5rem",
              }}
            >
              {NAV_ITEMS.map(({ label, path }, index) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.25 }}
                >
                  <NavLink
                    to={path}
                    style={({ isActive }) => ({
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      fontWeight: 600,
                      letterSpacing: "-0.025em",
                      color: isActive ? "var(--color-ink)" : "var(--color-ink-faint)",
                      textDecoration: "none",
                      paddingBlock: "0.625rem",
                      borderBottom: "1px solid var(--color-parchment)",
                    })}
                  >
                    {label}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}