import { Component, OnInit } from '@angular/core';
import { ContactService } from "../service/contacts.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent implements OnInit {
  contacts$ = this.contactService.getContacts();

  constructor(public contactService: ContactService) {
  }

  ngOnInit(): void {
  }

}
