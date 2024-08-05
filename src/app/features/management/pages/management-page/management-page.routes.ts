import { Routes } from '@angular/router';
import { ROUTES_PATHS } from '../../../../core/constants/appRoutes';
import { ManagementPageComponent } from './management-page.component';

export const managementRoutes: Routes = [{ path: ROUTES_PATHS.EMPTY, component: ManagementPageComponent }];
