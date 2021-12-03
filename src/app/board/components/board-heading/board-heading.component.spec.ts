import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardHeadingComponent } from './board-heading.component';

describe('BoardHeadingComponent', () => {
  let component: BoardHeadingComponent;
  let fixture: ComponentFixture<BoardHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
