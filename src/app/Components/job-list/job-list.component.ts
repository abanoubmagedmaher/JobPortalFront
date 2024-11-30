import { Component, OnInit } from '@angular/core';
import { Job } from '../../Models/job';
import { JobService } from '../../Services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {
  jobs:Job[]=[];

  constructor(private _JobService:JobService) { }

ngOnInit(): void {
  this._JobService.getJobs().subscribe((data) =>{
    this.jobs=data;
  })
}

}
