import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(private router:Router,    private toaster:ToastrService){}
logout() {
  this.toaster.success('"Goodbye, see you soon! 👋','Success')
  localStorage.removeItem('eToken');
  this.router.navigate(['/login']);

}
}
