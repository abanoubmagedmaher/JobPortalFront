import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyFormComponent } from './Components/apply-form/apply-form.component';
import { JobListComponent } from './Components/job-list/job-list.component';
import { JobDetailComponent } from './Components/job-detail/job-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AddJobComponent } from './Components/add-job/add-job.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './login/login.component';
import { authInterceptorInterceptor } from './auth-interceptor.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ApplicationListComponent } from './Components/application-list/application-list.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
@NgModule({
  declarations: [
    AppComponent,
    ApplyFormComponent,
    JobListComponent,
    JobDetailComponent,
    NavbarComponent,
    FooterComponent,
    AddJobComponent,
    RegisterComponent,
    LoginComponent,
    ApplicationListComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,  
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: authInterceptorInterceptor, 
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
