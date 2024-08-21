import { Component, OnInit } from '@angular/core';
import { ContactService } from "../service/contacts.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.less']
})
export class ContactAddComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      phone: [''],
      email: [''],
      address: ['']
    });
  }

  submit() {
    if (this.contactForm.valid) {
      const {firstName, lastName, phone, email, address} = this.contactForm.value;

      this.contactService.addContact(firstName, lastName, phone, email, address);

      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
