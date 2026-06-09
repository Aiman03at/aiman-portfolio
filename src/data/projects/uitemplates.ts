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
  overview: {
    problem:
      "Starting a new React project means rebuilding the same 6–8 foundational components from scratch every time — buttons, modals, cards, form inputs — wasting hours before any real product work begins. Inconsistent implementations across projects also create a maintenance burden.",
    solution:
      "A personal component library using the compound component pattern. Instead of monolithic components with prop explosions, each piece is split into composable parts (Card + CardHeader + CardBody + CardFooter), letting the caller control structure. Built to be dropped directly into any new project with zero configuration.",
    impact:
      "Cuts project setup time significantly by providing battle-tested, consistent UI primitives. Enforces visual consistency across projects and eliminates the cognitive overhead of rebuilding foundational elements for each new codebase.",
    futureEnhancements:
      "Storybook documentation for interactive component previews, a full accessibility audit with ARIA compliance, dark and light theme tokens baked into each component, and publishing to npm as an installable package.",
  },
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
