import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkplaceCollapsibleComponent } from './components/workplace-collapsible/workplace-collapsible.component';
import { ExperienceBlockComponent } from './experience-block.component';

describe('ExperienceBlockComponent', () => {
  let component: ExperienceBlockComponent;
  let fixture: ComponentFixture<ExperienceBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ExperienceBlockComponent,
        WorkplaceCollapsibleComponent
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
