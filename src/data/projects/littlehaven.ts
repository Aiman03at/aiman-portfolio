import type { Project } from './types';

const littlehaven: Project = {
  id: 'little-haven',
  number: '03 — FULL-STACK',
  badge: 'REST API · Auth · File Uploads',
  badgeColor: '#4ade80',
  badgeBorder: 'rgba(74,222,128,0.3)',
  badgeBackground: 'rgba(74,222,128,0.08)',
  name: 'Little Haven',
  tagline:
    'Full-stack daycare management system with child profiles, real-time attendance, meal tracking with photo uploads, health records, and role-based access for admins, educators, and parents.',
  tags: [
    { label: 'React 19', tone: 'blue' },
    { label: 'TypeScript', tone: 'blue' },
    { label: 'Node.js · Express', tone: 'green' },
    { label: 'PostgreSQL', tone: 'green' },
    { label: 'JWT · RBAC', tone: 'rose' },
    { label: 'Tailwind', tone: 'amber' },
  ],
  links: [
    { label: 'Live ↗', href: 'https://daycare-management-hn3m.vercel.app' },
    { label: 'GitHub ↗', href: 'https://github.com/Aiman03at/Daycare_Management' },
  ],
  overview: {
    problem:
      "Daycare centers track attendance, meals, health records, daily activities, and communications across multiple staff and parent roles — but most rely on paper forms or disconnected apps, leading to missed updates, data errors, and poor parent visibility into their child's day.",
    solution:
      "A full-stack management system with a layered Express/TypeScript API and three RBAC roles enforced at the middleware layer using JWT. Admin manages staff and enrollment; Educators log daily records, meals, and activities; Parents have read-only access to their child's data. React 19 frontend with protected routes, photo uploads via multer, and 10+ relational PostgreSQL tables covering the full operational lifecycle.",
    impact:
      "Live at daycare-management-hn3m.vercel.app. Covers enrollment, daily records, meals with photo uploads, health logs, and real-time attendance — all in one authenticated, role-gated system. Demonstrates production-grade RBAC, file handling, and full-stack TypeScript discipline.",
    futureEnhancements:
      "Real-time parent notifications via WebSocket when daily records are updated, a mobile-optimized PWA for on-the-go educator use, direct messaging between educators and parents, and a billing and invoice module for monthly fees.",
  },
  highlights: [
    {
      title: 'ROLE-BASED AUTH',
      body: "JWT authentication + three permission levels. Admin can manage staff; Educators manage daily records; Parents have read-only access to their child's data.",
    },
    {
      title: 'FILE UPLOADS',
      body: 'Photo uploads for children, activities, and meals — stored in /uploads with separate subdirectories per entity type. Handled via multer middleware.',
    },
    {
      title: 'DATA MODEL',
      body: 'Many-to-many between activities and children. Auto-creating tables on first server start for frictionless dev setup. 10+ relational tables in PostgreSQL.',
    },
    {
      title: 'SECURITY',
      body: 'bcryptjs password hashing, CORS origin restriction, server-side input validation, comprehensive error middleware with typed error responses.',
    },
  ],
  screenshots: [],
};

export default littlehaven;
