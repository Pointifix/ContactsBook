import { createReducer, on } from '@ngrx/store';

import { addContact } from './contacts.actions';
import { Contact } from '../models/contact.model';

export interface ContactState {
  contacts: Contact[];
  nextId: number;
  selectedId: number | undefined;
}

const initialState: ContactState = {
  contacts: [],
  nextId: 0,
  selectedId: undefined
};

export const contactReducer = createReducer(
  initialState,
  on(addContact, (state, { firstName, lastName, phone, email, address }) => ({
    ...state,
    contacts: [
      ...state.contacts,
      {
        id: state.nextId,
        firstName,
        lastName,
        phone,
        email,
        address
      }
    ],
    nextId: state.nextId + 1
  }))
);
