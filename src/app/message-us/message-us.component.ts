import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-us',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './message-us.component.html',
  styleUrl: './message-us.component.css'
})
export class MessageUsComponent {
  ContactForm : FormGroup;

  constructor()
  {
    this.ContactForm = new FormGroup({
      email : new FormControl("", [Validators.required, Validators.email]),
      subject: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.required, Validators.maxLength(2000)])
    })
  }

  onSubmit(): void
  {
    if (this.ContactForm.valid)
      alert("Submited");
    else
      this.ContactForm.markAllAsTouched();
  }
}
