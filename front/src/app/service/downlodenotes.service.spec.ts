import { TestBed } from '@angular/core/testing';

import { DownlodenotesService } from './downlodenotes.service';

describe('DownlodenotesService', () => {
  let service: DownlodenotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownlodenotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
