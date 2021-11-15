import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarResizerComponent } from './sidebar-resizer.component';

describe('SidebarResizerComponent', () => {
  let component: SidebarResizerComponent;
  let fixture: ComponentFixture<SidebarResizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarResizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarResizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
