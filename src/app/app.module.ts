import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list.component';

import { EmployeeService } from './employee/services/employee.service';
import { EmployeeNamePipe } from './employee/pipes/employee-name.pipe';

import {ToastModule, ToastsManager} from 'ng2-toastr/ng2-toastr';

@NgModule({
  declarations: [
    AppComponent, EmployeeListComponent, EmployeeNamePipe
  ],
  imports: [
    BrowserModule, FormsModule, ToastModule.forRoot(), BrowserAnimationsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
