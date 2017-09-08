import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'empname' })

export class EmployeeNamePipe implements PipeTransform {

  transform(empList: any, searchText: any): any {
    if (searchText == null) {
        return empList;
    }
    return empList.filter(function(emp){
      return emp.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }
}
