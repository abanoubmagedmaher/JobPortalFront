import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../../Services/application.service';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrl: './view-application.component.css'
})
export class ViewApplicationComponent {

  application: any;

  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchApplication(+id);
    }
  }

  fetchApplication(id: number): void {
    this.applicationService.getApplicationById(id).subscribe(
      (data) => {
        this.application = data;
      },
      (error) => {
        console.error('Error fetching application:', error);
      }
    );
  }
}
