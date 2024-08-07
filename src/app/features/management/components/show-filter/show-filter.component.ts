import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FilterFormComponent } from '../filter-form/filter-form.component';

@Component({
  selector: 'app-show-filter',
  standalone: true,
  imports: [CdkAccordionModule, MatButtonModule, MatIconModule, FilterFormComponent],
  templateUrl: './show-filter.component.html',
  styleUrl: './show-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowFilterComponent {}
