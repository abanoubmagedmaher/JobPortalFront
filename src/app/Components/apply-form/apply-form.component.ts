import { Component } from '@angular/core';
import { ApplicationDto } from '../../Models/application-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../Services/job.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrl: './apply-form.component.css'
})
export class ApplyFormComponent {
  errorMessage:string=''
application: ApplicationDto = { name: '', email: '', jobId: 0, resume: null! };

constructor(
  private JobService: JobService,
  private route: ActivatedRoute,
  private toastr: ToastrService,
  private _router:Router
) { }

ngOnInit(): void {
  this.application.jobId = +this.route.snapshot.paramMap.get('id')!;
}

onFileSelect(event: any): void {
  this.application.resume = event.target.files[0];
}

onSubmit(): void {
  if (!this.application.name || !this.application.email || !this.application.resume) {
    this.toastr.error('Please fill out all fields and try again.', 'Validation Error');
    this.errorMessage='Please fill out all fields and Enter a Valid E-mail like Example@example.example'

    return;
  }

  this.JobService.SubmitApplicationAuth(this.application).subscribe(
    (data) => {
      this.toastr.success('Your application has been submitted successfully!', 'Success'); 
      this._router.navigate(['/applicationlist'])   
    },
    (error) => {
      if (error.status === 401) {
        this.toastr.warning('You need to log in to submit the Job application.');
        this._router.navigate(['/login']);
      } 
      else {
        this.toastr.error('An error occurred while submitting your application.', 'Error');
      }    }
  );
}
}