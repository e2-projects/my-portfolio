import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Mock } from 'src/app/testing/mock-data.test';
import { MockModule } from 'src/app/testing/mock-module.test';
import { HomeBlockComponent } from './home-block.component';

describe('HomeBlockComponent', () => {
  let component: HomeBlockComponent;
  let fixture: ComponentFixture<HomeBlockComponent>;
  let firestoreService: FirestoreService;
  let firestoreSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeBlockComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MockModule
      ],
      providers: [
        { provide: FirestoreService, useValue: MockModule.firestoreService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBlockComponent);
    component = fixture.componentInstance;
    firestoreService = TestBed.inject(FirestoreService);
    firestoreSpy = jest.spyOn(firestoreService, 'getCollectionItem').mockReturnValueOnce(of(Mock.homeTabData as any));
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
