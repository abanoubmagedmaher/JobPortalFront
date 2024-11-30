import { Component } from '@angular/core';
import { Job } from '../../Models/job';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../Services/job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent {
  job!:Job
  constructor(private route:ActivatedRoute,private jobService:JobService) { }
  ngOnInit(): void {
    const jobId= + this.route.snapshot.paramMap.get('id')!;
    this.jobService.getJobById(jobId).subscribe((data)=>{
      this.job=data;
    })
  }
}
