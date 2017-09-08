import {Injectable} from '@angular/core';
import {IEmployee} from '../shared/employee.model';

@Injectable()
export class EmployeeService {
    maxEmployee: number = 8;
    list: Array<IEmployee> = [
        {
            name: 'Jon', joining_date: new Date('10/23/2015'), age: 23
        },
        {
            name: 'Viki', joining_date : new Date('01/24/2015'), age: 20
        },
        {
            name: 'Abc', joining_date: new Date('10/25/2015'), age: 43
        },
        {
            name: 'XYZ', joining_date: new Date('10/28/2015'), age: 21
        }
    ];

    // This function is for reversing two numbers
      reverseNum(num: number) {
        let resNum: number = 0, mod: number;
        while (num > 0) {
          mod = num % 10;
          num = Math.floor(num / 10);
          resNum = resNum * 10 + mod;
        }
        return resNum;
      }
}
