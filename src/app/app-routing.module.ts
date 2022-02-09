import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { RegisterPacksComponent } from './employees/register-packs/register-packs.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'employee/registration',
    component: RegisterPacksComponent,
  },
  {
    path: 'employee/:id',
    component: EmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
