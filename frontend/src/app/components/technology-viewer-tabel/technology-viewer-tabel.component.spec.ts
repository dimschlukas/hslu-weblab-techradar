import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyViewerTabelComponent } from './technology-viewer-tabel.component';

describe('TechnologyViewerTabelComponent', () => {
  let component: TechnologyViewerTabelComponent;
  let fixture: ComponentFixture<TechnologyViewerTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyViewerTabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyViewerTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
