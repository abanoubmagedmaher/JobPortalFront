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


  
  // submitApplication(application: ApplicationDto): Observable<any> {
  //   const formData = new FormData();
    
  //   // Append form fields to FormData
  //   formData.append('name', application.name);
  //   formData.append('email', application.email);
  //   formData.append('jobId', application.jobId.toString());  // Ensure the jobId is a string
  //   formData.append('resume', application.resume, application.resume.name);  // Add the resume file
    
  //   // Send the POST request to the backend
  //   return this.http.post('http://localhost:5127/api/application/SubmitApplication', formData, {
  //     headers: new HttpHeaders({
  //       'Authorization': `Bearer ${this.authService.getToken()}`  // Add the authorization header with the token
  //     })
  //   }).pipe(
  //     catchError((error) => {
  //       // Log the error for debugging
  //       console.error('Error occurred while submitting application:', error);
  //       return throwError(() => new Error(error));  // Return the error to be handled by the caller
  //     })
  //   );
  // }
  


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

