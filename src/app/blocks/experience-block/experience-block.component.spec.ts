import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkplaceSortPipe } from 'src/app/pipes/workplace-sort.pipe';
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
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
