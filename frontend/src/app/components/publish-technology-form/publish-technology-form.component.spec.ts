import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishTechnologyFormComponent } from './publish-technology-form.component';

describe('PublishTechnologyFormComponent', () => {
  let component: PublishTechnologyFormComponent;
  let fixture: ComponentFixture<PublishTechnologyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishTechnologyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishTechnologyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
