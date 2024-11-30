import { JobService } from './../../Services/job.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.css'
})
export class AddJobComponent {
  jobForm!: FormGroup;

  constructor(private fb:FormBuilder,private JobService:JobService){
    this.jobForm=this.fb.group({
      id:[0],
      title:['',Validators.required],
      company: ['', Validators.required],
      location: [''],
      description: [''],
      requirements: [''],
    });
  }

onSubmit(){
  if(this.jobForm.valid){
    this.JobService.addjob(this.jobForm.value).subscribe({
      next: (res) =>
        {
          // this.toastr.success("Job added successfully");
          this.jobForm.reset();
        },
        error: (err) =>{
          console.log(err);
          // this.toastr.error('Failed to add job');
           
        }
    })
  }
}

}
