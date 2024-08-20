import { contactReducer, ContactState } from "./contacts.reducer";
import { addContact } from "./contacts.actions";
import { contactByIdSelector, contactsSelector } from "./contacts.selectors";

describe('Contacts action/reducer/selectors test', () => {
  const initialState: ContactState = {
    contacts: [],
    nextId: 0,
  };

  it('Add multiple contacts', () => {
    let state = initialState;

    const numContacts = 5;
    for (let i = 0; i < numContacts; i++) {
      const action = addContact({
        firstName: 'John' + i,
        lastName: 'Doe',
        phone: '+123456789',
        email: 'john.doe@example.com',
        address: 'Foo 1, Bar'
      });

      state = contactReducer(state, action);
    }

    expect(state.contacts.length).toBe(numContacts);

    const contacts = contactsSelector.projector(state);

    expect(contacts?.length).toBe(numContacts);

    for (let i = 0; i < numContacts; i++) {
      const contact = contactByIdSelector(i).projector(contactsSelector.projector(state));

      expect(contact?.id).toBe(i);
      expect(contact?.firstName).toBe("John" + i);
      expect(contact?.lastName).toBe("Doe");
    }
  });
});
