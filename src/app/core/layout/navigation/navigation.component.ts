import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { ROUTES_PATHS, AppRoutes } from '../../constants/appRoutes';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatIconModule, MatExpansionModule, MatButtonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  readonly panelOpenState = signal(false);

  readonly path = ROUTES_PATHS;

  private router = inject(Router);

  navigateTo(rout: AppRoutes) {
    this.router.navigateByUrl(rout);
  }
}
