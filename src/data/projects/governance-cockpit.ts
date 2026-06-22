import type { Project } from './types';

const governanceCockpit: Project = {
  id: 'governance-cockpit',
  number: '05',
  badge: 'B2B SaaS · AI Compliance',
  badgeColor: '#f59e0b',
  badgeBorder: 'rgba(245,158,11,0.3)',
  badgeBackground: 'rgba(245,158,11,0.08)',
  name: 'AI Governance Cockpit',
  tagline:
    'A B2B audit console that flags bias in AI-generated hiring decisions. Paste any AI output and get a real-time risk verdict backed by pgvector semantic search, protected-characteristic detection, and ISO 42001 control mapping.',
  tags: [
    { label: 'Next.js', tone: 'blue' },
    { label: 'TypeScript', tone: 'blue' },
    { label: 'OpenAI', tone: 'purple' },
    { label: 'PostgreSQL', tone: 'green' },
    { label: 'pgvector', tone: 'green' },
    { label: 'Prisma', tone: 'amber' },
  ],
  links: [
    { label: 'Live ↗', href: 'https://governance-cockpit.vercel.app/' },
    { label: 'GitHub ↗', href: 'https://github.com/Aiman03at/governance-cockpit' },
  ],
  overview: {
    problem:
      'Organisations deploying AI in recruitment have no easy way to audit outputs for discriminatory bias before they reach candidates. EU AI Act and ISO 42001 compliance requires demonstrable governance, but most teams rely on manual spot-checks that miss subtle proxy bias.',
    solution:
      'The AI Governance Cockpit is a real-time audit console. Paste any AI-generated hiring output — the system runs it through three detection layers: keyword matching against protected characteristics, proxy-bias phrase detection, and pgvector semantic similarity search against an embedded ISO 42001 control library. The result is a traffic-light risk verdict (FLAGGED / CLEAN) with a full evidence traceback showing exactly which controls triggered and why.',
    impact:
      'Detects both explicit bias ("too old") and subtle proxy bias ("family obligations", "digital native") that keyword-only systems miss. Semantic similarity search surfaces relevant ISO 42001 controls even when the wording doesn\'t match exactly, reducing false negatives.',
    futureEnhancements:
      'Batch audit mode for bulk AI outputs, webhook integration so organisations can wire it into their ATS pipeline, per-tenant dashboards with trend analytics, and PDF audit report generation for compliance evidence.',
  },
  highlights: [
    {
      title: 'SEMANTIC SEARCH',
      body: 'pgvector-powered similarity search embeds AI outputs and matches them against an ISO 42001 control library — catches bias that keyword matching misses.',
    },
    {
      title: 'PROXY BIAS DETECTION',
      body: 'Goes beyond protected characteristics to detect coded language ("culture fit", "digital native", "family obligations") that serves as a proxy for discrimination.',
    },
    {
      title: 'FULL TRACEBACK',
      body: 'Every flagged result includes an expandable evidence trail: which controls matched, similarity scores, and the specific phrases that triggered the flag.',
    },
    {
      title: 'FULL STACK',
      body: 'Next.js 16 + TypeScript frontend, PostgreSQL with pgvector on AWS RDS, Prisma ORM, OpenAI embeddings — production-grade architecture.',
    },
  ],
  screenshots: [
    '/Screeenshots/governance-cockpit/Screenshot 1.png',
    '/Screeenshots/governance-cockpit/Screenshot 2.png',
    '/Screeenshots/governance-cockpit/Screenshot 3.png',
    '/Screeenshots/governance-cockpit/Screenshot 4.png',
    '/Screeenshots/governance-cockpit/Screenshot 5.png',
  ],
};

export default governanceCockpit;
