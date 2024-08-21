import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-show-all-users',
  standalone: true,
  imports: [
    SidebarComponent,
    NgFor
  ],
  templateUrl: './show-all-users.component.html',
  styleUrl: './show-all-users.component.css'
})
export class ShowAllUsersComponent {
  users: any[] = [
    {
      fname: 'John',
      lname: 'Doe',
      gender: 'Male',
      email: 'john@example.com',
      phone_number: '123-456-7890'
    },
    {
      fname: 'Jane',
      lname: 'Smith',
      gender: 'Female',
      email: 'jane@example.com',
      phone_number: '987-654-3210'
    },
    {
      fname: 'Alice',
      lname: 'Johnson',
      gender: 'Female',
      email: 'alice@example.com',
      phone_number: '555-555-5555'
    }
    // Add more user objects as needed
  ];

}
