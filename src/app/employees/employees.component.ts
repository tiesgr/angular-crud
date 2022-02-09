import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeeServicesService } from '../employee-services.service';
import { employee } from '../employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {  
  constructor(private router: Router, private service: EmployeeServicesService) { }
  employeeToedit!:employee;
  ngOnInit(): void {
  }

  displayedColumns: string[] = ['Αρ. Μητρώου', 'Όνομα και Επώνυμο', 'Κωδ. Σήματος', 'Όνομα Σήματος', 'Ποσότητα'];
  dataSource = new MatTableDataSource(this.service.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  editContact(employee:employee) {
    let route = '/employee/'+ employee.am;
    this.router.navigate([route]);
    this.employeeToedit;
    this.employeeToedit = employee;
  }
}
