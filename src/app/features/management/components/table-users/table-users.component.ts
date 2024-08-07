import { ChangeDetectionStrategy, Component, inject, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { UserDataService } from 'src/app/core/services/user-data.service';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe, DatePipe, NgStyle } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { IconService } from 'src/app/core/services/icon.service';
import { CHECK_FALSE, CHECK_TRUE } from 'src/app/core/constants/icons';
import { MatIconModule } from '@angular/material/icon';
import { Subject, takeUntil } from 'rxjs';
import { UsersTableData } from 'src/app/core/models/users-table-data.interface';

@Component({
  selector: 'app-table-users',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    AsyncPipe,
    DatePipe,
    NgStyle,
    MatCheckboxModule,
    MatIconModule,
  ],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableUsersComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['login', 'email', 'phone', 'roles', 'update_at', 'create_at', 'status', 'is_ecp'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  private userDataService = inject(UserDataService);

  dataSource = new MatTableDataSource<UsersTableData>([]);

  selection = new SelectionModel<UsersTableData>(true, []);

  private paginatorIntl = inject(MatPaginatorIntl);

  private readonly iconService = inject(IconService);

  private destroy$ = new Subject();

  ngOnInit() {
    this.iconService.add('succes', CHECK_TRUE);
    this.iconService.add('unsucces', CHECK_FALSE);

    this.userDataService.userTableDataPublic$.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.dataSource.data = data || [];
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginatorIntl.itemsPerPageLabel = 'Отображать';
    this.paginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      if (length === 0 || pageSize === 0) {
        return `0 из ${length}`;
      }
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} из ${length}`;
    };
    this.paginatorIntl.changes.next();
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  updateStatus(id: number) {
    this.userDataService.changeStatus(id);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: UsersTableData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }
}
