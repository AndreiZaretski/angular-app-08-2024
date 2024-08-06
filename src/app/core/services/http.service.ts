import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { UsersData } from '../models/users-data';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  http = inject(HttpClient);

  getUsers(): Observable<UsersData> {
    return this.http.get<UsersData>('').pipe(catchError(() => EMPTY));
  }
}
