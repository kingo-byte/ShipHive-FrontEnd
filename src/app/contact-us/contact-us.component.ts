import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.contactForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      subject: ["", [Validators.required]],
      message: ["", [Validators.required, Validators.maxLength(2000)]]
    })
  }

  onSubmit(): void {
    if (this.contactForm.valid)
      alert("Submitted");
    else
      this.contactForm.markAllAsTouched();
  }
}
