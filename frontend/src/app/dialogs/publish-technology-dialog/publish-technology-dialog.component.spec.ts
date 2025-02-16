import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishTechnologyDialogComponent } from './publish-technology-dialog.component';

describe('PublishTechnologyDialogComponent', () => {
  let component: PublishTechnologyDialogComponent;
  let fixture: ComponentFixture<PublishTechnologyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishTechnologyDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishTechnologyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
