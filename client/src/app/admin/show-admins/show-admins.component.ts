import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-show-admins',
  standalone: true,
  imports: [
    SidebarComponent,
    NgFor,
    FormsModule,

  ],
  templateUrl: './show-admins.component.html',
  styleUrl: './show-admins.component.css'
})
export class ShowAdminsComponent implements OnInit{

  
changeRole() {
throw new Error('Method not implemented.');
}
  constructor(private router:Router,private adminService:AdminService){}
  ngOnInit(): void {
      this.getAllAdmins()
  }

  selectedRole:  string = 'admin';
  selectedUser: any;

  admins: any[] = [];


  movetoCreateAdmin(){
this.router.navigate(['/create-admins'])
  }
getAllAdmins() {
  this.adminService.getAllUser().subscribe(
    (result: any) => {
      this.admins = result;
      console.log(result);
    },
    (error) => {
      console.error('Error fetching admin users', error);
    }
  );
}
deleteAdmin(adminId:string){
  this.adminService.deleteAdmin(adminId).subscribe(
    (result: any) => {
      this.getAllAdmins();

    },
    (error) => {
      console.error('Error fetching admin users', error);
    }
  );
}



}

