import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterFormData } from '../models/form-data.interface';

@Injectable({
  providedIn: 'root',
})
export class FilterFormDataService {
  private formData$ = new BehaviorSubject<FilterFormData | null>(null);

  formDataPublic$ = this.formData$.pipe();

  changeValue(data: FilterFormData) {
    this.formData$.next(data);
  }
}
