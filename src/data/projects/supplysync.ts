import type { Project } from './types';

const supplysync: Project = {
  id: 'supply-sync',
  number: '02 — ADVANCED',
  badge: 'Microservices · CI/CD · ML',
  badgeColor: '#a78bfa',
  badgeBorder: 'rgba(167,139,250,0.3)',
  badgeBackground: 'rgba(167,139,250,0.08)',
  name: 'SupplySync',
  tagline:
    'Real-time supply chain management platform with WebSocket inventory tracking, AI-driven demand forecasting, and a full CI/CD pipeline. Inspired by Kinaxis RapidResponse.',
  tags: [
    { label: 'React', tone: 'blue' },
    { label: 'Node.js', tone: 'green' },
    { label: 'Socket.io', tone: 'green' },
    { label: 'PostgreSQL', tone: 'blue' },
    { label: 'Python · FastAPI', tone: 'purple' },
    { label: 'Docker', tone: 'rose' },
    { label: 'GitHub Actions', tone: 'amber' },
  ],
  links: [{ label: 'GitHub ↗', href: 'https://github.com/Aiman03at/SupplySync' }],
  description:
    'SupplySync is a microservices platform with four independently deployed services: a React dashboard, a Node/Express REST API with Socket.io for real-time inventory events, a PostgreSQL database, and a Python FastAPI service handling demand forecasting and anomaly detection. All four services run locally with a single docker compose up command. In production, the backend and ML service deploy to Railway, the frontend to Vercel — all triggered automatically on merge to master.',
  highlights: [
    {
      title: 'REAL-TIME WEBSOCKETS',
      body: 'Socket.io broadcasts inventory change events to all connected clients instantly. Managed reconnect logic and deduplication of events on reconnect.',
    },
    {
      title: 'CI/CD PIPELINE',
      body: 'GitHub Actions runs Node tests, React tests, and Python ML unit tests on every PR. On merge to master: Docker build → push to Docker Hub → deploy to Railway + Vercel.',
    },
    {
      title: 'ML MICROSERVICE',
      body: "Python FastAPI service with demand forecasting and anomaly detection. Separated from Node backend to use Python's richer ML ecosystem (scikit-learn, pandas, numpy).",
    },
    {
      title: 'ARCHITECTURE',
      body: 'Feature branches → dev → master. Protected master branch. Conventional commit messages. Makefile shortcuts for common operations.',
    },
  ],
  screenshots: [],
};

export default supplysync;
