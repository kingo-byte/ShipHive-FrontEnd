import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUpForm : FormGroup;

  constructor(private router : Router)
  {
    this.signUpForm = new FormGroup({
      email : new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      firstname: new FormControl("", [Validators.required]),
      lastname: new FormControl("", [Validators.required]),
      termsAndConditions: new FormControl(false, [Validators.requiredTrue])
    })
  }
  resetForm() : void 
  {   
    this.signUpForm.reset();
  }

  onSubmit(): void
  {
    if (this.signUpForm.valid)
    {
      this.router.navigate(["/"]);
      this.resetForm();
    }
    else
      this.signUpForm.markAllAsTouched();
  }
}
