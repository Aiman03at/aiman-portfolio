import type { Project } from './types';

const safehire: Project = {
  id: 'safe-hire',
  number: '01 — FEATURED',
  badge: '🏆 Hackathon · Scale Without Borders 2026',
  badgeColor: '#f59e0b',
  badgeBorder: 'rgba(245,158,11,0.3)',
  badgeBackground: 'rgba(245,158,11,0.08)',
  name: 'SafeHire',
  tagline:
    'AI-powered job scam detector and remote job finder. Paste any job posting and get a legitimacy score, red flag analysis, and live job matches — built with the Claude API.',
  tags: [
    { label: 'React', tone: 'blue' },
    { label: 'TypeScript', tone: 'blue' },
    { label: 'Claude API', tone: 'purple' },
    { label: 'Vite', tone: 'green' },
    { label: 'Vercel', tone: 'amber' },
  ],
  links: [
    { label: 'Live ↗', href: 'https://safe-hire-delta.vercel.app' },
    { label: 'GitHub ↗', href: 'https://github.com/Aiman03at/safe-hire' },
  ],
  description:
    "I built SafeHire because I experienced job scam fatigue firsthand — vague postings, wasted applications, companies with no real presence. SafeHire is a three-mode AI tool that solves this. Mode A analyzes any job posting across 8 risk signals (salary transparency, payment requests, company verifiability, contact methods) and returns a 0–100 legitimacy score in about 3 seconds. Mode B finds real remote jobs matching your skills by searching Greenhouse, Lever, and LinkedIn live — no stale databases. Mode C is a recruiter audit tool: paste a job posting before it goes live, get an 8-dimension quality audit, then hit AI Rewrite and Claude rewrites the entire thing.",
  highlights: [
    {
      title: 'PROMPT ENGINEERING',
      body: 'Structured JSON output across 3 different AI modes — iterated system prompts with concrete examples to guarantee consistent parsing.',
    },
    {
      title: 'PRODUCTION DEPLOY',
      body: "Vite dev proxy doesn't carry to Vercel — built a serverless proxy function at api/proxy.ts to handle CORS in production.",
    },
    {
      title: 'LIVE JOB SEARCH',
      body: "Uses Claude's web search tool to query job boards in real time. Prompt tuning was critical to avoid stale aggregator links.",
    },
    {
      title: 'FULL STACK',
      body: 'React + TypeScript frontend, Vercel serverless backend, Claude API — deployed and live.',
    },
  ],
  screenshots: [
    '/Screeenshots/safehire/Screenshot 1.png',
    '/Screeenshots/safehire/Screenshot 2.png',
    '/Screeenshots/safehire/Screenshot 3.png',
    '/Screeenshots/safehire/Screenshot 4.png',
  ],
};

export default safehire;
