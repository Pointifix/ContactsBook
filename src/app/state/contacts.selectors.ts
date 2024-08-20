import { ContactState } from './contacts.reducer';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Contact } from "../models/contact.model";

export const contactsStateSelector = createFeatureSelector<ContactState>('contacts');

export const contactsSelector = createSelector(contactsStateSelector, (contactsState: ContactState) => contactsState.contacts);

export const contactByIdSelector = (contactId: number) => createSelector(
  contactsSelector,
  (contacts: Contact[]) => contacts.find(contact => contact.id === contactId)
);
