import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../Models/job';
import { catchError, Observable, throwError } from 'rxjs';
import { ApplicationDto } from '../Models/application-dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private baseUrl='http://localhost:5127/api'

  constructor(private http:HttpClient,private router:Router,private authService:AuthService) { }



  IsToken:any;
  gettoken:any;
  head:any;
  JWT_TOKEN="eToken";
  //JWT_TOKEN1='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJUZXN0QGdtYWlsLmNvbSIsImp0aSI6ImY5NTlhYjRjLWIwZjYtNGRiZS1hZWZjLTA2ZGUwODZmNzEwNSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNjViNmU5ZWYtYjZkYi00NmFkLWE5OWQtODIwZmYxZDdlNWFlIiwiZXhwIjoxNzMzMjQwMzYzLCJpc3MiOiJZb3VySXNzdWVyIiwiYXVkIjoiWW91ckF1ZGllbmNlIn0.Yl2tquDnd1O4luph9_Op61q0-Cl8-2PR3S_3mcjJwf0'
  
  getJwtToken(): string {
    const token = localStorage.getItem(this.JWT_TOKEN);
    console.log('JWT Token:', token); 
    return token || ''; 
}

getHeaders(): HttpHeaders {
  let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
  });

  const token = this.getJwtToken();
  if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
  }

  console.log('Headers:', headers.keys()); 
  return headers;
}



  getOptions(){
    return { headers: this.getHeaders()};
  }


  //#region Job
  getJobs():Observable<any>{
    return this.http.get<any>(`http://localhost:5127/api/Job`)
  }

  getJobById(id:number):Observable<Job>{
    return this.http.get<Job>(`${this.baseUrl}/Job/${id}`)
  }

  submitApplication(application : ApplicationDto):Observable<any>
  {
    const formData= new FormData();
    formData.append('name',application.name);
    formData.append('email',application.email);
    formData.append('jobId',application.jobId.toString());
    formData.append('resume', application.resume);

    return this.http.post(`${this.baseUrl}/application`,formData)
  }


  
  SubmitApplicationAuth(application: ApplicationDto): Observable<any> { 
    const formData = new FormData();

    formData.append('name', application.name);
    formData.append('email', application.email);
    formData.append('jobId', application.jobId.toString());
    formData.append('resume', application.resume, application.resume.name);

    const options = {
        headers: this.getHeaders(),
        observe: 'response' as const,
    };

    console.log('Request Options:', options);

    return this.http.post(`${this.baseUrl}/application/SubmitApplicationAuth`, formData, options);
}


  addjob(job:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/Job/addJob`,job,{
      headers: { 'Content-Type': 'application/json' }
    })
  }
  //#endregion
}

function isTokenExpired(token: string) {
  throw new Error('Function not implemented.');
}

