import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list.component';

import { EmployeeService } from './employee/shared/employee.service';
import { EmployeeNamePipe } from './employee/shared/employee-name.pipe';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent, EmployeeListComponent, EmployeeNamePipe
  ],
  imports: [
    BrowserModule, FormsModule, ToastModule.forRoot(), BrowserAnimationsModule, Ng2SearchPipeModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
