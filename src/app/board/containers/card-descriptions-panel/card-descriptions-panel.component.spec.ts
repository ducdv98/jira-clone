import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDescriptionsPanelComponent } from './card-descriptions-panel.component';

describe('CardDescriptionsPanelComponent', () => {
  let component: CardDescriptionsPanelComponent;
  let fixture: ComponentFixture<CardDescriptionsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDescriptionsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDescriptionsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
