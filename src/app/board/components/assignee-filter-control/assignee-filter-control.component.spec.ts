import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigneeFilterControlComponent } from './assignee-filter-control.component';

describe('AssigneeFilterControlComponent', () => {
  let component: AssigneeFilterControlComponent;
  let fixture: ComponentFixture<AssigneeFilterControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigneeFilterControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigneeFilterControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
