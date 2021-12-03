import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardActionComponent } from './board-action.component';

describe('BoardActionComponent', () => {
  let component: BoardActionComponent;
  let fixture: ComponentFixture<BoardActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
