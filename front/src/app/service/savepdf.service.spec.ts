import { TestBed } from '@angular/core/testing';

import { SavepdfService } from './savepdf.service';

describe('SavepdfService', () => {
  let service: SavepdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavepdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
