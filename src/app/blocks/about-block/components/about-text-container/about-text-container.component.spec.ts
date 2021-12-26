import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultilinePipe } from 'src/app/pipes/multiline.pipe';
import { Mock } from 'src/app/testing/mock-data.test';
import { AboutTextContainerComponent } from './about-text-container.component';

describe('AboutTextContainerComponent', () => {
  let component: AboutTextContainerComponent;
  let fixture: ComponentFixture<AboutTextContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AboutTextContainerComponent,
        MultilinePipe
      ],
      imports: [
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTextContainerComponent);
    component = fixture.componentInstance;
    component.data = Mock.aboutDescription[0];
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
