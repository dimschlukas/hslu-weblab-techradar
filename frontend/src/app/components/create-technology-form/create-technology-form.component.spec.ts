import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTechnologyFormComponent } from './create-technology-form.component';

describe('CreateTechnologyFormComponent', () => {
  let component: CreateTechnologyFormComponent;
  let fixture: ComponentFixture<CreateTechnologyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTechnologyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTechnologyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
