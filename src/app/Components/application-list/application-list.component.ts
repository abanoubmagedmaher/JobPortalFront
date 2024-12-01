import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApplicationService } from '../../Services/application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.css'
})
export class ApplicationListComponent implements OnInit {
  applications:any[]=[]

  constructor(
    private toaster:ToastrService,
    private router:Router,
    private applicationservice:ApplicationService
    ){}
  
  ngOnInit(): void {
    this.loadApplications();  
  }

  loadApplications(){
    this.applicationservice.getAllApplications().subscribe({
      next: (data) => {
        this.applications = data;
      },
      error: (error) => {
        console.error('Error fetching applications:', error);
      }
    });
  }

  getResumeUrl(path: string): string {
    return path.replace('D:\\', '/assets/');
  }

  viewDetails(application: any): void {
    console.log('Application Details:', application);
  }
  
}