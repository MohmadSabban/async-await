import { TestBed } from '@angular/core/testing';

import { LearnObserableService } from './learn-obserable.service';

describe('LearnObserableService', () => {
  let service: LearnObserableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearnObserableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
