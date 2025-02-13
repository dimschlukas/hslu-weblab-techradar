import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechnologyDialogComponent } from './add-technology-dialog.component';

describe('AddTechnologyDialogComponent', () => {
  let component: AddTechnologyDialogComponent;
  let fixture: ComponentFixture<AddTechnologyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTechnologyDialogComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTechnologyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
