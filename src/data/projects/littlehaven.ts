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
  description:
    'Little Haven is a production-grade management system for daycare centers, built full-stack from scratch. The backend is a layered Express/TypeScript API — routes handle HTTP, middleware enforces auth and permissions, service files contain business logic. Three user roles (Admin, Educator, Parent) are enforced at the middleware layer using JWT tokens and bcrypt password hashing. The React frontend uses React Router v7 with protected routes and Axios for API calls.',
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
