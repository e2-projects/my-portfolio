import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: [
    './contact-form.component.scss',
    '../../../../animations/neumorphism.scss'
  ]
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required]
    });
  }

  sendMessage(): void {
    if (this.contactForm && this.contactForm.valid) {
      const values = this.contactForm.value;
      console.log(values);
    }
  }

}
