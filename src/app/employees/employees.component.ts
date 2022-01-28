import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  surname: string;
  am: number;
  brandCode: number;
  brandName: string;
  quantity: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {am: 1571, name: 'ΠΑΝΑΓΙΩΤΑ', surname:'ΝΤΑΚΟΥΡΗ', brandCode: 1.0079, brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)", quantity:31},
  {am: 1611, name: 'ΠΑΝΑΓΙΩΤΗΣ', surname:'ΜΠΟΥΣΟΥΝΗΣ', brandCode: 4.0026, brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)", quantity:31},
  {am: 1617, name: 'ΔΗΜΗΤΡΙΟΣ', surname:'ΑΝΑΣΤΑΣΟΠΟΥΛΟΣ', brandCode: 6.941, brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)", quantity:31},
  {am: 1618, name: 'ΧΡΗΣΤΟΣ', surname:'ΜΙΧΑΛΟΠΟΥΛΟΣ', brandCode: 9.0122, brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)", quantity:31},
  {am: 1619, name: 'ΜΙΧΑΗΛ', surname:'ΑΝΤΩΝΟΠΟΥΛΟΣ', brandCode: 10.811, brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)",quantity:31},
  {am: 1625, name: 'ΔΗΜΗΤΡΙΟΣ', surname:'ΞΕΝΟΓΙΑΝΝΗΣ', brandCode: 12.0107, brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)",quantity:31},
  {am: 1626, name: 'ΚΩΝ/ΝΟΣ', surname:'ΜΗΤΡΟΠΟΥΛΟΣ', brandCode: 14.0067, brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)",quantity:31},
  {am: 1633, name: 'ΑΝΔΡΕΑΣ', surname:'ΠΑΛΑΜΑΡΑΣ', brandCode: 15.9994, brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)",quantity:31},
  {am: 1663, name: 'ΙΩΑΝΝΗΣ', surname:'ΜΑΡΜΑΡΑΣ', brandCode: 18.9984, brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)",quantity:31},
  {am: 1664, name: 'ΓΕΩΡΓΙΟΣ', surname:'ΜΑΝΟΥΣΟΠΟΥΛΟΣ', brandCode: 20.1797, brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)", quantity:31},
];

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['Αρ. Μητρώου', 'Όνομα και Επώνυμο', 'Κωδ. Σήματος', 'Όνομα Σήματος', 'Ποσότητα'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
