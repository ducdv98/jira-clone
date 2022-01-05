import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAssigneeComponent } from './card-assignee.component';

describe('CardAssigneeComponent', () => {
  let component: CardAssigneeComponent;
  let fixture: ComponentFixture<CardAssigneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAssigneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAssigneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
