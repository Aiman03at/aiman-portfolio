export type Project = {
  id: string;
  number: string;
  badge: string;
  badgeColor: string;
  badgeBorder: string;
  badgeBackground: string;
  name: string;
  tagline: string;
  tags: { label: string; tone: string }[];
  links: { label: string; href: string }[];
  overview: {
    problem: string;
    solution: string;
    impact: string;
    futureEnhancements: string;
  };
  highlights: { title: string; body: string }[];
  screenshots: string[];
};
