import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from 'src/app/services/auth.service'; //
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // temp var to submit register
  name: String ="";
  username: String="";
  email: String="";
  password: String = "";

  // when register set perm to USER
  permission: String = "USER"

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRegisterSubmit() {
    const userInput = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      permission: this.permission
    }
        
    // Required Fields
    if (!this.validateService.validateRegister(userInput)) {
      // console.log('Please fill in all fields');
      Swal.fire({
        icon: 'error',
        text: 'Please fill in all fields'
      })
      return false;
    } 

    // Validate Email
    if (!this.validateService.validateEmail(userInput.email)) {
      // console.log('Please use a valid email');
      Swal.fire({
        icon: 'error',
        text: 'Please use a valid email'
      });
      return false;
    }
    
    // register user
    this.authService.registerUser(userInput).subscribe(data => {
      if ((data as any).success) {
        Swal.fire({
          icon: 'success',
          text: 'Register Success'
        });
        // console.log("Register Success")
        this.router.navigate(['/login'])
      } else {
        // Swal.fire({
        //   icon: 'error',
        //   text: 'Something went wrong'
        // });
        // this.router.navigate(['/register'])
        Swal.mixin({
          icon: 'error',
        })
        this.router.navigate(['/register'])
      }
    })
    return;
  }
}
