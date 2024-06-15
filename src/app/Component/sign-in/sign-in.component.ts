import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthorizationService } from '../../services/authorization.service';
import { SignInDto } from '../../services/models/dtos';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private authService: AuthorizationService
  ) {

    this.signInForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/), Validators.email]],
      password: ["", [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]]
    })
  }

  onSubmit(): void {
    if (this.signInForm.valid) {

      const signInDto: SignInDto = 
      {
        email: this.signInForm.get('email')?.value!,
        password: this.signInForm.get('password')?.value!        
      }

      this.authService.login(signInDto).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.baseResponse?.token!);
          this.router.navigate(['/home']);
  
          },
        error: (err)=> {
              console.log(err.error);
          }
      })
    } else {
      this.signInForm.markAllAsTouched();
    }
  }
}
