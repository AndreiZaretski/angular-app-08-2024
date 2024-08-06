import { ChangeDetectionStrategy, Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UserDataService } from 'src/app/core/services/user-data.service';
import { TableUsersComponent } from '../../components/table-users/table-users.component';

@Component({
  selector: 'app-management-page',
  standalone: true,
  imports: [TableUsersComponent],
  templateUrl: './management-page.component.html',
  styleUrl: './management-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementPageComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();

  userDataService = inject(UserDataService);

  ngOnInit() {
    this.userDataService.getTableUserData().pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
