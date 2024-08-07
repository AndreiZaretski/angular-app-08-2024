import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FilterFormDataService } from 'src/app/core/services/filter-form-data.service';
import { FilterFormData } from 'src/app/core/models/form-data.interface';

@Component({
  selector: 'app-filter-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    NgxMaskDirective,
    MatDatepickerModule,
    MatSelectModule,
  ],
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline', floatLabel: 'always' } },
    provideNgxMask(),
    provideNativeDateAdapter(),
  ],
})
export class FilterFormComponent {
  protected closeForm = output<boolean>();

  private fb = inject(FormBuilder);

  private filterFormDataService = inject(FilterFormDataService);

  statuses = [
    { value: 'ACTIVE', name: 'Активен' },
    { value: 'INACTIVE', name: 'Заблокирован' },
  ];

  roles = ['Пользователь', 'Админ'];

  filterForm = this.fb.nonNullable.group({
    login: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.pattern(/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/)]],
    create_at: ['', [Validators.required]],
    status: ['ACTIVE', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    role: [this.roles[0], [Validators.required]],
    update_at: ['', [Validators.required]],
  });

  resetForm() {
    this.filterForm.reset();
  }

  resetCloseForm() {
    this.filterForm.reset();
    this.closeForm.emit(false);
  }

  submit() {
    if (this.filterForm.valid) {
      this.filterFormDataService.changeValue(this.filterForm.value as FilterFormData);
    }
  }
}
