import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceCollapsibleComponent } from './workplace-collapsible.component';

describe('WorkplaceCollapsibleComponent', () => {
  let component: WorkplaceCollapsibleComponent;
  let fixture: ComponentFixture<WorkplaceCollapsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplaceCollapsibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaceCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
