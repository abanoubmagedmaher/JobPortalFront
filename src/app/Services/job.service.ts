import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../Models/job';
import { Observable } from 'rxjs';
import { ApplicationDto } from '../Models/application-dto';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private baseUrl='http://localhost:5127/api'

  constructor(private http:HttpClient) { }

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
  //#endregion
}

