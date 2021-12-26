import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurvesAnimationComponent } from './curves-animation.component';

describe('CurvesAnimationComponent', () => {
  let component: CurvesAnimationComponent;
  let fixture: ComponentFixture<CurvesAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurvesAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurvesAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
