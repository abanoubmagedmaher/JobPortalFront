import { JobService } from './../../Services/job.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.css'
})
export class AddJobComponent {
  jobForm!: FormGroup;

  constructor(private fb:FormBuilder,private JobService:JobService,  private toastr: ToastrService,
    private _router:Router){
    this.jobForm=this.fb.group({
      id:[0],
      title:['',Validators.required],
      company: ['', Validators.required],
      location: ['',Validators.required],
      description: ['',Validators.required],
      requirements: ['',Validators.required],
    });
  }

onSubmit(){
  if(this.jobForm.valid){
    this.JobService.addjob(this.jobForm.value).subscribe({
      next: (res) =>
        {
          this.toastr.success('Job added successfully!', 'Success'); 
          this.jobForm.reset();
          this._router.navigate(['/Jobs'])  
        },
        error: (err) =>{
          console.log(err);
          this.toastr.error(`An error occurred while Add Job .`);           
        }
    })
  }
}

}
