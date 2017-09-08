import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeNamePipe } from './employee/pipes/employee-name.pipe';
import { EmployeeService } from './employee/services/employee.service';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, EmployeeListComponent, EmployeeNamePipe
      ],
      imports: [
        FormsModule, ToastModule.forRoot()
      ],
      providers: [
        EmployeeService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Employee List'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Employee List');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Employee List!');
  }));
});
