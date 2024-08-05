import { Routes } from '@angular/router';
import { ROUTES_PATHS } from './core/constants/appRoutes';
import { MainPageComponent } from './features/main/pages/main-page/main-page.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: ROUTES_PATHS.MAIN, component: MainPageComponent },
  {
    path: ROUTES_PATHS.SUPERAGENT,
    loadComponent: () =>
      import('./features/superAgent/pages/super-agent-page/super-agent-page.component').then(m => m.SuperAgentPageComponent),
  },
  {
    path: ROUTES_PATHS.MANAGEMENT,
    loadChildren: () => import('./features/management/pages/management-page/management-page.routes').then(m => m.managementRoutes),
  },
  {
    path: ROUTES_PATHS.SUBAGENT,
    loadComponent: () =>
      import('./features/subAgent/pages/sub-agent-page/sub-agent-page.component').then(m => m.SubAgentPageComponent),
  },
  { path: ROUTES_PATHS.NOTFOUND, component: NotFoundPageComponent },
];
