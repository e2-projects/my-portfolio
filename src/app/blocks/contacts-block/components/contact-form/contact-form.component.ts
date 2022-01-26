import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: [
    './contact-form.component.scss',
    '../../../../animations/neumorphism.scss'
  ]
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    void this.contactForm.addControl('name', new FormControl('', Validators.required));
    void this.contactForm.addControl('email', new FormControl('', [Validators.email, Validators.required]));
    void this.contactForm.addControl('message', new FormControl('', Validators.required));
  }

  sendMessage(): void {
    if (this.contactForm && this.contactForm.valid) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const values = this.contactForm.value;
      console.log(values);
    }
  }

}
