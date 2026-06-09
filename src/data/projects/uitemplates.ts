import type { Project } from './types';

const uitemplates: Project = {
  id: 'ui-templates',
  number: '04 — COMPONENT LIBRARY',
  badge: 'Design System',
  badgeColor: '#fb7185',
  badgeBorder: 'rgba(251,113,133,0.3)',
  badgeBackground: 'rgba(251,113,133,0.08)',
  name: 'UI Templates',
  tagline:
    'A personal React component library — reusable, composable UI patterns built to eliminate rebuilding the same components across projects.',
  tags: [
    { label: 'React', tone: 'blue' },
    { label: 'CSS', tone: 'amber' },
    { label: 'Component Design', tone: 'green' },
  ],
  links: [{ label: 'GitHub ↗', href: 'https://github.com/Aiman03at/UI_Templates' }],
  description:
    "A personal library of composable React components — the kind of foundation you build before starting a larger project so you're not reinventing buttons and modals every time. Built with compound component patterns for flexibility: instead of a monolithic Card with 15 props, it's Card + CardHeader + CardBody + CardFooter, letting the caller decide the structure.",
  highlights: [
    {
      title: 'COMPOUND PATTERN',
      body: 'Composable over configurable — components are split so callers control structure, not a prop explosion.',
    },
    {
      title: 'WHY I BUILT IT',
      body: 'Noticed I was rebuilding the same 6 components across every project. The library enforces consistency and speeds up project starts.',
    },
  ],
  screenshots: [],
};

export default uitemplates;
