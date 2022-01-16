import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelFilterControlComponent } from './label-filter-control.component';

describe('LabelFilterControlComponent', () => {
  let component: LabelFilterControlComponent;
  let fixture: ComponentFixture<LabelFilterControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelFilterControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelFilterControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
