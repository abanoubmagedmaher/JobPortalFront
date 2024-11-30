import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './Components/job-list/job-list.component';
import { JobDetailComponent } from './Components/job-detail/job-detail.component';
import { ApplyFormComponent } from './Components/apply-form/apply-form.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AddJobComponent } from './Components/add-job/add-job.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Jobs', component: JobListComponent },
  { path: 'jobs/:id', component: JobDetailComponent ,title:'jobs'},
  { path: 'apply/:id', component: ApplyFormComponent,title:'apply' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'addjob', component:AddJobComponent,title:'Add Job ' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
