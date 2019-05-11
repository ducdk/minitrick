import { TestBed } from '@angular/core/testing';

import { SendEmitService } from './send-emit.service';

describe('SendEmitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendEmitService = TestBed.get(SendEmitService);
    expect(service).toBeTruthy();
  });
});
