import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [lightbox, setLightbox] = useState<string | null>(null);

  const idx = projects.findIndex((p) => p.id === id);
  const project = projects[idx];
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  if (!project) {
    return (
      <>
        <Nav variant="detail" />
        <div className="detail-not-found">
          <p>Project not found.</p>
          <Link to="/" className="btn-primary">Back to Portfolio</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Nav variant="detail" />

      <div className="detail-shell">
        {/* ── HERO ── */}
        <section className="detail-hero">
          <div className="detail-hero-meta">
            <span className="detail-number">{project.number}</span>
            <span
              className="project-badge"
              style={{ color: project.badgeColor, border: `1px solid ${project.badgeBorder}`, background: project.badgeBackground }}
            >
              {project.badge}
            </span>
          </div>
          <h1 className="detail-title">{project.name}</h1>
          <p className="detail-tagline">{project.tagline}</p>
          <div className="detail-tags-row">
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag.label} className={`tag tag-${tag.tone}`}>{tag.label}</span>
              ))}
            </div>
            <div className="project-links">
              {project.links.map((link) => (
                <a key={link.label} className="project-link" href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── OVERVIEW ── */}
        <section className="detail-section section-alt">
          <div className="detail-section-label">Overview</div>
          <div className="overview-grid">
            {(
              [
                { key: 'Problem', value: project.overview.problem },
                { key: 'Solution', value: project.overview.solution },
                { key: 'Impact', value: project.overview.impact },
                { key: 'Future Enhancements', value: project.overview.futureEnhancements },
              ] as const
            ).map(({ key, value }) => (
              <div key={key} className="overview-item">
                <div className="overview-heading">{key}</div>
                <p className="overview-body">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HIGHLIGHTS ── */}
        <section className="detail-section">
          <div className="detail-section-label">Technical Highlights</div>
          <div className="highlights">
            {project.highlights.map((h) => (
              <div key={h.title} className="highlight">
                <strong>{h.title}</strong>
                {h.body}
              </div>
            ))}
          </div>
        </section>

        {/* ── SCREENSHOTS ── */}
        {project.screenshots.length > 0 && (
          <section className="detail-section section-alt">
            <div className="detail-section-label">Screenshots</div>
            <div className="detail-screenshots-grid">
              {project.screenshots.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  className="detail-screenshot"
                  onClick={() => setLightbox(src)}
                >
                  <img src={src} alt={`${project.name} screenshot ${i + 1}`} loading="lazy" />
                  <div className="screenshot-overlay"><span>View</span></div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* ── PREV / NEXT ── */}
        <section className="detail-section detail-nav-row">
          <div className="detail-nav-links">
            {prev ? (
              <Link to={`/projects/${prev.id}`} className="detail-nav-btn detail-nav-btn--prev">
                <span className="detail-nav-dir">← Previous</span>
                <span className="detail-nav-name">{prev.name}</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/projects/${next.id}`} className="detail-nav-btn detail-nav-btn--next">
                <span className="detail-nav-dir">Next →</span>
                <span className="detail-nav-name">{next.name}</span>
              </Link>
            ) : <div />}
          </div>
        </section>

        <footer>
          <p>© 2026 Aiman Mushtaq · Full-Stack Developer · Ottawa</p>
          <p>Canadian PR · Open to opportunities</p>
        </footer>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button type="button" className="lightbox-close" onClick={() => setLightbox(null)}>×</button>
          <img src={lightbox} alt="Screenshot" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
