import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MockModule } from 'src/app/testing/mock-module.test';
import { SkillsBlockComponent } from './skills-block.component';

describe('SkillsBlockComponent', () => {
  let component: SkillsBlockComponent;
  let fixture: ComponentFixture<SkillsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillsBlockComponent
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
    fixture = TestBed.createComponent(SkillsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
