import { TestBed } from '@angular/core/testing';

import { LogResponse.InterceptorService } from './log-response.interceptor.service';

describe('LogResponse.InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogResponse.InterceptorService = TestBed.get(LogResponse.InterceptorService);
    expect(service).toBeTruthy();
  });
});
