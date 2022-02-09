import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { EmployeeServicesService } from 'src/app/employee-services.service';
import { employee } from 'src/app/employee.model';

@Component({
  selector: 'app-register-packs',
  templateUrl: './register-packs.component.html',
  styleUrls: ['./register-packs.component.css']
})
export class RegisterPacksComponent implements OnInit {
  constructor(private router: Router, private service: EmployeeServicesService) { }
  employeeToedit!:employee;
  startAssign = false;

  displayedColumns: string[] = ['Αρ. Μητρώου', 'Όνομα και Επώνυμο'];
  dataSource = new MatTableDataSource(this.service.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  assignPacks(id:number){
    // startAssignment,
    // takethe(id)
    this.startAssign = true;
    console.log(id);
  }
  ngOnInit(): void {
  }

}
