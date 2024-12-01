import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  baseApi='http://localhost:5127/api/Application'
  constructor(private http:HttpClient) { }
  getAllApplications():Observable<any>{
    return this.http.get(`${this.baseApi}/getAll`);
  }
  getApplicationById(id: number): Observable<any> {
    return this.http.get(`${this.baseApi}/getApplicationById/${id}`);
  }
}
