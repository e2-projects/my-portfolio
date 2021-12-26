import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MockModule } from 'src/app/testing/mock-module.test';
import { NavigationButtonsComponent } from './components/navigation-buttons/navigation-buttons.component';
import { SocialLinksBarComponent } from './components/social-links-bar/social-links-bar.component';
import { NavigationBlockComponent } from './navigation-block.component';

describe('NavigationBlockComponent', () => {
  let component: NavigationBlockComponent;
  let fixture: ComponentFixture<NavigationBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavigationButtonsComponent,
        SocialLinksBarComponent,
        NavigationBlockComponent,
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: FirestoreService, useValue: MockModule.firestoreService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
