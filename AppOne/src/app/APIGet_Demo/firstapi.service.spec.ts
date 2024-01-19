import { TestBed } from '@angular/core/testing';

import { FirstapiService } from './firstapi.service';

describe('FirstapiService', () => {
  let service: FirstapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
