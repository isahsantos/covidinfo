import { TestBed } from '@angular/core/testing';

import { SarscovDashboardService } from './sarscov-dashboard.service';

describe('SarscovDashboardService', () => {
  let service: SarscovDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SarscovDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
