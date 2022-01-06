import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContactFormComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should init contacts form group', () => {
    component.ngOnInit();
    const controls = component.contactForm.controls;
    expect(controls.name).toBeDefined();
    expect(controls.email).toBeDefined();
    expect(controls.message).toBeDefined();
  });

  test('should name be invalid when empty', () => {
    component.ngOnInit();
    expect(component.contactForm.value.name).toEqual('');
    expect(component.contactForm.controls.name.errors).toEqual({ required: true });
  });

  test('should name be valid when not empty', () => {
    component.ngOnInit();
    component.contactForm.controls.name.setValue('Name');
    expect(component.contactForm.controls.name.errors).toBeNull();
  });

  test('should email be invalid when empty or wrong format', () => {
    component.ngOnInit();
    expect(component.contactForm.value.email).toEqual('');
    expect(component.contactForm.controls.email.errors).toEqual({ required: true });

    component.contactForm.controls.email.setValue('notanemail');
    expect(component.contactForm.controls.email.errors).toEqual({ email: true });
  });

  test('should email be valid when not empty and good format', () => {
    component.ngOnInit();
    component.contactForm.controls.email.setValue('my@email.com');
    expect(component.contactForm.controls.email.errors).toBeNull();
  });

  test('should message be invalid when empty', () => {
    component.ngOnInit();
    expect(component.contactForm.value.message).toEqual('');
    expect(component.contactForm.controls.message.errors).toEqual({ required: true });
  });

  test('should message be valid when not empty', () => {
    component.ngOnInit();
    component.contactForm.controls.message.setValue('My short message for you.');
    expect(component.contactForm.controls.message.errors).toBeNull();
  });
});
