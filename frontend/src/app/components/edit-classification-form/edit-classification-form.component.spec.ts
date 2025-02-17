import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassificationFormComponent } from './edit-classification-form.component';

describe('EditClassificationFormComponent', () => {
  let component: EditClassificationFormComponent;
  let fixture: ComponentFixture<EditClassificationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditClassificationFormComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EditClassificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
