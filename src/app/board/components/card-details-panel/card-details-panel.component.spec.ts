import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsPanelComponent } from './card-details-panel.component';

describe('CardDetailsPanelComponent', () => {
  let component: CardDetailsPanelComponent;
  let fixture: ComponentFixture<CardDetailsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
