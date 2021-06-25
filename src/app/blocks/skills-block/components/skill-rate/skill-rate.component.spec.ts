import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillRateComponent } from './skill-rate.component';

describe('SkillRateComponent', () => {
  let component: SkillRateComponent;
  let fixture: ComponentFixture<SkillRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
