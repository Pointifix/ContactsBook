import {Component, Input, OnInit} from '@angular/core';
import { ContactService } from "../service/contacts.service";
import { Contact } from "../models/contact.model";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.less']
})
export class ContactDetailsComponent implements OnInit {
  @Input() contact!: Contact;

  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
  }
}
