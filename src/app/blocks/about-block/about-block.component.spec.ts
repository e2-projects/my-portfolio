import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TakeEveryPipe } from 'src/app/pipes/take-every.pipe';
import { Mock } from 'src/app/testing/mock-data.test';
import { MockModule } from 'src/app/testing/mock-module.test';
import { AboutBlockComponent } from './about-block.component';

describe('AboutBlockComponent', () => {
  let component: AboutBlockComponent;
  let fixture: ComponentFixture<AboutBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AboutBlockComponent,
        TakeEveryPipe
      ],
      imports: [
        MockModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBlockComponent);
    component = fixture.componentInstance;
    component.dataList = Mock.aboutDescription;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
