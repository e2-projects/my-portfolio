import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsGroupContentComponent } from './skills-group-content.component';

describe('SkillsGroupContentComponent', () => {
  let component: SkillsGroupContentComponent;
  let fixture: ComponentFixture<SkillsGroupContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsGroupContentComponent ]
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
