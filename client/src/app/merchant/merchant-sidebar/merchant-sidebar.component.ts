import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-merchant-sidebar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './merchant-sidebar.component.html',
  styleUrl: './merchant-sidebar.component.css'
})
export class MerchantSidebarComponent {

}
