import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStartDateComponent } from './card-start-date.component';

describe('CardStartDateComponent', () => {
  let component: CardStartDateComponent;
  let fixture: ComponentFixture<CardStartDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardStartDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStartDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
