import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkplaceCollapsibleContentComponent } from './workplace-collapsible-content.component';

describe('WorkplaceCollapsibleContentComponent', () => {
  let component: WorkplaceCollapsibleContentComponent;
  let fixture: ComponentFixture<WorkplaceCollapsibleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WorkplaceCollapsibleContentComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaceCollapsibleContentComponent);
    component = fixture.componentInstance;
    component.positions = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
