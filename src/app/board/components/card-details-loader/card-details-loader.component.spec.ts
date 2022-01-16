import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsLoaderComponent } from './card-details-loader.component';

describe('CardDetailsLoaderComponent', () => {
  let component: CardDetailsLoaderComponent;
  let fixture: ComponentFixture<CardDetailsLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailsLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
