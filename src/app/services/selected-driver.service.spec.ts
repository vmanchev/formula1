import { TestBed, inject } from '@angular/core/testing';

import { SelectedDriverService } from './selected-driver.service';

describe('SelectedDriverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedDriverService]
    });
  });

  it('should be created', inject([SelectedDriverService], (service: SelectedDriverService) => {
    expect(service).toBeTruthy();
  }));
});
