// Central source of truth for public route paths
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROGRAMS: '/programs',
  MEMBERSHIP: '/membership',
  RITUAL_PHILOSOPHY: '/ritual-philosophy',
  APPLY: '/apply',
  ADMIN_APPLICATIONS: '/admin/applications',
} as const;

// Public navigation items (excludes admin routes)
export const PUBLIC_NAV_ITEMS = [
  { label: 'HOME', path: ROUTES.HOME },
  { label: 'ABOUT', path: ROUTES.ABOUT },
  { label: 'PROGRAMS', path: ROUTES.PROGRAMS },
  { label: 'MEMBERSHIP', path: ROUTES.MEMBERSHIP },
  { label: 'RITUAL PHILOSOPHY', path: ROUTES.RITUAL_PHILOSOPHY },
] as const;
