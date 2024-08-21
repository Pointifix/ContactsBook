import { Component, OnInit } from '@angular/core';
import { ContactService } from "../service/contacts.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Contact } from "../models/contact.model";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.less']
})
export class ContactDetailsComponent implements OnInit {
  contact$: Observable<Contact | undefined> = new Observable<Contact | undefined>();

  constructor(private route: ActivatedRoute, public contactService: ContactService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.contact$ = this.contactService.getContact(id);
  }
}
