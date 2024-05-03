import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactForm : FormGroup;

  constructor()
  {
    this.contactForm = new FormGroup({
      email : new FormControl("", [Validators.email]),
      subject: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.maxLength(2000)])
    })
  }
  resetForm() : void 
  {   
    this.contactForm.reset();
  }

  onSubmit(): void
  {
    if (this.contactForm.valid)
    {
      alert("Submited");
      this.resetForm();
    }
    else
      this.contactForm.markAllAsTouched();
  }
}
