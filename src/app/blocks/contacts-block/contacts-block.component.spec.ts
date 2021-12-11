import { ComponentFixture, TestBed } from '@angular/core/testing';
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
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
