import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'src/app/testing/mock-module.test';
import { SkillsGroupContentComponent } from './skills-group-content.component';

describe('SkillsGroupContentComponent', () => {
  let component: SkillsGroupContentComponent;
  let fixture: ComponentFixture<SkillsGroupContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillsGroupContentComponent
      ],
      imports: [
        MockModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsGroupContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
