import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPriorityComponent } from './card-priority.component';

describe('CardPriorityComponent', () => {
  let component: CardPriorityComponent;
  let fixture: ComponentFixture<CardPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPriorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
