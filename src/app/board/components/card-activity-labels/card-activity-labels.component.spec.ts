import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActivityLabelsComponent } from './card-activity-labels.component';

describe('CardActivityLabelsComponent', () => {
  let component: CardActivityLabelsComponent;
  let fixture: ComponentFixture<CardActivityLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardActivityLabelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardActivityLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
