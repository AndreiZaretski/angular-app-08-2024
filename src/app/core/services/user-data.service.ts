import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { UsersTableData } from '../models/users-table-data.interface';
import { mergeUserData } from '../utils/mergeUersData';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private readonly httpService = inject(HttpService);

  private userTableData$ = new BehaviorSubject<UsersTableData[] | null>(null);

  userTableDataPublic$ = this.userTableData$.pipe();

  getTableUserData(): Observable<void> {
    return this.httpService.getUsers().pipe(
      map(result => mergeUserData(result)),
      map(result => this.userTableData$.next(result)),
    );
  }

  changeStatus(id: number) {
    const data = this.userTableData$.getValue();

    if (data) {
      const updatedData = data.map(user => {
        if (user.table_id === id) {
          return { ...user, status: user.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE' };
        }
        return user;
      });

      this.userTableData$.next(updatedData);
    }
  }
}
