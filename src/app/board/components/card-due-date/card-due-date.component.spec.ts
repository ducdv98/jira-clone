import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDueDateComponent } from './card-due-date.component';

describe('CardDueDateComponent', () => {
  let component: CardDueDateComponent;
  let fixture: ComponentFixture<CardDueDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDueDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDueDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
