import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationButtonsComponent } from 'src/app/blocks/navigation-block/components/navigation-buttons/navigation-buttons.component';
import { SocialLinksBarComponent } from 'src/app/blocks/navigation-block/components/social-links-bar/social-links-bar.component';
import { NavigationBlockComponent } from 'src/app/blocks/navigation-block/navigation-block.component';

import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainPageComponent,
        NavigationButtonsComponent,
        SocialLinksBarComponent,
        NavigationBlockComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
