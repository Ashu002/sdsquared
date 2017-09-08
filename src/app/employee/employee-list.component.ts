import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {Observable} from 'rxjs/Rx';
import {IEmployee} from './shared/employee.model';

@Component({
  selector: 'app-emp-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(private empService: EmployeeService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  empList: Array<IEmployee> = this.empService.list;
  dispTimer: number = 10; // Variable used to display the timer
  joiningDateSorted: boolean = false; // Flag use to check wheater joining_date is already sorted or not
  iterator: number = 0; // This is for iteration i.e. which employee we have to insert

  // Function to perform the soring order for joining date
  sort(property) {
    if (!this.joiningDateSorted) {
      this.empList.sort(function(pre, next){
        if (pre[property] < next[property]) {
            return -1;
        }else if ( pre[property] > next[property]) {
            return 1;
        }else {
            return 0;
        }
      });
      this.joiningDateSorted = true;
      this.toastr.info(`Thanks, joining_date is in ascending order now.`);
    } else {
      this.toastr.warning(`Joining date is already in ascending order!!.`, 'Oops!!');
    }
  }

  // Fuction for inserting a new record in employee
  insertEmployee() {
    if (this.dispTimer === 1) {
      let newEmp: IEmployee;
      this.dispTimer = 5;
      newEmp = this.empList[this.iterator];
      newEmp.joining_date.setDate(newEmp.joining_date.getDate() + 1);
      newEmp.age = this.empService.reverseNum(newEmp.age);
      this.empList.push(newEmp);
      this.iterator++;
      this.joiningDateSorted = false; // A new record insterted, enabling again for sorting.
      this.empList.length === this.empService.maxEmployee ?
        this.toastr.info(`Done!!! Total ${this.iterator} employee has been added.`) :
        this.toastr.success(`New employee added (${this.iterator}).`, 'Success!');
    } else {
      this.dispTimer = this.dispTimer - 1;
    }
  }

  ngOnInit() {
    // Code for timer implementation
    let timer: any;
    timer = Observable.timer(1000, 1000);
    let subscription: any;
    subscription = timer.subscribe(tmr =>
      this.empList.length ===  this.empService.maxEmployee ? subscription.unsubscribe() : this.insertEmployee());
  }
}
