import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommentFormComponent } from './add-comment-form.component';

describe('AddCommentFormComponent', () => {
  let component: AddCommentFormComponent;
  let fixture: ComponentFixture<AddCommentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
