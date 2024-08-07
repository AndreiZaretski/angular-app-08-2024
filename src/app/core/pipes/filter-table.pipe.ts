import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FilterFormData } from '../models/form-data.interface';
import { UsersTableData } from '../models/users-table-data.interface';

@Pipe({
  name: 'filterTable',
  standalone: true,
  pure: false,
})
export class FilterTablePipe implements PipeTransform {
  transform(value: MatTableDataSource<UsersTableData>, arg: FilterFormData | null): MatTableDataSource<UsersTableData> {
    if (!arg) {
      return value;
    }
    const filteredData = [...value.data].filter(item => item.name.includes(arg.login) && item.email.includes(arg.email));

    const filteredDataSource = new MatTableDataSource(filteredData);
    return filteredDataSource;
  }
}
