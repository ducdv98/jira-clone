import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEnvironmentComponent } from './card-environment.component';

describe('CardEnvironmentComponent', () => {
  let component: CardEnvironmentComponent;
  let fixture: ComponentFixture<CardEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEnvironmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
