import { Component } from '@angular/core';
import { ApplicationDto } from '../../Models/application-dto';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../Services/job.service';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrl: './apply-form.component.css'
})
export class ApplyFormComponent {

  application:ApplicationDto={name:'',email:'',jobId:0,resume:null!};
  
  constructor(private JobService:JobService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.application.jobId= + this.route.snapshot.paramMap.get('id')!;
  }
  onFileSelect(event: any): void {
    this.application.resume = event.target.files[0];
  }

  onSubmit(): void {
    this.JobService.submitApplication(this.application).subscribe((data) => {
      alert('Application submitted successfully!');
    })

}

}