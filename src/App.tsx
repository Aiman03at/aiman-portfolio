import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";

const Projects      = lazy(() => import("./pages/Projects"));
const ProjectDetails= lazy(() => import("./pages/ProjectDetails"));
const Blog          = lazy(() => import("./pages/Blog"));
const BlogDetails   = lazy(() => import("./pages/BlogDetails"));
const Contact       = lazy(() => import("./pages/Contact"));
const About         = lazy(() => import("./pages/About"));

/* ── Page transition variants ─────────────────────────── */
const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0,  transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.2,  ease: [0.4, 0, 0.2, 1] } },
};

/* ── Loading fallback ─────────────────────────────────── */
function PageLoader() {
  return (
    <div className="page-loading">
      <div className="loading-dot" role="status" aria-label="Loading page">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

/* ── Animated page wrapper ────────────────────────────── */
function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ position: "relative", zIndex: 1 }}
    >
      {children}
    </motion.div>
  );
}

/* ── App ──────────────────────────────────────────────── */
function App() {
  const location = useLocation();

  return (
    /*
      Root shell:
      - background-color and text-color driven by CSS custom properties
        so every page inherits the beige/ink design tokens.
      - pt-[var(--nav-height)] ensures content is never hidden under
        the fixed navbar.
      - The grain overlay (body::before in index.css) renders on top
        at z-index 0; all page content sits at z-index 1.
    */
    <div
      className="min-h-screen transition-colors"
      style={{
        backgroundColor: "var(--color-beige)",
        color:           "var(--color-ink)",
        paddingTop:      "var(--nav-height)",
      }}
    >
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/"            element={<AnimatedPage><About /></AnimatedPage>} />
            <Route path="/about"       element={<AnimatedPage><About /></AnimatedPage>} />
            <Route path="/contact"     element={<AnimatedPage><Contact /></AnimatedPage>} />
            <Route path="/projects"    element={<AnimatedPage><Projects /></AnimatedPage>} />
            <Route path="/projects/:id"element={<AnimatedPage><ProjectDetails /></AnimatedPage>} />
            <Route path="/blog"        element={<AnimatedPage><Blog /></AnimatedPage>} />
            <Route path="/blog/:id"    element={<AnimatedPage><BlogDetails /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </div>
  );
}

export default App;
