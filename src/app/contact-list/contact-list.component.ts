import { Component, OnInit } from '@angular/core';
import { ContactService } from "../service/contacts.service";
import {Contact} from "../models/contact.model";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent implements OnInit {
  contacts$ = this.contactService.getContacts();
  detailContact: Contact | undefined;

  constructor(public contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contacts$.subscribe(contacts => {
      console.log(contacts);
    })
  }

  viewDetail(contact: Contact) {
    this.detailContact = contact;
  }
}
