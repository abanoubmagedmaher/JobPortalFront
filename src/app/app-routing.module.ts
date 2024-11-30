import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './Components/job-list/job-list.component';
import { JobDetailComponent } from './Components/job-detail/job-detail.component';
import { ApplyFormComponent } from './Components/apply-form/apply-form.component';

const routes: Routes = [
  { path: '', component: JobListComponent },
  { path: 'jobs/:id', component: JobDetailComponent ,title:'jobs'},
  { path: 'apply/:id', component: ApplyFormComponent,title:'apply' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
