import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyFormComponent } from './Components/apply-form/apply-form.component';
import { JobListComponent } from './Components/job-list/job-list.component';
import { JobDetailComponent } from './Components/job-detail/job-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplyFormComponent,
    JobListComponent,
    JobDetailComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,  // Add this line

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
