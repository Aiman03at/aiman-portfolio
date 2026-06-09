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
  overview: {
    problem:
      "Job seekers are bombarded with scam postings — vague descriptions, fake companies, payment-request traps — making it hard to know which opportunities are legitimate. Every wasted application costs time, and falling for a scam can cost real money.",
    solution:
      "SafeHire is a three-mode AI tool built on the Claude API. Mode A analyzes any job posting across 8 risk signals (salary transparency, payment requests, company verifiability, contact methods) and returns a 0–100 legitimacy score in about 3 seconds. Mode B finds real remote jobs matching your skills by searching Greenhouse, Lever, and LinkedIn live — no stale databases. Mode C is a recruiter audit: paste a draft posting, get an 8-dimension quality review, then hit AI Rewrite and Claude rewrites the entire thing.",
    impact:
      "Placed 2nd at the Scale Without Borders AI Hackathon 2026 among 100+ builders. The tool is live and publicly accessible — real users can paste any job posting and get an instant scam score with actionable red flag breakdowns.",
    futureEnhancements:
      "Company verification via public APIs (LinkedIn, Companies House), a browser extension to analyze postings in-place without copy-pasting, email digest of curated remote jobs, and user accounts for saving and tracking applications.",
  },
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
