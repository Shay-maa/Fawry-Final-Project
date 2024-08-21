import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Merchant } from '../../models/merchant';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-merchants',
  standalone: true,
  imports: [SidebarComponent,
    NgFor,
  ],
  templateUrl: './merchants.component.html',
  styleUrl: './merchants.component.css'
})
export class MerchantsComponent {

    merchants: Merchant[] = [
      {
        fname: 'John',
        lname: 'Doe',
        business_name: 'John’s Bakery',
        email: 'john@example.com',
        phone_number: '123-456-7890',
      },
      {
        fname: 'Jane',
        lname: 'Smith',
        business_name: 'Jane’s Flowers',
        email: 'jane@example.com',
        phone_number: '987-654-3210',
      },
      {
        fname: 'Alice',
        lname: 'Johnson',
        business_name: 'Alice’s Cafe',
        email: 'alice@example.com',
        phone_number: '555-555-5555',
      }
      // Add more vendor objects as needed
    ];
  }


