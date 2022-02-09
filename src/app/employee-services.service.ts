import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { bundles, employee, receivedPackets } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServicesService {
  EmployeeReceivedPackets: receivedPackets[] = [
    {
      dateReceived: new Date(2021, 4, 4, 15, 23, 42, 11),
      am: 1611,
      brandCode: 4.0026,
      brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)",
      quantity: 31,
    },
  ];
  assignedBundlesToEmployee: bundles[] = [
    {
      bundle:[{
        code: '0105201333666993215XPECGFWEB17',
          packets: [
            'LEGR1nsA&KeTpi',
            'LEGR1nsA&KeTpi',
            'LEGR1nsA&KeTpi',
            'LEGR1nsA&KeTpi',
            'LEGR1nsA&KeTpi',
            'LEGR1nsA&KeTpi',
            'LEGR1nsA&KeTpi',
            'LEGR1nsA&KeTpi',
            'LEGR1nsA&KeTpi',
            'LEGR1nsA&KeTpi',
          ]
        },
        {
          code: '0105201333666993215XPECGFWEB18',
            packets: [
              'LEGR1nsA&KeTpi2',
              'LEGR1nsA&KeTpi2',
              'LEGR1nsA&KeTpi2',
              'LEGR1nsA&KeTpi2',
              'LEGR1nsA&KeTpi2',
              'LEGR1nsA&KeTpi2',
              'LEGR1nsA&KeTpi2',
              'LEGR1nsA&KeTpi2',
              'LEGR1nsA&KeTpi2',
              'LEGR1nsA&KeTpi2',
            ]
          },
          {
            code: '0105201333666993215XPECGFWEB19',
              packets: [
                'LEGR1nsA&KeTpi3',
                'LEGR1nsA&KeTpi3',
                'LEGR1nsA&KeTpi3',
                'LEGR1nsA&KeTpi3',
                'LEGR1nsA&KeTpi3',
                'LEGR1nsA&KeTpi3',
                'LEGR1nsA&KeTpi3',
                'LEGR1nsA&KeTpi3',
                'LEGR1nsA&KeTpi3',
                'LEGR1nsA&KeTpi3',
              ]
            }
          ],          
      packetsOnly:['LEGR1nsA&KeTpi4'],
      am: 1611,
    }
  ];

  ELEMENT_DATA: employee[] = [
    {
      am: 1571,
      name: 'ΠΑΝΑΓΙΩΤΑ',
      surname: 'ΝΤΑΚΟΥΡΗ',
      brandCode: 1.0079,
      brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)",
      quantity: 31,
    },
    {
      am: 1611,
      name: 'ΠΑΝΑΓΙΩΤΗΣ',
      surname: 'ΜΠΟΥΣΟΥΝΗΣ',
      brandCode: 4.0026,
      brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)",
      quantity: 31,
    },
    {
      am: 1617,
      name: 'ΔΗΜΗΤΡΙΟΣ',
      surname: 'ΑΝΑΣΤΑΣΟΠΟΥΛΟΣ',
      brandCode: 6.941,
      brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)",
      quantity: 31,
    },
    {
      am: 1618,
      name: 'ΧΡΗΣΤΟΣ',
      surname: 'ΜΙΧΑΛΟΠΟΥΛΟΣ',
      brandCode: 9.0122,
      brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)",
      quantity: 31,
    },
    {
      am: 1619,
      name: 'ΜΙΧΑΗΛ',
      surname: 'ΑΝΤΩΝΟΠΟΥΛΟΣ',
      brandCode: 10.811,
      brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)",
      quantity: 31,
    },
    {
      am: 1625,
      name: 'ΔΗΜΗΤΡΙΟΣ',
      surname: 'ΞΕΝΟΓΙΑΝΝΗΣ',
      brandCode: 12.0107,
      brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)",
      quantity: 31,
    },
    {
      am: 1626,
      name: 'ΚΩΝ/ΝΟΣ',
      surname: 'ΜΗΤΡΟΠΟΥΛΟΣ',
      brandCode: 14.0067,
      brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)",
      quantity: 31,
    },
    {
      am: 1633,
      name: 'ΑΝΔΡΕΑΣ',
      surname: 'ΠΑΛΑΜΑΡΑΣ',
      brandCode: 15.9994,
      brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)",
      quantity: 31,
    },
    {
      am: 1663,
      name: 'ΙΩΑΝΝΗΣ',
      surname: 'ΜΑΡΜΑΡΑΣ',
      brandCode: 18.9984,
      brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)",
      quantity: 31,
    },
    {
      am: 1664,
      name: 'ΓΕΩΡΓΙΟΣ',
      surname: 'ΜΑΝΟΥΣΟΠΟΥΛΟΣ',
      brandCode: 20.1797,
      brandName: "KARELIA BLUE 20'S (ΠΡΟΣ/ΚΟΥ)",
      quantity: 31,
    },
  ];
  constructor() {}

  getEmployees() {
    return this.ELEMENT_DATA;
  }
}
