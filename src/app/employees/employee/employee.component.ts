import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { EmployeeServicesService } from 'src/app/employee-services.service';
import { bundles, employee, receivedPackets } from 'src/app/employee.model';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private service:EmployeeServicesService) {}
//empl = this.employee;
employees?:employee;
employee?:receivedPackets;
assignedBundle!: bundles[];
showBundles:any =[];
viewMore =  false;

  ngOnInit(): void {
    this.employees = this.service.ELEMENT_DATA.find(({am})=> am === parseInt(this.route.snapshot.params['id']));
    this.employee = this.service.EmployeeReceivedPackets.find(({am})=> am === parseInt(this.route.snapshot.params['id']));
    //this.datasource=this.employee;
   //this.dataSource= this.employee;
    // this.employees = {
    //   am: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name'],
    //   surname: this.route.snapshot.params['surname'],
    //   brandCode: this.route.snapshot.params['brandCode'],
    //   brandName: this.route.snapshot.params['brandName'],
    //   quantity: this.route.snapshot.params['quantity']      
    // };
    // this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.employees.am = params['id'];
    //     this.employees.name = params['name'];
    //     this.employees.surname = params['surname'];
    //     this.employees.am = params['id'];
    //     this.employees.am = params['id'];
    //   }
    // );
  }
viewEmployee(){
  console.log(this.employees);
}
viewAssigned(rowId:number){
this.viewMore=true;
this.assignedBundle = this.service.assignedBundlesToEmployee;
console.log(this.assignedBundle);
}

}
