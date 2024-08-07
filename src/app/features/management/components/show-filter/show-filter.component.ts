import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FilterFormComponent } from '../filter-form/filter-form.component';

@Component({
  selector: 'app-show-filter',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, FilterFormComponent],
  templateUrl: './show-filter.component.html',
  styleUrl: './show-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowFilterComponent {
  isFormShow = signal(false);

  toggleFilter() {
    this.isFormShow.update(value => !value);
  }

  closeForm(event: boolean) {
    this.isFormShow.set(event);
  }
}
