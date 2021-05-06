import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MOCKED_WORK_EXPERIENCES } from '../../models/work-experience.data';
import { WorkplaceCollapsibleContentComponent } from './workplace-collapsible-content.component';

describe('WorkplaceCollapsibleContentComponent', () => {
  let component: WorkplaceCollapsibleContentComponent;
  let fixture: ComponentFixture<WorkplaceCollapsibleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplaceCollapsibleContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaceCollapsibleContentComponent);
    component = fixture.componentInstance;
    component.data = MOCKED_WORK_EXPERIENCES[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
