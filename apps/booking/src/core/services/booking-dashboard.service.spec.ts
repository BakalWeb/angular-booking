import { TestBed } from '@angular/core/testing';

import { BookingDashboardService } from './booking-dashboard.service';

describe('BookingDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingDashboardService = TestBed.get(BookingDashboardService);
    expect(service).toBeTruthy();
  });
});
