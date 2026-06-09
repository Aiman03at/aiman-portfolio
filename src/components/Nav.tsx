import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

type NavProps = {
  variant?: 'home' | 'detail';
};

export default function Nav({ variant = 'home' }: NavProps) {
  const { theme, toggle } = useTheme();

  return (
    <nav>
      <Link to="/" className="nav-logo">Aiman.</Link>

      {variant === 'home' ? (
        <ul className="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      ) : (
        <Link to="/" className="nav-back">← Back to Portfolio</Link>
      )}

      <button
        type="button"
        className="theme-toggle"
        onClick={toggle}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀' : '◑'}
      </button>

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
  );
}
