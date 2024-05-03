import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {

    this.signInForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    })
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      this.router.navigate(['/home']);
    } else {
      this.signInForm.markAllAsTouched();
    }
  }
}
