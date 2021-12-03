import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardColumnComponent } from './board-column.component';

describe('BoardColumnComponent', () => {
  let component: BoardColumnComponent;
  let fixture: ComponentFixture<BoardColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
