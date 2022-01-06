import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkplaceSortPipe } from 'src/app/pipes/workplace-sort.pipe';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MockModule } from 'src/app/testing/mock-module.test';
import { ExperienceBlockComponent } from './experience-block.component';

describe('ExperienceBlockComponent', () => {
  let component: ExperienceBlockComponent;
  let fixture: ComponentFixture<ExperienceBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ExperienceBlockComponent,
        WorkplaceSortPipe
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
    fixture = TestBed.createComponent(ExperienceBlockComponent);
    component = fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
