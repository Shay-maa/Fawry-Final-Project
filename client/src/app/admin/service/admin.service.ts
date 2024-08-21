import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8090/users/admin/';

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<any> {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYmRlbGFhbEBnbWFpbC5jb20iLCJpYXQiOjE3MjQxNTQ2MzUsImV4cCI6MTcyNDE4OTE5NX0.AfH9DBW180dk7QTs5z9GeK5BihZGFLacWoTmpYGbIPY';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.apiUrl}?role=ADMIN`, { headers });
  }
  createAdmin(adminData: any): Observable<any> {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYmRlbGFhbEBnbWFpbC5jb20iLCJpYXQiOjE3MjQxNTQ2MzUsImV4cCI6MTcyNDE4OTE5NX0.AfH9DBW180dk7QTs5z9GeK5BihZGFLacWoTmpYGbIPY';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.apiUrl, adminData, { headers });
  }
  deleteAdmin(adminId:string){
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYmRlbGFhbEBnbWFpbC5jb20iLCJpYXQiOjE3MjQxNjMzODYsImV4cCI6MTcyNDE5Nzk0Nn0.iW1lyK880f4Se7An-lN-DyHemKWIt5fAaRNNaPRDRHk';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(this.apiUrl+`${adminId}`, { headers });
  }
}
