import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employees/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    SidenavComponent,
    HeaderComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
