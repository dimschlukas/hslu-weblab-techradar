import { TestBed } from '@angular/core/testing';

import { TechnologyDialogService } from './technology-dialog.service';

describe('TechnologyDialogService', () => {
  let service: TechnologyDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnologyDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
