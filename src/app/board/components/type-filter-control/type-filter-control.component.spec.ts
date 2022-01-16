import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeFilterControlComponent } from './type-filter-control.component';

describe('TypeFilterControlComponent', () => {
  let component: TypeFilterControlComponent;
  let fixture: ComponentFixture<TypeFilterControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeFilterControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeFilterControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
