import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // loginForm: User = new User;
  loginForm={
    email:'',
    password:''
  }
  errors: any = [];

  constructor(
    private router: Router,) { }

  ngOnInit(): void {

    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload(); 
    } else {
      localStorage.removeItem('foo') 
    }
    // if(this.authService.isAuthenticated) this.router.navigate(['/dashboard'], {
    //   queryParams: { message: 'Please log out first ' }
    // });
  }


  logIn() {


    // 
    // this.authService.logIn(this.loginForm).subscribe(data => {
    //   console.log(data)
    //   this.errors = []

    // }, err => {
    //   console.log(err)
    //   this.errors[0] = err.message 
    // })

   /*  this.authService.logIn(this.loginForm).subscribe({
      next: data => {
        console.log(data);
        this.appComponent.isAuthenticated = true;
        this.router.navigate(['/dashboard'], {
          queryParams: { message: 'You logged in successfully ' }
        });
        this.errors = [];

      },
      error: err => {
        // console.log(err)
        this.errors[0] = err.message
      }
    }) */


  }

}
