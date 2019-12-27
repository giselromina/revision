import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockDialogComponent } from './lock-dialog.component';

describe('LockDialogComponent', () => {
  let component: LockDialogComponent;
  let fixture: ComponentFixture<LockDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
