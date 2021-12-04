import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutTextContainerComponent } from './about-text-container.component';

describe('AboutTextContainerComponent', () => {
  let component: AboutTextContainerComponent;
  let fixture: ComponentFixture<AboutTextContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTextContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTextContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
