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
    'Real-time supply chain management platform with WebSocket inventory tracking, AI-driven demand forecasting, and a full CI/CD pipeline.',
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
  overview: {
    problem:
      "Supply chain teams lack real-time visibility into inventory levels and rely on manual, batch-process updates — meaning stockouts and overstock situations aren't caught until the damage is done. Fragmented tooling across spreadsheets and disconnected systems makes the problem worse.",
    solution:
      "A microservices platform with four independently deployed services: a React dashboard, a Node/Express REST API with Socket.io for real-time inventory events, a PostgreSQL database, and a Python FastAPI ML service for demand forecasting and anomaly detection. All four services run locally with a single docker compose up. In production, backend and ML service deploy to Railway, frontend to Vercel — all triggered automatically on merge to master.",
    impact:
      "Full CI/CD pipeline — GitHub Actions runs Node, React, and Python ML unit tests on every PR. On merge to master, Docker builds, pushes to Docker Hub, and deploys to Railway and Vercel automatically. Demonstrates production-grade microservices architecture with real-time event broadcasting and ML-backed forecasting.",
    futureEnhancements:
      "Multi-warehouse support with location-aware inventory tracking, a supplier portal for purchase order management, SMS and email alerting on anomaly detection triggers, and integration with real freight and logistics APIs.",
  },
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
