import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MockModule } from 'src/app/testing/mock-module.test';
import { ContactsBlockComponent } from './contacts-block.component';

describe('ContactsBlockComponent', () => {
  let component: ContactsBlockComponent;
  let fixture: ComponentFixture<ContactsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContactsBlockComponent
      ],
      imports: [
        MockModule
      ],
      providers: [
        { provide: FirestoreService, useValue: MockModule.firestoreService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
