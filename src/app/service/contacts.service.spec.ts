import { Store} from "@ngrx/store";
import { ContactService } from "./contacts.service";
import { ContactState } from "../state/contacts.reducer";
import { TestBed } from "@angular/core/testing";

describe('Contacts service test', () => {
  let service: ContactService;
  let store: jest.Mocked<Store<{ state: ContactState }>>;

  beforeEach(() => {
    const storeMock = {
      dispatch: jest.fn(),
      select: jest.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        ContactService,
        { provide: Store, useValue: storeMock }
      ]
    });

    service = TestBed.inject(ContactService);
    store = TestBed.inject(Store) as jest.Mocked<Store<{ state: ContactState }>>;
  });

  it('Add multiple contacts', () => {
    const numContacts = 5;
    for (let i = 0; i < numContacts; i++) {
      service.addContact(
        'John' + i,
        'Doe',
        '+123456789',
        'john.doe@example.com',
        'Foo 1, Bar'
      );

      service.getContacts()?.subscribe(contacts => {
        expect(contacts.length).toBe(numContacts);
      });

      for (let i = 0; i < numContacts; i++) {
        service.getContact(i)?.subscribe(contact => {
          expect(contact?.id).toBe(i);
          expect(contact?.firstName).toBe("John" + i);
          expect(contact?.lastName).toBe("Doe");
        });
      }
    }
  });
});
