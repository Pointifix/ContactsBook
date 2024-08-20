import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { ContactState } from "../state/contacts.reducer";
import { addContact } from "../state/contacts.actions";
import { Contact } from "../models/contact.model";
import { Observable } from "rxjs";
import { contactByIdSelector, contactsSelector } from "../state/contacts.selectors";

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private store: Store<{ state: ContactState }>) {}

  addContact(firstName: string, lastName: string, phone: string, email: string, address: string) {
      this.store.dispatch(addContact({ firstName, lastName, phone, email, address }));
  }

  getContacts(): Observable<Contact[]> {
      return this.store.select(contactsSelector);
  }

  getContact(id: number): Observable<Contact | undefined> {
      return this.store.select(contactByIdSelector(id));
  }
}
