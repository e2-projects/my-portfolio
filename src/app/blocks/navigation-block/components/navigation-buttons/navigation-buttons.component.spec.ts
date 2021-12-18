import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'src/app/testing/mock-module.test';
import { MockedAboutBlockComponent,
        MockedContactsBlockComponent,
        MockedExperienceBlockComponent,
        MockedHomeBlockComponent } from 'src/app/testing/mock-module.test';
import { NavigationButtonsComponent } from './navigation-buttons.component';

describe('NavigationButtonsComponent', () => {
  let component: NavigationButtonsComponent;
  let fixture: ComponentFixture<NavigationButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationButtonsComponent ],
      imports: [
        MockModule,
        RouterTestingModule.withRoutes([
          { path: 'home', component: MockedHomeBlockComponent },
          { path: 'about', component: MockedAboutBlockComponent },
          { path: 'experience', component: MockedExperienceBlockComponent },
          { path: 'contacts', component: MockedContactsBlockComponent }
        ]),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
