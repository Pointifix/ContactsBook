import { createAction, props } from '@ngrx/store';

export const addContact = createAction(
  'Add contact',
  props<{ firstName: string, lastName: string, phone: string, email: string, address: string }>()
);
