import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from './employee.model';
import { EmployeeService } from './employee.service';
@Pipe({ name: 'empname' })

export class EmployeeNamePipe implements PipeTransform {

  employeeList: Array<IEmployee>;
  constructor(public empService: EmployeeService) {
  }
  transform(empList: Array<IEmployee>, searchText: string): Array<IEmployee> {
    if (searchText == null) {
        return empList;
    }
    empList = this.empService.list;
    return empList.filter(function(emp){
      return emp.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }
}
