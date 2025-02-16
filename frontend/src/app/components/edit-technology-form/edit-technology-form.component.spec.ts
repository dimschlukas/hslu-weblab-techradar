import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTechnologyFormComponent } from './edit-technology-form.component';

describe('EditTechnologyFormComponent', () => {
  let component: EditTechnologyFormComponent;
  let fixture: ComponentFixture<EditTechnologyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTechnologyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTechnologyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
