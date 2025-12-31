
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  sending = false;
  success = false;
  errorMessage = '';
  submitted = false;

  private serviceID = 'service_56xyaze';
  private templateID = 'template_2i5uaks';
  private userID = 'IJmWp1AUfhCluTMRS';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sending = true;
    this.errorMessage = '';
    this.success = false;

    const value = this.contactForm.value;

    const templateParams: any = {
      from_name: value.name,
      from_email: value.email,
      message: value.message
    };

    emailjs.send(this.serviceID, this.templateID, templateParams, this.userID)
      .then(() => {
        this.sending = false;
        this.success = true;
        this.contactForm.reset();
      })
      .catch(err => {
        console.error('EmailJS error:', err);  // log actual error
        this.sending = false;
        this.errorMessage = 'Failed to send message. Please check console for details.';
      });
  }
}
