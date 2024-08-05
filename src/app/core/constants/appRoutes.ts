export const ROUTES_PATHS = {
  EMPTY: '',
  MAIN: '',
  MANAGEMENT: 'management',
  SUPERAGENT: 'super-agent',
  SUBAGENT: 'sub-agent',
  NOTFOUND: '**',
} as const;

export type AppRoutes = (typeof ROUTES_PATHS)[keyof typeof ROUTES_PATHS];
